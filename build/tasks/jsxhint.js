'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('jsxhint', [], function (done) {
	exec('./node_modules/.bin/jsxhint --6to5 --harmony --config ./.jsxhintrc --jsx-only ./src/app/**/*', function(error, stdout, stderr){
		console.log(stdout);
		console.log(stderr);
		done(error);
	});
});
