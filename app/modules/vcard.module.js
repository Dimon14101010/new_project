"use strict";

angular.module ('myApp')
    .factory ('vcardApi',vcardApi);

vcardApi.$inject = ['$resource'];

function vcardApi($resource) {

    let vcardData = {
        vcardValues : $resource('https://api.foursquare.com/v2/venues/:id?v=20170725&client_id=I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1&client_secret=ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM',{id : '@id'}),
        vcardTips : $resource('https://api.foursquare.com/v2/tips/add/?venueId=:vId&text=:text&v=20170725&client_id=I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1&client_secret=ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM',{vId :'@vId',text:'@text'})

    };

    return vcardData;

}