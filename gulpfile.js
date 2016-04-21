'use strict';

var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');


//default test runs test for all modules for now
gulp.task('default', ['test:all']);

gulp.task('test', ['test:all']);

//all tests
gulp.task('test:all', [
  'test:absence',
  'test:companies',
  'test:eventPlanners',
  'test:goals',
  'test:payroll',
  'test:processes',
  'test:recruitment',
  'test:timesheet'
]);

//rest should be self explanatory
gulp.task('test:absence', function(){ });
gulp.task('test:companies', function(){ });
gulp.task('test:eventPlanners', function(){ });
gulp.task('test:goals', function(){ });
gulp.task('test:payroll', function(){ });
gulp.task('test:processes', function(){ });
gulp.task('test:recruitment', function(){ });
gulp.task('test:timesheet', function(){ });