'use strict';

// import statements
require('./main.css');
require('angular-material/angular-material.min.css');
let angular = require('angular');
let md = require('angular-material');
let gadgetTemplate = require('./gadget.tpl');

// module definition
module.exports = angular.module('cvent.weather.gadget', [md])

    .service('weatherService', function($http)  {
        let options = {
            method: 'GET',
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22fairfax%2C%20va%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
        };

        this.getWeatherData = () => {
            return $http(options);
        }

    })
    .controller('weatherController', function(weatherService) {
        this.weatherData = {};

        weatherService.getWeatherData().then((data) => {
            this.weatherData = data;
        });
    })
    .component('weatherGadget', {
        template: gadgetTemplate,
        controller: 'weatherController'
    }).name;