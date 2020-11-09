/*(function (factory, window) {

    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

    // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L) {
        window.L.layersManager = factory(L);
    }
}(function (L) {
    var myLayersManager = {};
    // implement your plugin

    // return your plugin when you are done
    return myLayersManager;
}, window));*/

/* global define, XMLHttpRequest */

const f = function fFunc (factory, window) {
  // Universal Module Definition
  if (typeof define === 'function' && define.amd) {
    define(['leaflet'], factory)
  } else if (typeof module !== 'undefined') {
    // Node/CommonJS
    module.exports = factory(require('leaflet'))
  } else {
    // Browser globals
    if (typeof window.L === 'undefined') {
      throw new Error('Leaflet must be loaded first')
    }
    factory(window.L)
  }
}
const factory = function factoryFunc (L) {
  L.layersManager = L.Control.extend({
    options: {
      position: 'topleft'
      /*style: 'control',
      placeholder: 'adresse',
      resultsNumber: 7,
      collapsed: true,
      serviceUrl: 'https://api-adresse.data.gouv.fr/search/',
      minIntervalBetweenRequests: 250,
      defaultMarkgeocode: true,
      autofocus: true*/
    },
  })
};
L.layersManager = function (options) {
    return new L.layersManager(options)
}
