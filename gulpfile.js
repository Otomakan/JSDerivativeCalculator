const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const cleanCSS= require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
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
    gulp.watch('src/style/*.scss',['clean-css'])

    gulp.watch('src/style/*.scss').on('change',browserSync.reload)

    gulp.watch('*').on('change',browserSync.reload)

})
gulp.task('compress',()=>
	
	gulp.src('src/js/main1.js')
	// .pipe(sourcemaps.init())
	.pipe(babel({
            presets: ['@babel/env']
        }))
	.pipe(uglify().on('error', function(e){
            console.log(e);}))
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest('./dist/'))
)

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
	.pipe(gulp.dest('./dist'))
	)

// gulp.task
gulp.task('default',['compress','clean-css'])