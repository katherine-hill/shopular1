(function(ng) {
    "use strict";
    ng.module('ToDontApp').service('StorageService', function($scope, locaStorageService) {
        function setItems(key, value) {
            localStorageService.set(key, value);
        }

        function getItems(key) {
            return locaStorageService.get(key);
        }
        return {
            set: setItems,

            get: getItems
        };

    });



})(angular);
