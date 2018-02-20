'use strict';

import gulp from 'gulp';
import inject from 'gulp-inject';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import browserify from 'gulp-browserify'

gulp.task('inject', () => {
	let paths = [
		'./public/build/app/app.js',
		'./public/build/css/**/*.css',
	]
	
	gulp.src('./public/build/index.html')
		.pipe(inject(gulp.src(paths, { read: false }),
			// Options
			{
				ignorePath: 'public/build',
				addRootSlash: false
			}
		))
		.pipe(gulp.dest('./public/build'));
});

gulp.task('babel-transpile', () => {
	gulp.task('default', () =>
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

	gulp.src(filesToMove)
		.pipe(gulp.dest('./public/build/'));
})


gulp.task('default', [
	'babel-transpile',
	'build',
	'inject',
])