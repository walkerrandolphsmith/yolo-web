'use strict';

define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'angularRoute',
    'ui'
], function (angular, filters, services, directives, controllers) {

    // Declare app level module which depends on filters, and services

    return angular.module('YoloApp', [
        'ngRoute',
        'YoloApp.filters',
        'YoloApp.services',
        'YoloApp.directives',
        'YoloApp.controllers',
        'ui.bootstrap'
    ]);
});