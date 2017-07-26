"use strict";

angular.module ("myApp")
       .controller ("vcardCtrl" ,vcardCtrl);
vcardCtrl.$inject =['$stateParams','vcardApi','NgMap','$scope'];

function vcardCtrl($stateParams,vcardApi,NgMap,$scope) {

    let vm = this;

    vm.model = {
        vcardRespone : vcardApi.vcardValues.get({id: $stateParams.id}).$promise
            .then (function (response) {
                vm.model.vcardRespone = response;
            }),
        tips : $scope.tips

    };
    function postTips(tips) {
        vm.model.tips = angular.copy(tips);
        console.log('tips here')
    }

    console.log('response',vm.model.vcardRespone);
    return vm;
};