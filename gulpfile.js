var gulp = require('gulp');

var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var imagemin = require('gulp-imagemin');
var yuidoc = require("gulp-yuidoc");
var minifyCSS = require('gulp-minify-css');
var del = require('del');

var paths = {
    controllers: {
        scripts: {
            source: [
                'app/scripts/config.js',
                'app/modules/MainPage/controllers/*.js',
                'app/modules/Upload/scripts/*.js' ,
                'app/modules/Piece/controllers/*.js',
                'app/modules/Setting/controllers/*.js',
                'app/modules/Style/controllers/*.js',
                'app/modules/Theme/controllers/*.js',
                'app/modules/Layout/controllers/*.js',
                'app/scripts/api/api.js'
            ],
            dist: 'app/scripts/controllers',
            name: 'controllers.min.js'
        }
    }
};

function doTask(item, debug){
    for (var key in paths[item]) {
        switch (key) {
            case 'scripts':
                try {
                    gulp.task(item + key, function () {
                        if (debug) {
                            return gulp.src(paths[item].scripts.source)
                                .pipe(jshint())
                                .pipe(jshint.reporter(stylish))
                                .pipe(concat(paths[item].scripts.name))
                                .pipe(gulp.dest(paths[item].scripts.dist));
                        }
                        return gulp.src(paths[item].scripts.source)
                            .pipe(concat(paths[item].scripts.name))
                            .pipe(uglify())
                            .pipe(gulp.dest(paths[item].scripts.dist));
                    });
                    gulp.start(item + key);
                } catch (e) {
                    console.error(item + key + e);
                }
                break;

            case 'styles':
                try {
                    gulp.task(item + key, function () {
                        return gulp.src(paths[item].styles.source)
                            .pipe(minifyCSS({keepBreaks: true}))
                            .pipe(concat(paths[item].styles.name))
                            .pipe(gulp.dest(paths[item].styles.dist));
                    });
                    gulp.start(item + key);
                } catch (e) {
                    console.error(item + key + e);
                }
                break;

            case 'doc':
                try {
                    gulp.task(item + key, function () {
                        return gulp.src(paths[item].doc.source)
                            .pipe(yuidoc())
                            .pipe(gulp.dest(paths[item].doc.dist))
                    });
                    gulp.start(item + key);
                } catch (e) {
                    console.error(item + key + e);
                }
                break;

            case 'images':
                try {
                    gulp.task(item + key, function () {
                        return gulp.src(paths[item].images.source)
                            .pipe(imagemin({optimizationLevel: 5}))
                            .pipe(gulp.dest(paths[item].images.dist));
                    });
                    gulp.start(item + key);
                } catch (e) {
                    console.error(item + key + e);
                }
                break;
            default:
        }
    }
}

function startTask(debug) {
    for (var item in paths) {
        doTask(item, debug);
    }
}
gulp.task('clean', function(cb) {
    del(['doc'], cb);
});
gulp.task('controllers', function(){
    doTask('controllers', true);
});
gulp.task('controllers.min', function(){
    doTask('controllers', false);
});
gulp.task('normal', function(){
    startTask(false);
});
gulp.task('debug', function(){
    startTask(true);
});

gulp.task('watch.min', function(){
    gulp.watch(paths.controllers.scripts.source, ['controllers.min']);
});
gulp.task('watch', function(){
    gulp.watch(paths.controllers.scripts.source, ['controllers']);
});

gulp.task('js', ['controllers']);
gulp.task('js.min', ['controllers.min']);

gulp.task('all', ['js'], function(){
    gulp.start('watch');
});
gulp.task('all.min', ['js.min'], function(){
    gulp.start('watch.min');
});