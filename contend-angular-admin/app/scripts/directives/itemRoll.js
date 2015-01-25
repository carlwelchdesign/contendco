angular.module('contendApp')
    .directive('itemRoll', function () {
    return {
        restrict: 'A',
        scope: {
            'condition': '='
        },
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function(){
                element.find('div.detail_roll').fadeIn();
            });

            element.bind('mouseleave', function(){
                element.find('div.detail_roll').fadeOut();
            });         
        }
    }
});