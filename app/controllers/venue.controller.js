"use strict";

angular.module ('myApp')
.controller ('venueCtrl', venueCtrl);

venueCtrl.$inject = ['venueApi'];

function venueCtrl(venueApi) {
    let vm = this;

    vm.model = {
        venueRespone : venueApi.venueValues.get()
    };
    console.log ('controller',vm.model)
}