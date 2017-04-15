'use strict';

let app = angular.module('TruckLiteApp', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/options.html',
        controller: 'OptionsCtrl'
    })
    .when('/application',{
        templateUrl: 'partials/applicationForm.html',
        controller: 'ApplicationCtrl'
    })
    .when('/applicationSubmit', {
        templateUrl: 'partials/applicationSubmit.html',
        controller: 'ApplicationSubmitCtrl'
    })
    .otherwise('/');
    
    //removes bang for URL
    $locationProvider.hashPrefix('');
});