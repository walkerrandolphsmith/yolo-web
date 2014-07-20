define([], function() {
    return ['$scope', '$http', function($scope, $http) {
        // You can access the scope of the controller from here

        $scope.$apply();
    }];
});