import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './decorators.template';

const container = '.js-slide-decorators';

let types = {
    barbarian: 'Barbarian',
    archer: 'Archer',
    wizard: 'Wizard'
};

let others = {
    name: 'MyHero.prototype, "name"',
    strength: 'MyHero.prototype, "strength"',
};

export class DecoratorsSlide extends CodeSlide {
    constructor() {
        super('decorators', container);
        this.template = template;
    }

    public onEval(): void {
        let context = window[this.context];
        let $archer = $(container).find('.archer');
        let $wizard = $(container).find('.wizard');
        let $barbarian = $(container).find('.barbarian');

        $wizard.hide();
        $barbarian.hide();
        $archer.hide();

        // Demos are demos don't judge me :p
        // This is not better than the last switch yeah!
        if (this.retrieved.indexOf(types.barbarian) > -1) {
            $barbarian.show();

            if (context.hero.strength) {
                $barbarian.find('.hero-strength').text(context.hero.strength).show();

                if (this.retrieved.indexOf(others.strength) > -1) {
                    $barbarian.find('.hero-strength').text(`<< ${context.hero.strength} >>`);
                }
            } else {
                $barbarian.find('.hero-strength').hide();
            }

            if (context.hero.name) {
                $barbarian.find('.hero-name').text(context.hero.name).show();

                if (this.retrieved.indexOf(others.name) > -1) {
                    $barbarian.find('.hero-name').text(`<< ${context.hero.name} >>`);
                }
            } else {
                $barbarian.find('.hero-name').hide();
            }
        }

        if (this.retrieved.indexOf(types.archer) > -1) {
            $archer.show();

            if (context.hero.strength) {
                $archer.find('.hero-strength').text(context.hero.strength).show();

                if (this.retrieved.indexOf(others.strength) > -1) {
                    $archer.find('.hero-strength').text(`<< ${context.hero.strength} >>`);
                }
            } else {
                $archer.find('.hero-strength').hide();
            }

            if (context.hero.name) {
                $archer.find('.hero-name').text(context.hero.name).show();

                if (this.retrieved.indexOf(others.name) > -1) {
                    $archer.find('.hero-name').text(`<< ${context.hero.name} >>`);
                }
            } else {
                $archer.find('.hero-name').hide();
            }
        }

        if (this.retrieved.indexOf(types.wizard) > -1) {
            $wizard.show();

            if (context.hero.strength) {
                $wizard.find('.hero-strength').text(context.hero.strength).show();

                if (this.retrieved.indexOf(others.strength) > -1) {
                    $wizard.find('.hero-strength').text(`<< ${context.hero.strength} >>`);
                }
            } else {
                $wizard.find('.hero-strength').hide();
            }

            if (context.hero.name) {
                $wizard.find('.hero-name').text(context.hero.name).show();

                if (this.retrieved.indexOf(others.name) > -1) {
                    $wizard.find('.hero-name').text(`<< ${context.hero.name} >>`);
                }
            } else {
                $wizard.find('.hero-name').hide();
            }
        }
    }
}
