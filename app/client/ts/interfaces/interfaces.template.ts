export default options => `
    <section class="aligncenter u-pt-40 js-slide-interfaces">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Interfaces</strong></h2>
              <p>The powerful way of defining <span class="u-underline">contracts</span> in your code. And also for <span class="u-underline">add a types</span> to the return of external methods and can extend from others.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">
interface IBalloon {
    color: string;
    readonly age?: number;
    (text: string): void;
}

function creator(config: IBalloon) {
    lib.create(config);
}

lib.ajax().then((data: Array<IBalloon>) => {
    // Here I've balloons
});
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