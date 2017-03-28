export default options => `
    <section class="aligncenter u-pt-40 js-slide-name">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Title</strong></h2>
              <p>description</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <div class="is-hidden js-source-template">
code
                </div>
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