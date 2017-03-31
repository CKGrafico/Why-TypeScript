import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './interfaces.template';

const container = '.js-slide-interfaces';

export class InterfacesSlide extends CodeSlide {
    constructor() {
        super('interfaces', container);
        this.template = template;
    }

    public onEval(): void {
        let context = window[this.context];
        let balloon = context.myBalloon;
        let $container = $(container);
        let $balloon = $container.find('.balloon');
        let $basket = $container.find('.basket');
        $balloon.css({
            backgroundColor: balloon.color
        });

        let parent = `${container} .hot-air-balloon`;
        this.addRule(`${parent} .balloon:before`, `background: ${balloon.color}`);
        this.addRule(`${parent} .balloon:after`, `background: ${balloon.color}`);
        this.addRule(`${parent} .balloon span:after`, `background: ${balloon.color}`);

        $basket.text(balloon.age || '');
    }
}
