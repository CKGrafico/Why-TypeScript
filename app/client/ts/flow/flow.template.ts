export default options => `
    <section class="wt-flow aligncenter">
        <span class="background dark bg_1" style="background-image:url('/assets/images/bg_flow1.jpg')"></span>
        <span class="background dark bg_0" style="background-image:url('/assets/images/bg_flow0.jpg')"></span>

        <img class="wt-flow-troll" src="/assets/images/troll.gif">

        <div class="content-left">
              <h2><strong>TypeScript vs Flow</strong></h2>
              <h3>Are pretty similar, try both and choose what is better for you, your team and your project.</h3>
            </div>
    </section>

    <section>
        <div class="wrap fadeInUp size-60">
            <div class="wt-flow-card card-50 bg-white">
                <div class="grid vertical-align">
                <div class="column">
                    <img class="wt-flow-logo" src="/assets/images/flow-logo.png" alt="Flow logo">
                    <ul>
                        <li class="wt-flow-item">- <strong>Doesn't need</strong> a new language</li>
                        <li class="wt-flow-item">- <strong>ES*</strong> features</li>
                        <li class="wt-flow-item">- Type checking in <strong>JavaScript</strong></li>
                    </ul>
                </div>
                <div class="column">
                    <img class="wt-flow-logo" src="/assets/images/ts-logo.png" alt="TS logo">
                    <ul>
                        <li class="wt-flow-item">- JavaScript <strong>superset</strong> with types</li>
                        <li class="wt-flow-item">- <strong>ES*</strong> features</li>
                        <li class="wt-flow-item"> <span>- Type checking in <strong>JavaScript</strong> <small class="wt-flow-highlight">Since <a href="https://blogs.msdn.microsoft.com/typescript/2017/04/27/announcing-typescript-2-3/" title="TS 2.3">2.3.0</a></small></span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </section>
`;