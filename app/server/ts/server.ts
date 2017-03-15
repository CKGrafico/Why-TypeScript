import * as express from 'express';
import * as spa from 'express-spa';

import {json} from 'body-parser';
import {Express, Request, Response} from 'express';
import {CompilerController} from './compiler';

const PORT = 8080;

export class Server {
    private app: Express;

    constructor() {
        this.app = express();
        this.app.use(express.static(__dirname + '/client'));
        this.app.use(json());

        this.app.use(spa(__dirname + '/client/index.html'));

        this.configRouter();

        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }

    private configRouter(): void {

        this.app.get('/', (req: Request, res: Response) => {
            res.sendfile('./dist/client/index.html');
        });

        this.app.post('/compiler', (req: Request, res: Response) => new CompilerController(req, res));
    }

}
new Server();
