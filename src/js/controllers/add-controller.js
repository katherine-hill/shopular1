(function(ng) {
    "use strict";
    ng.module('ToDont App').controller('AddController', function($scope, ItemService, StorageService) {
        $scope.this.item = {};
        $scope.allItems = ItemService.get('tasks') || [];

        $scope.this.addItem = function() {
            $scope.this.item.id = Date.now();
            ItemService.add($scope.item);
            $scope.item = {};
            $scope.allItems = ItemService.get();

        };

    });


})(angular);
