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
               views : {
                   '' : {
                       templateUrl : 'templates/vcard.html',
                       controller : 'vcardCtrl',
                       controllerAs : 'vm'
                   },
                   'comments@vCard': {
                       templateUrl : 'templates/comments.html',
                       controller:'vcardCtrl',
                       controllerAs: 'vm'
                   }
               }
           })

           .state ('reg',{
               url: '/reg',
               templateUrl : 'templates/reg.html',
               controller : 'regCtrl',
               controllerAs : 'vm'
           })
           .state ('token',{
               url: '/token',
               templateUrl :'test.html',
               controller : 'tokenCtrl',
               controllerAs : 'tk'
           })
           .state ('vCard.photos_fs',{
               url : '/',
               templateUrl : 'templates/photos.html',
               controller:'vcardCtrl',
               controllerAs: 'vm'

           })
           .state ('testviews', {
               url : '/testViews',
               views : {
                   '' : {templateUrl : 'templates/testViews.html'},
                   'header@testviews' : {templateUrl : 'templates/testHeader.html'},
                   'bottom@testviews' : {templateUrl : 'templates/testBottom.html'}
               }
           })


    });