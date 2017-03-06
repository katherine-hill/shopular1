(function() {
    'use strict';

    const app = angular.module('Shopular', []);

    app.controller('InventoryController', function(allInventory, $q) {

        this.allItems = {};
        this.tax = 1.0575;
        this.image = "https://tiy-learn-content.s3.amazonaws.com/98350f05-sale_2.png";

        $q.when(allInventory.get()).then((response) => {
            this.allItems = response.data;
            console.log('this.allItems', this.allItems);
        }).catch((error) => {
            console.log(error);
        });

    });
})();
