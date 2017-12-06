angular.module("app", [])
.controller("progressCtrl", ['$scope', function($scope) {
    $scope.value = 10
    $scope.items = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
}])
.directive('progressbar', [function() {
    return {
        restrict: 'A',
        scope: {
            'progress': '=progressbar'
        },
        link: function($scope, $element, $attrs) {
            $element.progressbar({
                value: $scope.progress
            })

            $scope.$watch(function() {
                $element.progressbar({value: $scope.progress})
            })
        }
    }
}])