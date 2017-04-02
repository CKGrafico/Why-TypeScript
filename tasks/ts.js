var fs = require('fs');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');

module.exports = (gulp, paths, $, _) => {
    
    return browserify({debug: $.environment.is.development() ? true : false})
    .add(_.files(paths.app.client.main))
    .plugin(tsify, {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
        "allowSyntheticDefaultImports": true
    })
    .bundle()
    .on('error', error => console.error(error.toString()))
    .pipe(source('app.js'))
    .pipe(gulp.dest(_.folder(paths.dist.client.js)));
};