"use strict";

angular.module ("myApp")
    .controller ("tokenCtrl" ,tokenCtrl);
tokenCtrl.$inject =['$location','$state','vcardApi'];

function tokenCtrl($location,$state,vcardApi) {
    let token = this ;
    token.model = {
        getToken : $location.hash().split('=')
    };
    console.log ('token',token.model.getToken[1]);

    $state.go ('dashboard');
    return token;
};