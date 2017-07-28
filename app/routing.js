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
           })
           .state ('vCard',{
               url:'/:id',
               templateUrl : 'templates/vcard.html',
               controller : 'vcardCtrl',
               controllerAs : 'vm'
           })
           .state ('vCard.comments_fs',{
               url:'/',
               templateUrl :'templates/comments.html',
               controller:'vcardCtrl',
               controllerAs: 'vm'
           })
           .state ('reg',{
               url: '/reg',
               templateUrl : 'templates/reg.html',
               controller : 'regCtrl',
               controllerAs : 'vm'
           })
           .state ('test',{
               url: '/test',
               templateUrl :'test.html'
           })
    });