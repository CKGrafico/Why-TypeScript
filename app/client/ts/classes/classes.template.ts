export default options => `
    <section class="aligncenter u-pt-40 js-slide-classes">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Classes</strong></h2>
              <p>Similar to ES6 classes (prototype based)</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">
class Dog {
  public tag: string; // by default
  private age: number;
  public readonly color: string;

  constructor(tag: string, age: number, color: string, public sound = 'Woof') {
    this.tag = tag || '';
    this.age = age || 0;
    this.color = color || '';
  }
}
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