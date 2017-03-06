(function(ng) {
    "use strict";
    ng.module('ToDont App').directive('listItem', function() {
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
