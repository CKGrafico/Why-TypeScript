import {Slide} from '../shared/slide';
import template from './thanks.template';

export class ThanksSlide extends Slide {
    constructor() {
        super();
        this.template = template;
    }
}
