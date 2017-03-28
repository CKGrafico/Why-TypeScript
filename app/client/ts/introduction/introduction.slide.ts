import {Slide} from '../shared/slide';
import template from './introduction.template';

export class IntroductionSlide extends Slide {
    constructor() {
        super();
        this.template = template;
    }
}
