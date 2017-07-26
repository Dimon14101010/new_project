"use strict";

angular.module ("myApp")
    .controller ("regCtrl" ,regCtrl);
regCtrl.$inject =['$stateParams','vcardApi','NgMap','$scope'];

function regCtrl($stateParams,vcardApi,NgMap,$scope) {

    let vm = this;

    vm.model = {
        dataReg : $scope.reg,
        getData : function (reg) {
            vm.model.dataReg = angular.copy (reg);
        }
    };

    return vm;
};