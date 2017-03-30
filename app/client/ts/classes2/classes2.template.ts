export default options => `
    <section class="aligncenter u-pt-40 js-slide-classes2">
        <div class="wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>More Classes</strong></h2>
              <p>But powerfull like other languages.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">
abstract class Animal {
  abstract makeSound(): void;
  constructor(protected age: number){}
  public move(x = 0, y = 0): [number, number] {
    return [x++, y++];
  }
  public static info(): string {
    return 'Animals are multicellular, eukaryotic organisms'; 
  }
}
class Dog extends Animal {
  makeSound(): void {
    console.log(this.sound);
  }
  constructor(public tag = 'Snoopy', 
              public readonly color = '#000000', 
              public sound = 'Woof', 
              age = 0) {
      super(age);
  }
}

console.log(Animal.info());
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