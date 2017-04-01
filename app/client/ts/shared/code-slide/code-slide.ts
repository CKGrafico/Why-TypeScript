import * as $ from 'jquery';
import * as CodeMirror from 'codemirror';
require('codemirror/mode/javascript/javascript');
import {Slide} from '../slide';

let times = 0;

let selectors = {
    source: '.js-source',
    sourceTemplate: '.js-source-template',
    result: '.js-result',
};

export class CodeSlide extends Slide {
    public $slide;
    public source;
    public result;
    private $sourceParent;
    private $resultParent;

    constructor(public context, private slideSelector?) {
        super();
    }

    public onCreate(): void {
        this.$slide = $(this.slideSelector);
        let $source = this.$slide.find(selectors.source);
        let $result = this.$slide.find(selectors.result);
        this.$sourceParent = $source.parent();
        this.$resultParent = $result.parent();

        this.source = CodeMirror($source[0], {
            lineNumbers: true,
            mode:  'text/typescript',
            theme: 'neo',
            value: this.$slide.find(selectors.sourceTemplate).val()
        });
        this.result = CodeMirror($result[0], {
            lineNumbers: true,
            mode:  'javascript',
            theme: 'neo',
            value: 'Loading...'
        });
        this.bindEvents();
    }

    public onEval(): void {}

    public onCompile(data): void {
        let replaced = data.code;
        this.result.getDoc().setValue(replaced);
        if (!data.failed) {
            let precode = `window.${this.context} = {}; (function(exports){`;
            let code = replaced;
            let postcode = `})(${this.context});`
            let func = new Function(precode + data.realCode + postcode);
            func()
            this.onEval();
        }
    }


    private compileSource(): void {
        let val = this.source.getDoc().getValue();
        $.ajax({
            type: 'POST',
            data: JSON.stringify({code: val}),
            contentType: 'application/json',
            url: '/compiler',
            success: data => this.onCompile(data)
        });
    }

    private toggleResult(): void {
        this.$resultParent.toggle();
    }

    private toggleSource(): void {
        this.$sourceParent.toggle();
    }

    private bindEvents(): void {
        this.source.on('blur', () => this.compileSource());
        this.source.on('dblclick', () => this.toggleResult());
        this.result.on('dblclick', () => this.toggleSource());
        this.$slide.on('mouseenter', () => this.compileSource());
    }

    protected addRule(selector, styles) {
        let sheet: any = document.styleSheets[0];
        if (!sheet) return;
        if (sheet.insertRule) return sheet.insertRule(selector + ' {' + styles + '}', sheet.cssRules.length);
        if (sheet.addRule) return sheet.addRule(selector, styles);
    }
}
