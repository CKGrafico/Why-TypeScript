export default options => `
    <section class="aligncenter u-pt-40 js-slide-enums">
        <div class="wt-enums wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Enums</strong></h2>
              <p>Enums allow us to define a set of <span class="u-underline">named numeric constants</span>.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">import {lib} from 'lib';
export enum Directions {
    Up = 2,
    Down,
    Left,
    Right
}

lib.configure(Directions);
lib.move(null);
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="cat"></div>
        </div>
    </section>
`;