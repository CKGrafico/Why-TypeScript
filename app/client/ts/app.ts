import * as $ from 'jquery';
import 'webslides/static/js/svg-icons.js';
import 'webslides/static/js/webslides.js';

import Slides from './app.slides';

class App {
    private slides: Slides;

    constructor() {
        this.slides = new Slides();
    }
}

new App();
