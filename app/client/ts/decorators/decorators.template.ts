export default options => `
    <section class="aligncenter u-pt-40 js-slide-decorators">
        <div class="wt-decorators wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Decorators</strong></h2>
              <p>Supporting annotations or modifiers for classes.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">import {lib} from 'lib';
@lib.Archer
export class MyHero {
    @lib.Name
    private name = 'Eiximenis';
    private strength = 100;
}

export let hero = new MyHero();
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="wt-code-example">
                <div class="clash-card barbarian">
                    <div class="clash-card__image clash-card__image--barbarian">
                        <span class="hero-name"></span>
                        <span class="hero-strength"></span>
                        <img src="/assets/images/barbarian.png" alt="barbarian" />
                    </div>
                </div>

                <div class="clash-card archer">
                    <div class="clash-card__image clash-card__image--archer">
                        <span class="hero-name"></span>
                        <span class="hero-strength"></span>
                        <img src="/assets/images/archer.png" alt="archer" />
                    </div>
                </div>

                <div class="clash-card wizard">
                    <div class="clash-card__image clash-card__image--wizard">
                        <span class="hero-name"></span>
                        <span class="hero-strength"></span>
                        <img src="/assets/images/wizard.png" alt="wizard" />
                    </div>
                </div>
            </div>
        </div>
    </section>
`;