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
    }])
        .run(function($rootScope){
            Parse.initialize("yG0OKddCMctN5vtCj5ocUbDxrRJjlPuzZLXMOXA9", "MgdbUbWiTaPbuZOp2N4rMsON7av9ITWvzSC0qiuV");

            $rootScope.sessionUser = Parse.User.current();
            $rootScope.logOut = function(form) {
                Parse.User.logOut();
                $rootScope.sessionUser = null;
            };
        })

});