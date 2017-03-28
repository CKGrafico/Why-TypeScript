import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './classes2.template';

export class Classes2Slide extends CodeSlide {
    constructor() {
        super('classes2', '.js-slide-classes2');
        this.template = template;
    }

    public onEval(): void {
        let context = window[this.context];
        let rectangle = new context.default();
        let $rectangle = $('.rectangle');
        $rectangle.css({
            backgroundColor: rectangle.color,
            height: rectangle.height + 'px',
            width: rectangle.width + 'px'
        });
    }
}
