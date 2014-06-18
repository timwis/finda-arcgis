define(function(require, exports, module) {
  'use strict';
  var flight = require('flight');
  var $ = require('jquery');
  var jsonConverters = esriConverter();
  module.exports = flight.component(function loader() {
    this.after('initialize', function() {
      // load the data
      $.getJSON('config.json', function(config) {
        this.trigger('config', config);

        // load the geojson
        $.getJSON(config.geojson_source, function(data) {
          // Detect if it's ArcGIS JSON and convert it to GeoJSON if so
          if(data.hasOwnProperty('fields') && data.hasOwnProperty('features')) {
            data = jsonConverters.toGeoJson(data);
            console.log(data);
          }
          this.trigger('data', data);
        }.bind(this));
      }.bind(this));
    });
  });

});
       
