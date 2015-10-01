'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var pack = require('./../lib/pack');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var _ = require('underscore');

gulp.task('dev', [], function () {
	pack(true)
		.then(function (packingBundle) {
			packingBundle.config.plugins = _.reject(packingBundle.config.plugins, function (plugin) {
				return plugin instanceof HtmlWebpackPlugin;
			});
			var compiler = webpack(packingBundle.config);
			new WebpackDevServer(compiler, {
					hot: true,
					contentBase: path.join(__dirname, './../../', packingBundle.config.output.contentBase),
					stats: {
						colors: true
					}
				})
				.listen(3000, 'localhost', function (error) {
					if (error) {
						throw new gutil.PluginError('webpack-dev-server', error);
					}
					// Server listening
					gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html)');

					// keep the server alive or continue?
					// done();
				});
		});
});
