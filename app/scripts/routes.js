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
        .run(function($rootScope, $location, $anchorScroll, $timeout, $modal, YoloUser){
            Parse.initialize("yG0OKddCMctN5vtCj5ocUbDxrRJjlPuzZLXMOXA9", "MgdbUbWiTaPbuZOp2N4rMsON7av9ITWvzSC0qiuV");
            $rootScope.sessionUser = Parse.User.current();

            $rootScope.milli = [ 90000, 180000, 360000, 360000*2, 360000*3, 360000*4, 360000*6, 360000*8, 360000*10, 4320000, 360000*15, 360000*18, 360000*20, 360000*21, 360000*22, 8640000, 8640000*2, 8640000*3, 8640000*5, 60480000, 0 ];
            $rootScope.phrases = [ "15 minutes", "30 minutes", "1 hour", "2 hours", "3 hours","4 hours", "6 hours","8 hours", "10 hours","12 hours", "15 hours","18 hours", "20 hours","21 hours", "22 hours", "Day", "2 Days", "3 Days", "5 Days", "Week", "Unlimited"];

            $rootScope.isApp = true;
            $rootScope.data = {};
            $rootScope.data.numberSelection = ($rootScope.sessionUser != null ? $rootScope.sessionUser.frequency() : 0);

            $rootScope.snapOpts = {
                disable: 'right'
            };

            $rootScope.disable = function(side) {
                $scope.snapOpts.disable = side;
            };

            $rootScope.enable = function() {
                $scope.snapOpts.disable = 'none';
            };

            $rootScope.isDocs = function() {
                return ($location.path() == "/instructions"? true : false);
            }

            $rootScope.do = function($event) {
                $event.preventDefault()
                var hash = $event.target.getAttribute('href').substr(1);
                $location.hash(hash);
                $anchorScroll();
            };

            $rootScope.setInstructionType = function($event) {
                var checkbox = $event.target;
                $rootScope.isApp = (checkbox.checked ? true : false);
            }

            $rootScope.open = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'add_modal.html',
                    controller: 'SettingsModalController',
                    resolve: {

                    }
                });
                modalInstance.result.then(function (response) {
                    $rootScope.selected = response;
                    console.log(response);


                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            };

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

            angular.element(document).ready(function(){
                $timeout(function() {
                    $('nav').each(function(){$(this).css('opacity', 1)});
                    console.log('update with timeout fired');
                }, 850);
            });
        })
});