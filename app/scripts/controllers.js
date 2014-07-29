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
        .controller('NavigationController', ['$scope', '$injector', function ($scope,  $injector) {
            require(['controllers/navigationController'], function(navigationController) {
                $injector.invoke(navigationController, this, {'$scope': $scope});
            });
        }])
        .controller('SettingsController', ['$scope', '$injector', function ($scope,  $injector) {
            require(['controllers/settingsController'], function(settingsController) {
                $injector.invoke(settingsController, this, {'$scope': $scope});
            });
        }])
       .controller('ModalController', function modalController ($scope, $modalInstance, items) {
            $scope.items = items;
            $scope.selected = {
                item: $scope.items[0]
            };
            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
                console.log('ok');
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
                console.log('cancel');
            };
        })
    // More involved example where controller is required from an external file
        .controller('SignInController', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/signInController'], function(signInController) {
                $injector.invoke(signInController, this, {'$scope': $scope});
            });
        }]);
});