'use strict';

import gulp from 'gulp';
import inject from 'gulp-inject';

let paths = [
	'./public/build/app/main.js',
	'./public/build/css/**/*.css',
]

gulp.task('inject', function () {
	gulp.src('./public/build/index.html')
			.pipe(inject(gulp.src(paths, {read: false}),
					// Options
					{
							ignorePath: 'public/build',
							addRootSlash: false
					}
			))
			.pipe(gulp.dest('./public/build'));
});

gulp.task('build', function(){
  let filesToMove = [
      './public/src/**/*.*',
	];
	
  gulp.src(filesToMove) 
  .pipe(gulp.dest('./public/build/'));
})

gulp.task('default', [
	'build',
  'inject',
])