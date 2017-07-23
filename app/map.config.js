angular
    .module ("app")
    .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key : 'AIzaSyDSfPMHa-sYjwY19jqBr5jEPju8Jtu9ANM',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});