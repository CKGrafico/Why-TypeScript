import * as $ from 'jquery';
import {CodeSlide} from '../shared/code-slide';
import template from './classes2.template';

const container = '.js-slide-classes2';

export class Classes2Slide extends CodeSlide {
    constructor() {
        super('classes2', container);
        this.template = template;
    }

    public onEval(): void {
        let context = window[this.context];
        let dog = context.default;
        let $container = $(container);
        let $dog = $container.find('.dog');

        $dog.css({
            filter: `grayscale(${dog.age / 12})`
        });

        $dog.find('.head').css({
            background: dog.color
        });

        $dog.find('.nose').css({
            background: dog.color
        });

        $dog.find('.ear').css({
            background: dog.color
        });

        $dog.find('.body').css({
            background: dog.color
        });

        $dog.find('.paw').css({
            background: dog.color
        });

        if (dog.tag) {
            $dog.find('.bone').attr('data-text', dog.tag);
        }

        if (dog.makeSound && dog.sound) {
            // Yes could be better xD
            dog.makeSound();
            if (context.lib.isSound) {
                $container.find('.bubble').show().text(dog.sound)
            } else {
                $container.find('.bubble').hide();
            }
        } else {
            $container.find('.bubble').hide();
        }
    }
}
