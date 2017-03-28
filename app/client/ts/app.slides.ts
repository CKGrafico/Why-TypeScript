import * as $ from 'jquery';
import 'webslides/static/js/svg-icons.js';
import 'webslides/static/js/webslides.js';

import {Slide} from './shared/slide';
import {loadingService} from './shared/loading';
import {HomeSlide} from './home';
import {MeSlide} from './me';
import {IntroductionSlide} from './introduction';
import {BasicTypesSlide} from './basic-types';
import {VariablesSlide} from './variables';
import {InterfacesSlide} from './interfaces';
import {ClassesSlide} from './classes';
import {Classes2Slide} from './classes2';
import {GenericsSlide} from './generics';
import {EnumsSlide} from './enums';
import {AdvancedTypesSlide} from './advanced-types';
import {DecoratorsSlide} from './decorators';
import {TypingsSlide} from './typings';
import {ModulesSlide} from './modules';
import {Is4allSlide} from './is4all';
import {Is4WhoSlide} from './is4who';
import {Is4WhatSlide} from './is4what';
import {FlowSlide} from './flow';
import {ThanksSlide} from './thanks';

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
            new MeSlide(), // Plain // helpdev
            new IntroductionSlide(), // what // vs ES // cli
            new BasicTypesSlide(),
            new VariablesSlide(),
            new InterfacesSlide(),
            new ClassesSlide(),
            new Classes2Slide(),
            new GenericsSlide(),
            new EnumsSlide(),
            new AdvancedTypesSlide(),
            new DecoratorsSlide(),
            new TypingsSlide(),
            new ModulesSlide(),
            new Is4allSlide(),
            new Is4WhoSlide(), // back -> front // adv front // !begginer
            new Is4WhatSlide(), // maintenable new proj // oldjs = ts
            new FlowSlide(),
            new ThanksSlide()
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