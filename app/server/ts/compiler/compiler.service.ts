import * as ts from 'typescript';

class CompilerService {
    private readonly precode = '/// code start ///';
    constructor() {
    }

    process(jscode) {
        let code = this.precode + jscode;
        let transpiled = ts.transpileModule(code, {}).outputText;
        let finalCode = transpiled.split(this.precode)[1];

        return finalCode;
    }

}

export let compilerService = new CompilerService();