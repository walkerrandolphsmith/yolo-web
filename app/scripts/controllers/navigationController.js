define([], function() {
    return ['$scope', '$http', function($scope, $http) {
        $scope.isActive = true;
        $scope.toggleActive = function(){ $scope.isActive = !$scope.isActive}
    }];
});