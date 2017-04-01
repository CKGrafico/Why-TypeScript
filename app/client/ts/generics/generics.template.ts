export default options => `
    <section class="aligncenter u-pt-40 js-slide-generics">
        <div class="wt-generics wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>Generics</strong></h2>
              <p>Allowing you to define type-safe data structures.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">
export class List<T> {
  private items: Array<T> = [];
  get length() {
    return this.items.length;
  }
  public add(item: T): T {
    this.items.push(item);
    return item;
  }
  public getValues() {
    return this.items.join(', ');
  }
}

let list = new List<string>();
// new List<number>();
// new List<Example>();
list.add('Quique');
list.add('Quique');
list.add('Quique');
list.add('Quique');
lib.show();

export default list;

/*
BaseService for different Typed Services
public getAll<T>(): Promise<Array<T>> {
    return this.fromMemory(this.key)
        .catch(() => this.fromStorage(this.key)
            .catch(() => this.fromServer(this.key)));
}
*/
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="wt-code-example">
                <div class="board"></div>
            </div>
        </div>
    </section>
`;