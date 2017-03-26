import * as $ from 'jquery';
import {Slide} from '../shared/slide';
import template from './basic-types.template';

let selectors = {
    slide: '.js-slide-basic-types',
    source: '.js-source',
    result: '.js-result'
};

export class BasicTypesSlide extends Slide {
    public $slide;
    public $source;
    public $result;
    public context = 'basicTypes';

    constructor() {
        super();
        this.template = template;
    }

    public onCreate(): void {
        this.$slide = $(selectors.slide);
        this.$source = this.$slide.find(selectors.source);
        this.$result = this.$slide.find(selectors.result);
        this.bindEvents();
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

    public onCompile(data): void {
        this.$result.val(data.code);
        if (!data.failed) {
            let precode = `window.${this.context} = {}; (function(exports){`;
            let code = data.code;
            let postcode = `})(${this.context});`
            let func = new Function(precode + code + postcode);
            func()
            this.onEval();
        }
    }

    private compileSource(): void {
        let val = this.$source.val();
        $.ajax({
            type: 'POST',
            data: JSON.stringify({code: val}),
            contentType: 'application/json',
            url: '/compiler',
            success: data => this.onCompile(data)
        });
    }

    private bindEvents(): void {
        this.$source.on('change', () => this.compileSource());
    }
}
