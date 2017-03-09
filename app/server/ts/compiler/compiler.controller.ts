import {Express, Request, Response} from "express";

export class CompilerController {

    constructor(req: Request, res: Response) {
        console.log('hello');
        res.send(200);
        
    }

}