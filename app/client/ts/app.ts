// import $ from 'jquery';

import 'webslides/static/js/svg-icons.js';
import 'webslides/static/js/webslides.js';

interface IExample {
    readonly name: string;
}

class Example implements IExample {
    public readonly name = 'test';
}

let example = new Example();

console.log(example.name);
