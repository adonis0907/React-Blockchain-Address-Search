'use strict';

import gulp from 'gulp';
import inject from 'gulp-inject';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import browserify from 'gulp-browserify'
import del from 'del';
import runSequence from 'run-sequence';
import debug from 'gulp-debug';

gulp.task('inject', ['build'], () => {
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

gulp.task('babel-transpile', () => {
	return gulp.task('default', () =>
		gulp.src('./public/src/app/**/*.js')
			.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['env', 'react']
			}))
			.pipe(browserify({
				transform: ['babelify'],
			}))
			.pipe(gulp.dest('./public/build/app'))
	);
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
		'babel-transpile',
		'build',
		'inject',
		cb
	)
})
