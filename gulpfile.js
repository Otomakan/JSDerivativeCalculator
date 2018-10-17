const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const cleanCSS= require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const transform = require('vinyl-transform')

var source = require('vinyl-source-stream');
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('src/js/*.js',['compress'])
	gulp.watch('src/js/*.js').on('change', browserSync.reload)
    gulp.watch('src/style/*.scss',['clean-css']).on('change',browserSync.reload)
    gulp.watch('src/js/main1.js',['browserify']).on('change',browserSync.reload)
    gulp.watch('*').on('change',browserSync.reload)

})
gulp.task('compress', ()=>
        gulp.src('src/js/main1.js')
         .pipe(babel({
            presets: ['@babel/env']
        }))
         .pipe(uglify().on('error', function(e){
            console.log(e);}))
        .pipe(gulp.dest('./dist/'))
);
gulp.task('browserify', function () {
  // return browserify({entries: './src/js/main1.js', debug: true})
  //       .transform("babelify", {presets: ["@babel/preset-env"]})
  //       .bundle()
  //       .pipe(source('main1.js'))
  //       .pipe(buffer())
  //       // .pipe(uglify())
  //       .pipe(gulp.dest('./dist/'));;
   gulp.src('src/js/main1.js')
         .pipe(babel({
            presets: ['@babel/env']
        }))
         .pipe(uglify().on('error', function(e){
            console.log(e);}))
        .pipe(gulp.dest('./dist/'))
});
gulp.task('compressmath',()=>
  
  gulp.src('src/js/math.js')
  // .pipe(sourcemaps.init())
  // .pipe(babel({
  //           presets: ['@babel/env']
  //       }))
  .pipe(uglify().on('error', function(e){
            console.log(e);}))
  // .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('./dist/'))
)

gulp.task('clean-css',()=>
	gulp.src('src/style/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./dist/'))
	)

// gulp.task
gulp.task('default',['serve','compress','compressmath','clean-css'])
