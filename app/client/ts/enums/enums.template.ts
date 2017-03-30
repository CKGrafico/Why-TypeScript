export default options => `
    <section class="aligncenter u-pt-40 js-slide-enums">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Enums</strong></h2>
              <p>Enums allow us to define a set of named numeric constants.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">
enum Directions {
    Up = 2,
    Down,
    Left,
    Right
}

lib.move(Directions.Down);

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