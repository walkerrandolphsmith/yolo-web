define([], function() {
    return ['$scope', '$http', function($scope, $http) {
        // You can access the scope of the controller from here
        new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );
        $scope.$apply();
    }];
});