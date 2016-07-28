'use strict';

/**
 * @ngdoc overview
 * @name surveyMaterialApp
 * @description
 * # surveyMaterialApp
 *
 * Main module of the application.
 */
angular
    .module('surveyMaterialApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/survey.html',
                controller: 'SurveyCtrl'
            })
            .when('/results', {
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

