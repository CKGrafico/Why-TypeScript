import {Express, Request, Response} from 'express';
import {compilerService} from './compiler.service';

export class CompilerController {

    constructor(req: Request, res: Response) {
        let jscode = req.body.code;

        if(!jscode) {
            res.send(500);
            return;
        }

        res.send(compilerService.process(jscode));
    }

}