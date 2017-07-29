"use strict";

angular.module ("myApp")
       .controller ("vcardCtrl" ,vcardCtrl);
vcardCtrl.$inject =['$stateParams','vcardApi','$scope','venueApi'];

function vcardCtrl($stateParams,vcardApi,$scope,venueApi) {

    let vm = this;

    vm.model = {
        vcardRespone : vcardApi.vcardValues.get({id: $stateParams.id}).$promise
            .then (function (response) {
                vm.model.vcardRespone = response;

                vm.model.vcardRespone.response.venue.venuePhotos = venueApi.venuePhotos.get({id: $stateParams.id});
                console.log('vcard',vm.model.vcardRespone.response.venue.venuePhotos);
            }),
        tips : $scope.tips,
        sendTips : function (tips) {
            vm.model.tips = angular.copy(tips);
            vcardApi.vcardTips.save ({vId : $stateParams.id,text:vm.model.tips.text});
            console.log ('tips srabotalo')
        }


    };
    $scope.showPhotos = false;
    $scope.showHide = false;

    return vm;
};