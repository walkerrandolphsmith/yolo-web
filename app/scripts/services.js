'use strict';

define(['angular'], function (angular) {

    /* Services */

    // Demonstrate how to register services
    // In this case it is a simple value service.
    angular.module('YoloApp.services', [])
        .value('version', '0.1')
        .factory('YoloUser', function($q){

            var User = Parse.User.extend({
                username: function (){ return this.get('username') },
                password: function (){ return this.get('password') },
                email: function (){ return this.get('email') },
                phone: function (){ return this.get('phone') },
                children: function (){
                    return this.get('children')
                    //var defer = $q.defer();
                    //defer.resolve(this.get('children'));
                    //return defer.promise;
                },
                receivePushNotifications: function (){ return this.get('receivePushNotifications'); },
                receiveEmails: function (){ return this.get('receiveEmails'); },
                receiveSMS: function (){ return this.get('receiveSMS'); },
                frequency: function () { return this.get('frequency'); }
            },{

            });

            return User;
        });
});