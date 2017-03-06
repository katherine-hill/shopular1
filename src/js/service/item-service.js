(function(ng) {
    "use strict";
    //this is how list controller and add controller are sharing information
    ng.module('ToDontApp').service("ItemService", function(StorageService) {
        let items = StorageService.get('tasks') || [];

        function add(item) {
            items.push(item);
            StorageService.set('tasks', items);
            console.log(items);
        }

        function get() {
            return items;
        }

        function deleteItem(id) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items.splice(i, 1);
                    //spliceing out whatever task has this id
                }
            }
            StorageService.set('tasks', items); // this will update the local storage so it won't hold on to deleted tasks
        }
        return {
            add: add,
            get: get,
            delete: deleteItem

        };
    });

})(angular);
