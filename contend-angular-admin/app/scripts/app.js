'use strict';

/**
 * @ngdoc overview
 * @name contendApp
 * @description
 * # contendApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('contendApp', [
    // 'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngBrowserInfo'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/work_details/:id', {
        templateUrl: 'views/work_details.html',
        controller: 'WorkDetailsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
        // controller: 'MainCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/jobs.html'
        // controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
        // controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


myApp.run(function($rootScope, $route, $location){
  // This checks to see if the browser's back button was clicked and closes the video modal


  //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
  //bind in induvidual controllers.

  $rootScope.$on('$locationChangeSuccess', function() {
      $rootScope.actualLocation = $location.path();
  });        

  $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
      if($rootScope.actualLocation === newLocation) {
          //alert('Why did you use history back?');
          $('#modalDialog .modal-dialog').remove();
          $('.modal-backdrop').fadeOut();
        
      }
  });
});