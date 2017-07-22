"use strict";

angular.module ('myApp')
.controller ('venueCtrl', venueCtrl);

venueCtrl.$inject = ['venueApi'];

function venueCtrl(venueApi) {
    let vm = this;

    vm.model = {
        venueDataId : [],
        venueRespone : venueApi.venueValues.get().$promise
            .then(function(response) {
                vm.model.venueRespone = response;
                vm.model.venueDataId = response.response.groups[0].items.forEach(function(venue){vm.model.venueDataId.push (venue);console.log ('venues inside',venue)})
                })

    };
    console.log ('controller',vm.model.venueDataId)
}