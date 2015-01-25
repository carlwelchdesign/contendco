'use strict';

/**
 * @ngdoc function
 * @name contendApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the contendApp
 */
angular.module('contendApp')
  .controller('WorkCtrl', function ($scope, $http, $log) {

    var serviceBase = 'http://contendco.com/services/';

    $http.get(serviceBase + 'works')
        .success(function(data, status, headers, config) {
            $scope.works = data;

           
            //alert(JSON.stringify(data));

        })
        .error(function(data, status, headers, config) {
            //$scope.status = status;
            //alert(JSON.stringify(status));
        });


    


  });






 
     
