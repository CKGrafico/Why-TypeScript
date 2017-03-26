export default options => `
    <section class="aligncenter js-slide-basic-types">
        <div class="wrap fadeInUp">
            <div class="grid vertical-align">
              <div class="column">
                <textarea class="js-source">
                    class Shape {
                        private color = 'red';
                        private height = 20;
                        private width = 50;
                    }

                    export default Shape;
                </textarea>
              </div>
              <div class="column">
                <textarea class="js-result"></textarea>
              </div>
            </div>

            <div class="rectangle"></div>
        </div>
    </section>
`;