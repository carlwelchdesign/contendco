angular.module('contendApp')
    .directive('navBox', function () {
    return {
        restrict: 'A',
        scope: {
            'condition': '='
        },
        link: function (scope, element, attrs) {
            element.find('a').bind('click', function(){
				$("#main-nav").animate({top: "-2000px"}, 600);          
          		$("#main-nav").removeClass("isDown");
            });       
        }
    }
});


