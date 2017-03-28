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
        let rectangle = new context.default();
        let $rectangle = $('.rectangle');
        $rectangle.css({
            backgroundColor: rectangle.color,
            height: rectangle.height + 'px',
            width: rectangle.width + 'px'
        });
    }
}
