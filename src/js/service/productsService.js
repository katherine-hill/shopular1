angular.module('Shopular').service('allInventory', allProductsService);

function allProductsService($http) {
    function getProducts(url) {
        return $http({
            method: 'GET',
            url: './src/js/data/inventory.json'
        });
    }
    return {
        get: getProducts
    };
}
