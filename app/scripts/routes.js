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
            var second = 1000;
            var minute = 6000; //60 * second;
            var quarter_hour = 90000; //15 * minute
            var half_hour = 180000; //30 * minute
            var hour = 360000; //60 * minute;
            var half_day = 4320000; //12 * hour
            var day = 8640000; //24 * hour;
            var week = 60480000; //7 * day;

            $rootScope.milli = [ quarter_hour, half_hour, hour, hour*2, hour*3, hour*4, hour*6, hour*8, hour*10, half_day, hour*15, hour*18, hour*20, hour*21, hour*22, day, day*2, day*3, day*5, week, 0 ];
            $rootScope.phrases = [ "15 minutes", "30 minutes", "1 hour", "2 hours", "3 hours","4 hours", "6 hours","8 hours", "10 hours","12 hours", "15 hours","18 hours", "20 hours","21 hours", "22 hours", "Day", "2 Days", "3 Days", "5 Days", "Week", "Unlimited"];

            $rootScope.isApp = true;
            $rootScope.data = {};
            $rootScope.data.numberSelection = ($rootScope.sessionUser != null ? $rootScope.sessionUser.frequency() : 0);
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
                       console.log("Updated Receive Push Notifications to: " + result);
                   }
                });
            }

            $rootScope.setReceiveEmails = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $rootScope.sessionUser.set('receiveEmails', result);
                $rootScope.sessionUser.save(null, {
                    success: function(){
                        console.log("Updated Receive Emails to: " + result);
                    }
                });
            }

            $rootScope.setReceiveSMS = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $rootScope.sessionUser.set('receiveSMS', result);
                $rootScope.sessionUser.save(null, {
                    success: function(){
                        console.log("Updated Receive SMS to: " + result);
                    }
                });
            }

            $rootScope.setFrequency = function(value){
                value = parseInt(value);
                $rootScope.sessionUser.set('frequency', value);
                $rootScope.sessionUser.save(null, {
                    success: function() {
                        console.log("Updated Reminder Frequency.");
                    }
                });
            }


        })
});