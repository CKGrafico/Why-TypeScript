export class Slide {
    protected template = options => ``;

    public compile(options = {}): any {
        return this.template(options);
    }

    public onCreate() {}
}
