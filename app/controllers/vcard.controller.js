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
        tips : $scope.tips,
        sendTips : function (tips) {
            vm.model.tips = angular.copy(tips);
            vcardApi.vcardTips.save ({vId : $stateParams.id,text:vm.model.tips.text});
            console.log ('tips srabotalo')
        }

    };


    console.log('response',vm.model.vcardRespone);
    return vm;
};