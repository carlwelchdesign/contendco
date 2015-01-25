angular.module('contendApp')
    .directive('groupPhoto', function () {
    return {
        restrict: 'A',
        scope: {
            'condition': '='
        },
        link: function (scope, element, attrs) {
            element.width($(window).width());
            $( window ).resize(function() {
              element.width($(window).width());
            });      
        }
    }
});


