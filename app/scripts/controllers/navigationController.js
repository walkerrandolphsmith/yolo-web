define([], function() {
    return ['$scope', '$http', function($scope, $http) {
        $scope.isWide = true;
        $scope.wide = function(){ $scope.isWide = true}
        $scope.narrow = function(){ $scope.isWide = false}

    }];
});