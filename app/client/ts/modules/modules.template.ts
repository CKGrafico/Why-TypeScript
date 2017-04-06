export default options => `
    <section class="wt-modules">
       <div class="wrap size-60">
            <h3>Importing Modules</h3>
            <h3 class="is-invisible">_</h3>
            <div class="bg-white shadow">
              <ul class="flexblock reasons">
                <li>
                  <h2>Importing default</h2>
                  <code>import SomeDefaultComponent from './lib/component';</code>
                </li>
                <li>
                  <h2>Importing features</h2>
                  <code>import {Component1, Component2} from './lib';</code>
                </li>
                <li>
                  <h2>Importing from old library</h2>
                  <code>import * as $ from './jQuery';</code>
                </li>
              </ul>
            </div> <!-- .end .bg-white shadow -->
          </div>
    </section>
`;