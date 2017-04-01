import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './generics.template';

const container = '.js-slide-generics';


export class GenericsSlide extends CodeSlide {
    constructor() {
        super('generics', container);
        this.template = template;
    }

    public onEval(): void {
        let context = window[this.context];
        let list = context.default;
        let $container = $(container);
        let $board = $container.find('.board');

        if (list.length) {
            $board.text(list.length);
        }

        // Remember that if you use custom class for the type
        // you ahve to create a method to override toString()
        if (list.getValues) {
            $board.text(list.getValues());
        }
    }
}
