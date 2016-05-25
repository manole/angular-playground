'use strict';

// import statements
require('./main.css');
require('angular-material/angular-material.min.css');
let angular = require('angular');
let md = require('angular-material');
let gadgetTemplate = require('./gadget.tpl');
let _ = require('lodash');

// module definition
module.exports = angular.module('cvent.weather.gadget', [md])

    .service('weatherService', function ($http) {
        let options = {
            method: 'GET',
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22fairfax%2C%20va%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
        };
        this.getWeatherData = () => {
            return $http(options);
        };
        this.getImage = (code) => {
            return `http://l.yimg.com/a/i/us/we/52/${code}.gif`;
        }
    })
    .controller('weatherController', function (weatherService) {
        this.condition = {temp: '--'};
        this.location = {};
        this.forecast = {};
        this.image = '';

        weatherService.getWeatherData().then((data) => {
            this.condition = _.get(data, 'data.query.results.channel.item.condition');
            this.location = _.get(data, 'data.query.results.channel.location');
            this.forecast = _.get(data, 'data.query.results.channel.item.forecast');
            this.image = weatherService.getImage(this.condition.code);
        });
    })
    .component('weatherGadget', {
        template: gadgetTemplate,
        controller: 'weatherController'
    }).name;