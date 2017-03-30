import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './generics.template';

export class GenericsSlide extends CodeSlide {
    constructor() {
        super('generics', '.js-slide-generics');
        this.template = template;
    }

    public onEval(): void {
        // let context = window[this.context];
        // let rectangle = new context.default();
        // let $rectangle = $('.rectangle');
        // $rectangle.css({
        //     backgroundColor: rectangle.color,
        //     height: rectangle.height + 'px',
        //     width: rectangle.width + 'px'
        // });
    }
}
