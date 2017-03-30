import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './interfaces.template';

export class InterfacesSlide extends CodeSlide {
    constructor() {
        super('interfaces', '.js-slide-interfaces');
        this.template = template;
    }

    public onEval(): void {
        let context = window[this.context];
        let balloon = context.myBalloon;
        let $balloon = $('.balloon');
        $balloon.css({
            backgroundColor: balloon.color
        });

        $balloon.text(balloon.age);
        if (balloon.title) {
            $balloon.attr('data-text', balloon.title);
        }
    }
}
