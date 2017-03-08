module.exports = (gulp, paths, $, _) => {
    return gulp.src(_.files(paths.app.client.ts))
        .pipe($.tslint({
            configuration: '.ts-lint.json'
        }))
        .pipe($.tslint.report())
};