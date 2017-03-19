import {Slide} from '../shared/slide';
import template from './home.template';

export class HomeSlide extends Slide {
    constructor() {
        super();
        this.template = template;
    }
}
