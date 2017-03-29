import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

function transform(contents: string, libSource: string, compilerOptions: ts.CompilerOptions = {}) {
    // Generated outputs
    let outputs = [];
    // Create a compilerHost object to allow the compiler to read and write files
    let compilerHost: ts.CompilerHost = {
        getSourceFile: function (filename, languageVersion) {
            if (filename === 'file.ts')
                return ts.createSourceFile(filename, contents, compilerOptions.target, false);
            if (filename === 'lib.d.ts')
                return ts.createSourceFile(filename, libSource, compilerOptions.target, false);
            return undefined;
        },
        writeFile: function (name, text, writeByteOrderMark) {
            outputs.push({ name: name, text: text, writeByteOrderMark: writeByteOrderMark });
        },
        getDefaultLibFileName: () => { return 'lib.d.ts'; },
        getDirectories: () => { return ['']; },
        useCaseSensitiveFileNames: () => { return false; },
        getCanonicalFileName: filename => { return filename; },
        getCurrentDirectory: () => { return ''; },
        getNewLine: () => { return '\n'; },
        fileExists: () => { return true; },
        readFile: () => { return ''; },
    };
    // Create a program from inputs
    let program: ts.Program = ts.createProgram(['file.ts'], compilerOptions, compilerHost);

    return {
        outputs: outputs,
        errors: {
            semantic: program.getSemanticDiagnostics(),
            syntactic: program.getSyntacticDiagnostics(),
            declaration: program.getDeclarationDiagnostics()
        }
    };
}

class CompilerService {
    private readonly precode = '/* code start */';
    private readonly declarations = ' \n let lib: any = {};';
    private readonly removers = 'lib = {};'

    private compilerOptions: ts.CompilerOptions = {
        target: ts.ScriptTarget.ES5
    }

    private options: ts.TranspileOptions = {
        compilerOptions: this.compilerOptions,
        reportDiagnostics: true
    }

    constructor() {}

    process(jscode) {
        let code = this.precode + this.declarations + jscode;
        let transpiled = ts.transpileModule(code, this.options);
        let finalCode = transpiled.outputText.split(this.precode)[1];
        finalCode = finalCode.split(this.removers)[1];
        let libSource = fs.readFileSync(path.join(path.dirname(require.resolve('typescript')), 'lib.d.ts')).toString();
        let checkErrors = transform(code, libSource, this.options.compilerOptions);
        let errorsFound = false;

        if (checkErrors.errors.semantic.length > 0 || checkErrors.errors.syntactic.length > 0 || checkErrors.errors.declaration.length > 0) {
            finalCode = '';
            errorsFound = true;
        }

        if (checkErrors.errors.semantic.length > 0) {
            finalCode += 'Stopped by Semantic Error: \n' + checkErrors.errors.semantic[0].messageText + '\n';
        }

        if (checkErrors.errors.syntactic.length > 0) {
            errorsFound = true;
            finalCode += 'Stopped by Syntactic Error: \n' + checkErrors.errors.syntactic[0].messageText + '\n';
        }

        if (checkErrors.errors.declaration.length > 0) {
            finalCode += 'Stopped by Declaration Error: \n' + checkErrors.errors.declaration[0].messageText + '\n';
        }

        return {failed: errorsFound, code: finalCode};
    }

}

export let compilerService = new CompilerService();