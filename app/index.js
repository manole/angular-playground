'use strict';

let angular = require('angular');
let md = require('angular-material');
let gadgetTemplate = require('./gadget.tpl');

module.exports = angular.module('cvent.weather.gadget', [md])
    .controller('weatherController', function() {
        this.someProperty = 'cvent';
    })
    .component('weatherGadget', {
        template: gadgetTemplate,
        controller: 'weatherController'
    }).name;