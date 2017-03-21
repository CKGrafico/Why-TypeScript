import * as $ from 'jquery';
import 'webslides/static/js/svg-icons.js';
import 'webslides/static/js/webslides.js';

import {Slide} from './shared/slide';
import {loadingService} from './shared/loading';
import {HomeSlide} from './home';
import {MeSlide} from './me';

export default class {
    private slides: Slide[];
    private $container;

    constructor(container) {
        this.$container = $(container);
        this.slides = [
            new HomeSlide(),
            new MeSlide()
        ];

        this.init();
    }

    private init(): void {
        let $templates = $('<div/>');
        loadingService.show();
        for (let slide of this.slides) {
            $templates.append(slide.compile());
        }

        this.$container.append($templates);
        loadingService.hide();
    }
}