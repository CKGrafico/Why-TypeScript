export default options => `
    <section class="aligncenter u-pt-40 js-slide-advanced-types">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Advanced T</strong></h2>
              <p>Adquiring features from other languages like F# <span class="u-underline">Union Types</span>, <span class="u-underline">Nullable Types</span>, <span class="u-underline">String Literal Types</span> <a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html" target="_blank">and more!</a> </p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">import {lib} from 'lib';
let unionExample = (param: string | number): string | number => {
  return param;
}

// let nullable = 'A nullable';
// nullable = null;

// Type StringType = 'one' | 'two' | 'three';
// let a: StringType = 'one';
// interface createImg {
// (tagName: 'img'): HTMLImageElement
// }
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="wt-code-example">
                <div class="rectangle"></div>
            </div>
        </div>
    </section>
`;