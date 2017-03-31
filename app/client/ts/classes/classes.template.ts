export default options => `
    <section class="wt-classes aligncenter u-pt-40 js-slide-classes">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Classes</strong></h2>
              <p>Similar to ES6 classes (prototype based), and yes also can <span class="u-underline">extend</span> or <span class="u-underline">implement</span>.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">import {lib} from 'lib';
export class Dog {
  public tag: string; // by default
  private age: number;
  public readonly color: string;

  constructor(tag: string, age: number, color: string, public sound = 'Woof') {
    this.tag = tag || '';
    this.age = age || 0;
    this.color = color || '';
  }
}

let dog = new Dog('Thor', 5, 'brown');
export default dog; 
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="wt-code-example">
                <div class='dog'>
                  <div class='head'>
                    <div class='nose'></div>
                    <div class='ear'></div>
                  </div>
                  <div class='body'>
                    <div class='paw'></div>
                    <div class='tail'></div>
                  </div>
                  <div class='bone' data-text=''>
                    <div class='left'></div>
                    <div class='right'></div>
                  </div>
                </div>
            </div>
        </div>
    </section>
`;