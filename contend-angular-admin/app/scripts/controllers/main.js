'use strict';

/**
 * @ngdoc function
 * @name contendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contendApp
 */
angular.module('contendApp')
  .controller('MainCtrl', function ($scope, browserInfo) {

    $scope.showVideo = function(videoId){
        $('#modalDialog').attr("width", $(window).width());
        $('#modalDialog').attr("height", $(window).height());
        $('#modalDialog').html('<div class="modal-dialog"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button><iframe src="//player.vimeo.com/video/' + videoId + '?title=0&amp;byline=0&amp;autoplay=1" frameborder="0" width="100%" height="100%" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>').show();
    
        $('#modalDialog button.close').click(function(){
          $('.modal-dialog').remove();
          $('#modalDialog').hide();
        });

    }

    $scope.closeVideo = function(){
      $('#modalDialog .modal-dialog').remove();
    }

    //console.log('browserInfo.isMobile(): '+browserInfo.isMobile());

    if(browserInfo.isMobile()){
      $('video').remove();
      $('body').addClass('isMobile');
    }
    $('#myCarousel').carousel({
      interval: 7500 //changes the speed
    });
    

  });
