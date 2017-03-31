export default options => `
    <section class="aligncenter u-pt-40 js-slide-interfaces">
        <div class="wt-interfaces wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Interfaces</strong></h2>
              <p>The powerful way of defining <span class="u-underline">contracts</span> in your code. And also for <span class="u-underline">add a types</span> to the return of external methods and can <span class="u-underline">extend</span> from others.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">import {lib} from 'lib';
export interface IBalloon {
    color: string;
    readonly age?: number;
    name (text: string): void;
}

lib.ajax().then((data: Array<IBalloon>) => {
    // Here I've balloons
});

export let myBalloon: IBalloon = {
    color: 'orange',
    age: 4,
    name: (text: string) => {lib.setName(text);}
};
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="wt-code-example">
                <div class="hot-air-balloon">
                    <div class="balloon"><span></span></div>
                    <div class="basket"></div>
                </div>
            </div>
        </div>
    </section>
`;