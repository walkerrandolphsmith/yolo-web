define([], function() {
    return ['$scope', '$modal', '$http',function ($scope, $modal, $http) {

        $scope.open = function () {
            var modalInstance = $modal.open({
                templateUrl: 'add_modal.html',
                controller: 'SettingsModalController',
                resolve: {

                }
            });
            modalInstance.result.then(function (response) {
                $scope.selected = response;
                console.log(response);


            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };

    }];
});