import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './enums.template';

const container = '.js-slide-enums';

let constants = {
    left: 'enums-left',
    right: 'enums-right',
    up: 'enums-up',
    down: 'enums-down'
};

export class EnumsSlide extends CodeSlide {
    constructor() {
        super('enums', container);
        this.template = template;
    }

    public onEval(): void {
        // Are only examples don't use code like that please haha
        let context = window[this.context];
        let directions = context.Directions;
        let direction = context.lib.direction;
        let $cat = $('.cat');

        $cat.removeClass(constants.left);
        $cat.removeClass(constants.right);
        $cat.removeClass(constants.up);
        $cat.removeClass(constants.down);

        // switch = 'the hell';
        switch (direction) {
            case directions.Left:
                $cat.addClass(constants.left);
                break;
            case directions.Right:
                $cat.addClass(constants.right);
                break;
            case directions.Up:
                $cat.addClass(constants.up);
                break;
            case directions.Down:
                $cat.addClass(constants.down);
                break;
        }
    }
}
