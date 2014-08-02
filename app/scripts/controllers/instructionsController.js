define(['jQuery', 'sticky'], function(jQuery, sticky) {
    return ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {

        $('#sidebar').stickySidebar();

        $scope.do = function($event) {
            $event.preventDefault()
            var hash = $event.target.getAttribute('href').substr(1);
            $location.hash(hash);
            $anchorScroll();
        };

        $scope.setInstructionType = function($event) {
            var checkbox = $event.target;
            $scope.$parent.isApp = (checkbox.checked ? true : false);
            console.log($scope.isApp);
        }

        $scope.$apply();
    }];
});