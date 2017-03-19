var fs = require('fs');
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
    .pipe(fs.createWriteStream(_.folder(paths.dist.client.js) + '/app.js'));
};