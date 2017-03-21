import * as $ from 'jquery';

let selectors = {
    container: '.wt-loading'
};

let classes = {
    hide: 'is-hidden'
};

class LoadingService {
    private $el;

    constructor() {
        this.$el = $(selectors.container);
    }

    public show(): void {
        this.$el.removeClass(classes.hide);
    }

    public hide(): void {
        this.$el.addClass(classes.hide);
    }
}

export let loadingService = new LoadingService();