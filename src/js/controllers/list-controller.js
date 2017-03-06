(function(ng) {
    "use strict";

    ng.module('ToDontApp').controller('ListController', function($scope, ItemService, StorageService) {
        $scope.allItems = StorageService.get();

        $scope.getItems = function() {
            $scope.allItems = ItemService.get();
            return $scope.allItems;

        };

        $scope.deleteItem = function(id) {
            ItemService.delete(id);
        };

    });

})(angular);
