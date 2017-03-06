'use strict';

(function () {
    'use strict';

    var app = angular.module('Shopular', []);

    app.controller('InventoryController', function (allInventory, $q) {

        console.log('in');
        this.allItems = {};

        $q.when(allInventory.get('js/data/inventory.json')).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    });
})();
'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDont App').controller('AddController', function ($scope, ItemService, StorageService) {
        $scope.this.item = {};
        $scope.allItems = ItemService.get('tasks') || [];

        $scope.this.addItem = function () {
            $scope.this.item.id = Date.now();
            ItemService.add($scope.item);
            $scope.item = {};
            $scope.allItems = ItemService.get();
        };
    });
})(angular);
'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDontApp').controller('ListController', function ($scope, ItemService, StorageService) {
        $scope.allItems = StorageService.get();

        $scope.getItems = function () {
            $scope.allItems = ItemService.get();
            return $scope.allItems;
        };

        $scope.deleteItem = function (id) {
            ItemService.delete(id);
        };
    });
})(angular);
'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDont App').directive('listItem', function () {
        return {
            restrict: 'E', //has a few values you can pass in, 'E' will be used as a full html element. 'A' is attribute
            templateUrl: './templates/item.html',
            scope: {
                heading: '=',
                id: '=',
                deleteItem: '@'
                //heading assigned at the time of use
                //@ would inherit from it's parent's scope
            }
        };
    });
})(angular);