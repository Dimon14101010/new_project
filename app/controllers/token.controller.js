"use strict";

angular.module ("myApp")
    .controller ("tokenCtrl" ,tokenCtrl);
tokenCtrl.$inject =['$location','$state','venueApi'];

function tokenCtrl($location,$state,vcardApi) {

    let token = $location.url().split('=')

    console.log ('token',token[1]);

    $state.go ('dashboard');
    return token;

};