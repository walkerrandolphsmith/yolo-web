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

            var User = Parse.User.extend({
                username: function (){ return this.get('username') },
                password: function (){ return this.get('password') },
                email: function (){ return this.get('email') },
                phone: function (){ return this.get('phone') },
                children: function (){ return this.get('children') },
                receivePushNotifications: function (){ return this.get('receivePushNotifications'); },
                receiveEmails: function (){ return this.get('receiveReceiveEmails'); },
                receiveSMS: function (){ return this.get('receiveSMS'); },
                frequency: function () { return this.get('frequency'); }

            },{

            });

            $rootScope.sessionUser = User.current();

            $rootScope.logOut = function(form) {
                Parse.User.logOut();
                $rootScope.sessionUser = null;
            };


            $rootScope.deleteAccount = function(){

                $rootScope.sessionUser.destroy({
                    success: function(obj){

                    },
                    error: function(obj){

                    }
                });

            };
        })
});