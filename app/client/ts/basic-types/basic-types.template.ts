export default options => `
    <section class="aligncenter u-pt-40 js-slide-basic-types">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Basic types</strong></h2>
              <p>This a list with the most common and basic types that you can find on this language: <span class="u-underline">boolean</span>, <span class="u-underline">number</span>, <span class="u-underline">string</span>, <span class="u-underline">Array</span>, <span class="u-underline">Tuple</span>, <span class="u-underline">Enum</span>, <span class="u-underline">void</span>, <span class="u-underline">never</span> </p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <div class="is-hidden js-source-template">
class Shape {
    private color = 'red';
    private height = 20;
    private width = 50;
}

export default Shape;
                </div>
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