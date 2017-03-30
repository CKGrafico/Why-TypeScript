import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './advanced-types.template';

export class AdvancedTypesSlide extends CodeSlide {
    constructor() {
        super('advanced-types', '.js-slide-advanced-types');
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
