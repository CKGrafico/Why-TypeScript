export default options => `
    <section class="aligncenter u-pt-40 js-slide-interfaces">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Interfaces</strong></h2>
              <p>dfdf</p>
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