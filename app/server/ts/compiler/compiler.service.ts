import * as ts from 'typescript';

class CompilerService {
    private readonly precode = '/// code start ///';
    constructor() {
        
    }

    process() {
        let sample = `
            class Hola {
                private a:string;
                constructor() {
                    this.a = 1;
                }
            }

            var b = new Hola()
        `;

        let code = this.precode + sample;
        let transpiled = ts.transpileModule(code, {}).outputText;
        let finalCode = transpiled.split(this.precode)[1];

        console.log(finalCode)
        return finalCode;
    }

}

export let compilerService = new CompilerService();