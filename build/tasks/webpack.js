'use strict';

var gulp = require('gulp');
var pack = require('./../lib/pack');

gulp.task('webpack', [], function () {
	return pack();
});
