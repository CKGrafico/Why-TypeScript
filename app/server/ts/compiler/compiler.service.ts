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
    // Probably have to refactor that but by the time...
    private readonly importer = 'import {lib} from \'lib\';';
    private readonly precode = '/* code start */';
    private readonly declarations = 'let lib: any = {};';
    private readonly removers = 'var lib = {};'

    private compilerOptions: ts.CompilerOptions = {
        target: ts.ScriptTarget.ES5,
        experimentalDecorators: true
    }

    private options: ts.TranspileOptions = {
        compilerOptions: this.compilerOptions,
        reportDiagnostics: true,
    }

    private addMethods(code) {
        // Yes could be better =)
        let methods = `
            var promise = {
                then: function() {},
                catch: function() {}
            }
            var lib = {
                create: function() {},
                ajax: function() { return promise},
                move: function() {},
                show: function() {},
                sound: function() {this.isSound = true},
                isSound: false,
                setName: function() {}
            };

            exports.promise = promise;
            exports.lib = lib;
        `;
        let splitted = code.split(this.precode);
        return splitted[0] + methods + splitted[1].replace(this.removers, '');
    }

    public process(jscode) {
        let code = this.precode + this.declarations + jscode.replace(this.importer, '');
        let transpiled = ts.transpileModule(code, this.options);
        let finalCode = transpiled.outputText.split(this.precode)[1];
        finalCode = finalCode.replace(this.removers, '// var lib = {...}');
        let libSource = fs.readFileSync(path.join(path.dirname(require.resolve('typescript')), 'lib.d.ts')).toString();
        let checkErrors = transform(code, libSource, this.options.compilerOptions);
        let errorsFound = false;

        if (checkErrors.errors.semantic.length > 0 || checkErrors.errors.syntactic.length > 0 || checkErrors.errors.declaration.length > 0) {
            finalCode = '';
            errorsFound = true;
        }

        if (checkErrors.errors.semantic.length > 0) {
            let text: any = checkErrors.errors.semantic[0].messageText;
            finalCode += 'Stopped by Semantic Error: \n' + (text.messageText || text) + '\n';
        }

        if (checkErrors.errors.syntactic.length > 0) {
            let text: any = checkErrors.errors.syntactic[0].messageText;
            finalCode += 'Stopped by Syntactic Error: \n' + (text.messageText || text) + '\n';
        }

        if (checkErrors.errors.declaration.length > 0) {
            let text: any = checkErrors.errors.declaration[0].messageText;
            finalCode += 'Stopped by Declaration Error: \n' + (text.messageText || text) + '\n';
        }

        return {failed: errorsFound, code: finalCode, realCode: this.addMethods(transpiled.outputText)};
    }

}

export let compilerService = new CompilerService();