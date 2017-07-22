"use strict";

angular.module ('myApp')
    .factory ('venueApi',venueApi);

venueApi.$inject = ['$resource'];

function venueApi($resource) {

    let venueData = {
        venueValues : $resource('https://api.foursquare.com/v2/venues/explore?v=20131016&venuePhotos=1&ll=48.414118%2C35.126582&novelty=new&client_id=I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1&client_secret=ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM'),
        venuePhotos : $resource('https://api.foursquare.com/v2/venues/:id/photos?v=20131016&client_id=I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1&client_secret=ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM',{id: '@id'})


    };
    console.log('srabotalo',venueData);
    return venueData;
}