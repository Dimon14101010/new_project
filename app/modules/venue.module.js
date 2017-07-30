"use strict";

angular.module ('myApp')
    .factory ('venueApi',venueApi);

venueApi.$inject = ['$resource','$location','$state'];

function venueApi($resource,$location,$state) {

    let venueData = {
        venueValues : $resource('https://api.foursquare.com/v2/venues/explore?mode=url&v=20170725&venuePhotos=1&ll=:lat,:long&radius=1500&client_id=I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1&client_secret=ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM',{lat :'@lat',long: '@long'}),
        venuePhotos : $resource('https://api.foursquare.com/v2/venues/:id/photos?v=20170725&client_id=I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1&client_secret=ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM',{id: '@id'}),
        instaPhotos : $resource('https://api.instagram.com/v1/locations/search?lat=:lat&lng=:lng&access_token=:token',{lat:"@lat",lng:"@lng",token : "@token"}),
        testData : tokenCtrl($location,$state)
    };console.log('testApi',venueData.testData[1])

    return venueData;
}