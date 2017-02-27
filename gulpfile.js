// Load Gulp yo!
var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

// Minify jQuery Plugins: Run manually with: "gulp squish-plugins"
gulp.task('squish-plugins', function() {
    gulp.src('js/plugins/**/*.js')
        .pipe(plugins.concat('plugins.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(plugins.uglify())
        .pipe(plugins.concat('plugins.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});

// Minify Custom JS: Run manually with: "gulp build-js"
gulp.task('build-js', function() {
    gulp.src('js/scripts/**/*.js')
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .on('error', function (err) {
            plugins.util.log(err);
            this.emit('end');
        })
        .pipe(plugins.concat('scripts.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(plugins.uglify())
        .pipe(plugins.concat('scripts.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});


// Less to CSS: Run manually with: "gulp build-less"
gulp.task('build-less', function() {

    return gulp.src('less/*.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            plugins.util.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 10 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('public/css/.')).on('error', plugins.util.log)
        .pipe(browserSync.stream());
});



// Less to CSS: Run manually with: "gulp build-scss"
gulp.task('build-scss', function() {

    return gulp.src('scss/*.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.sass())
        .on('error', function (err) {
            plugins.util.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 10 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('public/css')).on('error', plugins.util.log)
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("scss/*.scss", ['build-scss']);
    gulp.watch("less/*.less", ['build-less']);
    gulp.watch("js/scripts/**/*.js", ['build-js']);
    gulp.watch("js/plugins/**/*.js", ['squish-plugins']);

    gulp.watch("public/*.html").on('change', browserSync.reload);

});


// Start her up: Run "gulp"
gulp.task('default', ['serve']);
