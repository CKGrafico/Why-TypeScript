import * as $ from 'jquery';
import 'webslides/static/js/svg-icons.js';
import 'webslides/static/js/webslides.js';

import {Slide} from './shared/slide';
import {loadingService} from './shared/loading';
import {HomeSlide} from './home';
import {MeSlide} from './me';
import {BasicTypesSlide} from './basic-types';
import {VariablesSlide} from './variables';

let selectors = {
    wrapper: '#webslides'
};

export default class {
    private list: Slide[];
    private $container;

    constructor() {
        this.$container = $(selectors.wrapper);

        this.list = [
            new HomeSlide(),
            new MeSlide(),
            new BasicTypesSlide(),
            new VariablesSlide()
        ];

        loadingService.show();
        this.renderSlides();
        this.appendContainer();
        this.initSlides();
        loadingService.hide();
    }

    private renderSlides(): void {
        for (let slide of this.list) {
            this.$container.append(slide.compile());
            slide.onCreate();
        }
    }

    private appendContainer(): void {
        $('body').prepend(this.$container);
    }

    private initSlides(): void {
        let slides = new window['WebSlides'];
    }

}