'use strict';

define(['angular', 'app'], function(angular, app) {

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/instructions', {
            templateUrl: 'partials/instructions.html',
            controller: 'InstructionsController'
        });
        $routeProvider.when('/parents', {
            templateUrl: 'partials/parents.html',
            controller: 'SignInController'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
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
                receiveEmails: function (){ return this.get('receiveEmails'); },
                receiveSMS: function (){ return this.get('receiveSMS'); },
                frequency: function () { return this.get('frequency'); }

            },{

            });

            $rootScope.isApp = true;

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

            $rootScope.setReceivePushNotifications = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $rootScope.sessionUser.set('receivePushNotifications', result);
                $rootScope.sessionUser.save(null, {
                   success: function(){

                   }
                });
            }

            $rootScope.setReceiveEmails = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $rootScope.sessionUser.set('receiveEmails', result);
                $rootScope.sessionUser.save(null, {
                    success: function(){

                    }
                });
            }

            $rootScope.setReceiveSMS = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $rootScope.sessionUser.set('receiveSMS', result);
                $rootScope.sessionUser.save(null, {
                    success: function(){

                    }
                });
            }

            $rootScope.data = {};
            $rootScope.data.numberSelection = ($rootScope.sessionUser != null ? $rootScope.sessionUser.frequency() : 0);

        })
});