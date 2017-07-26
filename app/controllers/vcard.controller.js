"use strict";

angular.module ("myApp")
       .controller ("vcardCtrl" ,vcardCtrl);
vcardCtrl.$inject =['$stateParams','vcardApi','$scope'];

function vcardCtrl($stateParams,vcardApi,$scope) {

    let vm = this;

    vm.model = {
        vcardRespone : vcardApi.vcardValues.get({id: $stateParams.id}).$promise
            .then (function (response) {
                vm.model.vcardRespone = response;
                console.log('state id',$stateParams.id)
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