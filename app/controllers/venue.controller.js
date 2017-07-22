"use strict";

angular.module ('myApp')
.controller ('venueCtrl', venueCtrl);

venueCtrl.$inject = ['venueApi','$geolocation','$scope'];

function venueCtrl(venueApi,$geolocation,$scope) {
    var position = {};
    let vm = this;

    getLocate();
    function getLocate() {

        $geolocation.getCurrentPosition().then(function(location) {
            position.lat = location.coords.latitude;
        position.long = location.coords.longitude

        vm.model = {
            venueDataId : [],
            venueRespone : venueApi.venueValues.get({lat : position.lat , long : position.long}).$promise
                .then(function(response) {
                    vm.model.venueRespone = response;
                    vm.model.venueRespone.response.groups[0].items.forEach(function(venue) {venue.venuePhotos = venueApi.venuePhotos.get({id: venue.venue.id});

                    })})

        };
        });
    return vm;

    }
    console.log('coord',position);







    console.log ('controller');
}
