'use strict';

var gulp = require('gulp');
var pitcoreTasks = require('pitcore-build');

pitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
