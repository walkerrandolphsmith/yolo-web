define([], function() {
    return ['$scope', '$modal', '$http',function ($scope, $modal, $http) {
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.open = function (modalName) {
            var modalInstance = $modal.open({
                templateUrl: 'add_modal.html',
                controller: 'ModalController',
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