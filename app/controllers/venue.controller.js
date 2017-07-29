"use strict";

angular.module ('myApp')
.controller ('venueCtrl', venueCtrl);

venueCtrl.$inject = ['venueApi','$geolocation','$scope','NgMap'];

function venueCtrl(venueApi,$geolocation,$scope,NgMap) {

    var position = {};
    let vm = this;

    getLocate();
    function getLocate() {

        $geolocation.getCurrentPosition().then(function(location) {

            position.lat = location.coords.latitude;
        position.long = location.coords.longitude;
            $scope.address = position.lat + ',' + position.long;
        vm.model = {
            position : position,
            venueRespone : venueApi.venueValues.get({lat : position.lat , long : position.long}).$promise
                .then(function(response) {
                    vm.model.venueRespone = response;
                    vm.model.venueRespone.response.groups[0].items.forEach(function(venue) {venue.venuePhotos = venueApi.venuePhotos.get({id: venue.venue.id});

                    })})
            
        };



        });





        $scope.update = function (address) {
            NgMap.getMap().then(function(map) {
                var newPos = map.getCenter();
                console.log ('newpos',newPos);
                vm.model = {
                    position : map.getCenter(),
                    venueRespone : venueApi.venueValues.get({lat : newPos.lat() , long : newPos.lng()}).$promise
                        .then(function(response) {
                            vm.model.venueRespone = response;
                            vm.model.venueRespone.response.groups[0].items.forEach(function(venue) {venue.venuePhotos = venueApi.venuePhotos.get({id: venue.venue.id})

                            })})

                };
            });

        };

    return vm;

    }








    
}


