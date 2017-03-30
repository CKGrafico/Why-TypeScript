export default options => `
    <section class="aligncenter u-pt-40 js-slide-generics">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Generics</strong></h2>
              <p>Allowing you to define type-safe data structures.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">
class List<T> {
  private items: Array<T> = [];
  get length() {
    return this.items.length;
  }
  public add(item: T): T {
    this.items.push(item);
    return item;
  }
}

let list = new List<string>();
list.add('Quique');
console.log(list.length);
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