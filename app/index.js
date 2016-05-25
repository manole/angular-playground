'use strict';

// import statements
require('./main.css');
require('angular-material/angular-material.min.css');
let angular = require('angular');
let md = require('angular-material');
let gadgetTemplate = require('./gadget.tpl');

// module definition
module.exports = angular.module('cvent.weather.gadget', [md])
    .controller('weatherController', function() {
        this.someProperty = 'cvent';
    })
    .component('weatherGadget', {
        template: gadgetTemplate,
        controller: 'weatherController'
    }).name;