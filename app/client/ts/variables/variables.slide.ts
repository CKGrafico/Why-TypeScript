import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './variables.template';

export class VariablesSlide extends CodeSlide {
    constructor() {
        super('variables', '.js-slide-variables');
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
