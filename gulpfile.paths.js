let paths = {
    port: 4000,

    app: {
        client: {
            assets: {
                images: {},
                fonts: {}
            },

            ts: {
                _files: '**/*.ts',
            },

            main: {
                _files: 'app.ts',
                _folder: 'ts',
            },

            scss: {
                _files: '**/*.scss',
            },

            scss_components: {
                _files: '**/*.scss',
                _folder: 'ts',
            }
        },
        
        server: {
            ts: {
                _files: '**/*.ts',
                _folder: 'ts',
            }
        }
    },

    dist: {
        client: {
            assets: {
                images: {},
                fonts: {}
            },
            css: {},
            js: {}
        }
    }
};

require('./gulpfile.helpers').parsePath(paths);
module.exports = paths;