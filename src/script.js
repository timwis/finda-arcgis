require.config({
    baseUrl: 'src/',
    paths: {
      'jquery': '../lib/jquery-1.10.2',
      'bootstrap': '../lib/bootstrap.min',
      'leaflet': '../lib/leaflet/leaflet',
      'handlebars': '../lib/handlebars',
      'lodash': '../lib/lodash.min',
      'flight': '../lib/flight.min',
      'jsonConverters': '../lib/jsonConverters'
    },
    shim: {
      'handlebars': {
        exports: 'Handlebars'
      },
      'underscore': {
        exports: '_'
      },
      'flight': {
        deps: ['../lib/es5-shim.min', '../lib/es5-sham.min'],
        exports: 'flight'
      },
      'bootstrap': {
        deps: ['jquery'],
        exports: '$'
      },
      'jsonConverters': {
        exports: 'jsonConverters'
      }
    }
});

define(function(require) {
    'use strict';
    require('bootstrap');
    // attach components to the DOM
    require('ui/map').attachTo('#map');
    require('ui/search').attachTo('#search', {mapSelector: '#map'});
    require('ui/info').attachTo('#info');
    require('ui/facet').attachTo('#facets');
    require('data/facet').attachTo(document);
    require('ui/project').attachTo(document);
    require('data/analytics').attachTo(document);
    require('data/loader').attachTo(document);
  });
