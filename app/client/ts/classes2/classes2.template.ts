export default options => `
    <section class="aligncenter u-pt-40 js-slide-classes2">
        <div class="wt-classes2 wrap fadeInUp">
            <div class="content-center">
              <h2 class="text-landing"><strong>More Classes</strong></h2>
              <p>But powerfull like other languages.</p>
            </div>

            <div class="grid vertical-align">
              <div class="column">
                <textarea class="is-hidden js-source-template">import {lib} from 'lib';
export abstract class Animal {
  abstract makeSound(): void;
  constructor(protected age: number){}
  public move(x = 0, y = 0): [number, number] {
    return [x++, y++];
  }
  public static info(): string {
    return 'Animals are multicellular, eukaryotic organisms'; 
  }
}
export class Dog extends Animal {
  makeSound(): void {
    lib.sound(this.sound);
  }
  constructor(public tag = 'Snoopy', 
              public readonly color = '#000000', 
              public sound = 'Woof', 
              age = 0) {
      super(age);
  }
}

console.log(Animal.info());
let dog = new Dog();
export default dog; 
                </textarea>
                <div class="wt-code-source js-source"></div>
              </div>
              <div class="column">
                <div class="wt-code-result js-result"></div>
              </div>
            </div>

            <div class="wt-code-example">
                <div class='bubble'></div> 
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
        </div>
    </section>
`;