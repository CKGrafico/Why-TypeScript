import * as $ from 'jquery';
import 'webslides/static/js/svg-icons.js';
import 'webslides/static/js/webslides.js';

import Router from './app.router';

let selectors = {
    wrapper: '#webslides'
};

class App {
    private router: Router;

    constructor() {
        this.router = new Router(selectors.wrapper);
    }
}

new App();
