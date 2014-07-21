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
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(navigationController, this, {'$scope': $scope});
            });
        }])
        // More involved example where controller is required from an external file
        .controller('SignInController', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/signInController'], function(signInController) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(signInController, this, {'$scope': $scope});
            });
        }]);


});