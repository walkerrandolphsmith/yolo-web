'use strict';

define(['angular', 'services'], function(angular, services) {

    /* Directives */

    angular.module('YoloApp.directives', ['YoloApp.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }])
        .directive('scroller', function() {
            var linker = function(scope, elm, attrs) {
                new cbpScroller(elm[0]);
            };

            return {
                restrict: 'A',
                link: linker
            }
        })
        .directive('stick', function(sticky) {
            var linker = function(scope, elm, attrs) {
                console.log('sticky directive');
                console.log(elm[0]);
            };

            return {
                restrict: 'A',
                link: linker
            }
        });

});