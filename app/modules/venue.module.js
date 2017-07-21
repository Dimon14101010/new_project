"use strict";

angular.module ('myApp')
    .factory ('venueApi',venueApi);

venueApi.$inject = ['$resource'];

function venueApi($resource) {

    let venueData = {
        venueValues : $resource('https://api.foursquare.com/v2/venues/explore?v=20131016&ll=48.414118%2C35.126582&section=food&novelty=new&client_id=MCYZZWIG0EVIPENVBVH4TOW3302YFRE5SUCGP0ECVTXG3MBE&client_secret=VBDZI0GECFF24FKACQW12L15JR5VEKUK0RZZTV51QJ0XYY3G')

    };
    console.log('srabotalo',venueData)
    return venueData;
}