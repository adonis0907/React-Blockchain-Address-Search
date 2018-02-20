'use strict';

import gulp from 'gulp';
import inject from 'gulp-inject';
 
gulp.task('inject', function () {
  let target = gulp.src('./public/build/index.html');
  let filesToInject = [
    './public/build/js/**/*.js',
    './public/build/css/**/*.css',
  ]
  let sources = gulp.src(filesToInject, { read: false });
 
  return target.pipe(inject(sources))
});

gulp.task('build', function(){
  let filesToMove = [
      './public/src/**/*.*',
  ];
  gulp.src(filesToMove) 
  .pipe(gulp.dest('./public/build/'));
})

gulp.task('watch', function(){
  gulp.watch([
    './public/src/app/**/*.js',
    './public/src/css/**/*.css',
  ], ['inject'])
})

gulp.task('default', [
	'build',
  'inject',
])