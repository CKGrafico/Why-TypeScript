export default options => `
    <section class="aligncenter u-pt-40 js-slide-basic-types">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Basic types</strong></h2>
              <p>Working with: <span class="u-underline">boolean</span>, <span class="u-underline">number</span>, <span class="u-underline">string</span>, <span class="u-underline">Array</span>, <span class="u-underline">ReadonlyArray</span>, <span class="u-underline">Tuple</span>, <span class="u-underline">void</span>, <span class="u-underline">never</span>, and also we have type <span class="u-underline">inference</span>. </p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">import {lib} from 'lib';
var me: string = 'Quique';

//var like: boolean;
//like = false;

//var secret: [string, number] = ['Pets', 1];

//var friends = 3;
//var people = ['Quique M', 'Carrillo', 'Edu', 'Alex'];
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="wt-code-example">
            </div>
        </div>
    </section>
`;