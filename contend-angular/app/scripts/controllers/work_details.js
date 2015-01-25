'use strict';

/**
 * @ngdoc function
 * @name contendApp.controller:WorkDetailsCtrl
 * @description
 * # WorkDetailsCtrl
 * Controller of the contendApp
 */
angular.module('contendApp')
  .controller('WorkDetailsCtrl', function ($scope, $http, $routeParams) {
  	var client_id = ($routeParams.id) ? parseInt($routeParams.id) : 0;
    var serviceBase = 'http://contendco.com/services/'


    $http.get(serviceBase + 'work_info?id='+client_id)
        .success(function(data, status, headers, config) {
            $scope.work_info = data;
            //alert(JSON.stringify(work_info));

            if ($scope.work_info.project_title===""){
              $('.bb').css('border','none');
            }
        })
        .error(function(data, status, headers, config) {
            //$scope.status = status;
        });

    $http.get(serviceBase + 'work_details?id='+client_id)
        .success(function(data, status, headers, config) {
            $scope.work_details = data;
        })
        .error(function(data, status, headers, config) {
            //$scope.status = status;
        });



    $scope.showVideo = function(videoId){
        $('#modalDialog').attr("width", $(window).width());
        $('#modalDialog').attr("height", $(window).height());
        $('#modalDialog').html('<div class="modal-dialog"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button><iframe src="//player.vimeo.com/video/' + videoId + '?title=0&amp;byline=0&amp;autoplay=1" frameborder="0" width="100%" height="100%" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>').show();
        $('#modalDialog button.close').click(function(){
          $('.modal-dialog').remove();
          //$('.modal.fade').css('display','none');
          $('.modal-backdrop').hide();
        });


    }

    

  });






 
     
