const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('compress',()=>
	gulp.src('*.js')
	.pipe(babel({
            presets: ['@babel/env']
        }))
	.pipe(uglify().on('error', function(e){
            console.log(e);}))
	.pipe(gulp.dest('./dist/'))
)
gulp.task('default',['compress'])