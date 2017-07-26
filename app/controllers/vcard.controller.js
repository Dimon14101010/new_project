"use strict";

angular.module ("myApp")
       .controller ("vcardCtrl" ,vcardCtrl);
vcardCtrl.$inject =['$stateParams','vcardApi','NgMap','$scope'];

function vcardCtrl($stateParams,vcardApi,NgMap,$scope) {
    $scope.tips = {};
    function postTips(text) {
        $scope.tips = angular.copy (text);
        console.log('text tips here');
    }

    let vm = this;

    vm.model = {
        vcardRespone : vcardApi.vcardValues.get({id: $stateParams.id}).$promise
            .then (function (response) {
                vm.model.vcardRespone = response;
            })

    };


    console.log('response',vm.model.vcardRespone);
    return vm;
};