"use strict";

angular.module ('myApp')
.controller ('venueCtrl', venueCtrl);

venueCtrl.$inject = ['venueApi'];

function venueCtrl(venueApi) {
    let vm = this;

    vm.model = {
        venueId : [],
        venueRespone : venueApi.venueValues.get().$promise
            .then(function(response) {vm.model.venueId = response.response.groups[0].items})
    };
    console.log ('controller',vm.model)
}