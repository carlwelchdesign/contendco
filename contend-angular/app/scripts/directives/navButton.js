angular.module('contendApp')
    .directive('navButton', function () {
    return {
        restrict: 'A',
        scope: {
            'condition': '='
        },
        link: function (scope, element, attrs) {
            element.bind('click', function(){
                if ($("#main-nav").hasClass("isDown") ) {
                    $("#main-nav").animate({top: "-2000px"}, 600);          
                    $("#main-nav").removeClass("isDown");
                } else {
                    $("#main-nav").animate({top: "0px"}, 600);   
                    $("#main-nav").addClass("isDown");
                }
            });
        }
    }
});