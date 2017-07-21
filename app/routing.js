'use strict';

angular.module ('myApp')
    .config (function ($stateProvider,$locationProvider) {

       $locationProvider.html5Mode(true);

       $stateProvider
           .state ('dashboard',{
           url:'/',
           templateUrl : 'dashboard.html',
           controller : 'venueCtrl',
           controllerAs : 'vm'
           });
    });