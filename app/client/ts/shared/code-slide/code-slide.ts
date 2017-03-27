import * as $ from 'jquery';
import {Slide} from '../slide';

let selectors = {
    source: '.js-source',
    result: '.js-result'
};

export class CodeSlide extends Slide {
    public $slide;
    public $source;
    public $result;

    constructor(public context, private slideSelector?) {
        super();
    }

    public onCreate(): void {
        this.$slide = $(this.slideSelector);
        this.$source = this.$slide.find(selectors.source);
        this.$result = this.$slide.find(selectors.result);
        this.bindEvents();
    }

    public onEval(): void {}

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
        this.compileSource();
    }
}
