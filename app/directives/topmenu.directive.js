;(function(){

    "use strict";

    angular
        .module("myApp")

        .component("topMenu", {

            templateUrl: "templates/topmenu.html",
            transclude : true

        });

})();