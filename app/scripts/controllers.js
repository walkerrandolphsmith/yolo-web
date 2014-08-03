'use strict';

define(['angular', 'services'], function (angular) {

    /* Controllers */

    return angular.module('YoloApp.controllers', ['YoloApp.services'])
        // Sample controller where service is being used
        .controller('HomeController', ['$scope', '$injector', function ($scope,  $injector) {
            require(['controllers/homeController'], function(homeController) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(homeController, this, {'$scope': $scope});
            });
        }])
        .controller('LockController', ['$scope', '$injector', function ($scope,  $injector) {
            require(['controllers/lockController'], function(lockController) {
                $injector.invoke(lockController, this, {'$scope': $scope});
            });
        }])
        .controller('LockModalController', function modalController ($scope, $modalInstance, items) {
            $scope.items = items;
            $scope.selected = {
                item: $scope.items[0]
            };
            $scope.exprs = {};
            $scope.exprs.expiration_reset = 0;
            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
                console.log('ok');
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
                console.log('cancel');
            };
            $scope.lockChild = function() {

                console.log($scope.exprs.expiration_reset);
                var expiration = $scope.exprs.expiration_reset;
                var channel = $scope.items[0];
                var index = $scope.items[1];
                var child = $scope.$parent.sessionUser.children()[index];

                if(child.password.length > 0 && child.password.length < 10)
                {
                    console.log("Password was valid...");
                    delete child.$$hashKey

                    var notification = "{"
                        + "\"action\": \"com.example.UPDATE_STATUS\","
                        +  "\"alert\": \"Your phone has been locked by Yolo. Contact Parent or Guardian.\","
                        + "\"password\": \"" + child.password + "\","
                        + "\"reset\": \"" + expiration + "\""
                        + "}";

                    Parse.Push.send({
                        channels: [channel],
                        data: notification

                    },{
                        success: function() {
                            $scope.$parent.sessionUser.save();
                            console.log("Child phone was locked.");
                        },
                        error: function(error){
                            console.log("Child phone was NOT locked.");
                        }
                    });

                }else{
                    console.log("Unable to lock device.");
                }
            };
        })
        .controller('SettingsController', ['$scope', '$injector', function ($scope,  $injector) {
            require(['controllers/settingsController'], function(settingsController) {
                $injector.invoke(settingsController, this, {'$scope': $scope});
            });
        }])
        .controller('SettingsModalController', function modalController ($scope, $modalInstance) {

            $scope.setReceivePushNotifications = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $scope.$parent.sessionUser.set('receivePushNotifications', result);
                $scope.$parent.sessionUser.save(null, {
                    success: function(){
                        console.log("Updated Receive Push Notifications to: " + result);
                    }
                });
            }

            $scope.setReceiveEmails = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $scope.$parent.sessionUser.set('receiveEmails', result);
                $scope.$parent.sessionUser.save(null, {
                    success: function(){
                        console.log("Updated Receive Emails to: " + result);
                    }
                });
            }

            $scope.setReceiveSMS = function($event){
                var checkbox = $event.target;
                var result = (checkbox.checked ? true : false);
                $scope.$parent.sessionUser.set('receiveSMS', result);
                $scope.$parent.sessionUser.save(null, {
                    success: function(){
                        console.log("Updated Receive SMS to: " + result);
                    }
                });
            }

            $scope.setFrequency = function(value){
                value = parseInt(value);
                $scope.$parent.sessionUser.set('frequency', value);
                $scope.$parent.sessionUser.save(null, {
                    success: function() {
                        console.log("Updated Reminder Frequency.");
                    }
                });
            }

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
                console.log('Settings Modal dismissed');
            };
        })
        .controller('InstructionsController', ['$scope', '$injector', function ($scope,  $injector) {
            require(['controllers/instructionsController'], function(instructionsController) {
                $injector.invoke(instructionsController, this, {'$scope': $scope});
            });
        }])
    // More involved example where controller is required from an external file
        .controller('SignInController', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/signInController'], function(signInController) {
                $injector.invoke(signInController, this, {'$scope': $scope});
            });
        }]);
});