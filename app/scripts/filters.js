'use strict';

define(['angular', 'services'], function (angular, services) {

    /* Filters */

    angular.module('YoloApp.filters', ['YoloApp.services'])
        .filter('interpolate', ['version', function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);
});