'use strict';

import gulp from 'gulp';
import inject from 'gulp-inject';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import concat from 'gulp-concat';
import browserify from 'browserify';
import del from 'del';
import runSequence from 'run-sequence';
import debug from 'gulp-debug';
import babelify from 'babelify';
import rename from 'gulp-rename';

gulp.task('inject', () => {
	let paths = [
		'./public/build/app/app.js',
		'./public/build/css/**/*.css',
	]

	return gulp.src('./public/build/index.html')
		.pipe(debug())
		.pipe(inject(gulp.src(paths, { read: true }),
			{
				ignorePath: 'public/build',
				addRootSlash: false
			}
		))
		.pipe(gulp.dest('./public/build'));
});

gulp.task('babel', () => {
	return gulp.src('./public/src/app/app.js')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(sourcemaps.init())
		.pipe(gulp.dest('./public/build/app'))

});

gulp.task('client', () => {
	return browserify('public/build/app/app.js')
		.transform(babelify, { presets: ["es2015", "react"] })
		.bundle()
		.pipe(source('./public/src/app/app.js'))
		.pipe(rename({ dirname: './' }))
		.pipe(gulp.dest('public/build/app'))

});

gulp.task('build', () => {
	let filesToMove = [
		'./public/src/**/*.*',
	];
	return gulp.src(filesToMove)
		.pipe(gulp.dest('./public/build/'));
})

gulp.task('del-build', () => {
	return del([
		'./public/build',
	]);
})

gulp.task('default', (cb) => {
	runSequence(
		'del-build',
		'build',
		'babel',
		'client',
		'inject'
	)
})
