'use strict';

var webpack = require('webpack');
var config = require('./../../src/webpack.config');
var promise = require('bluebird');

module.exports = function (isDevelopment) {
	if (isDevelopment) {
		config.debug = true;
		config.devtool = 'eval';
	}
	return new promise(function (resolve, reject) {
		var compiler = webpack(config, function (error, stats) {
			if (error) {
				reject(error);
			}
			resolve({
				config: config,
				compiler: compiler,
				stats: stats
			});
		});
	});
};
