"use strict";

angular.module ('myApp')
.controller ('venueCtrl', venueCtrl);

venueCtrl.$inject = ['venueApi','$geolocation','$scope'];

function venueCtrl(venueApi,$geolocation,$scope) {

    getLocate();
    function getLocate() {

        $geolocation.getCurrentPosition().then(function(location) {
            $scope.mesto = location});



    }
    console.log('coord', getLocate());


    let vm = this;

    vm.model = {
        venueDataId : [],
        venueRespone : venueApi.venueValues.get({lat : $geolocation.position.coords , long : $geolocation.position.coords}).$promise
                 .then(function(response) {
                vm.model.venueRespone = response;
                vm.model.venueRespone.response.groups[0].items.forEach(function(venue) {venue.venuePhotos = venueApi.venuePhotos.get({id: venue.venue.id});

                })})

    };


    console.log ('controller');
}
