define([], function() {
    return ['$scope', '$modal', '$http',function ($scope, $modal, $http) {
        $scope.items;

        $scope.channel;
        $scope.index;
        $scope.open = function (channel, index) {

            console.log(index + "  " + channel)
            $scope.channel = channel;
            $scope.index = index;
            $scope.items = [$scope.channel, $scope.index];
            var modalInstance = $modal.open({
                templateUrl: 'lock_modal.html',
                controller: 'LockModalController',
                resolve: {
                    'items': function() { return $scope.items; }
                }
            });
            console.log('modal opened');
            modalInstance.result.then(function (response) {
                $scope.selected = response;
                console.log(response);
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };

    }];
});