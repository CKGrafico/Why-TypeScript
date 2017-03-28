import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './classes.template';

export class ClassesSlide extends CodeSlide {
    constructor() {
        super('classes', '.js-slide-classes');
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
