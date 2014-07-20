'use strict';

define(['angular', 'app'], function(angular, app) {

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/parents', {
            templateUrl: 'partials/parents.html',
            controller: 'SignInController'
        });
        $routeProvider.otherwise({redirectTo: '/about'});
    }]);

});