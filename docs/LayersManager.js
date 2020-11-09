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
L.Control.myLayersManager = L.Control.extend({
  options: {
    position: 'topright'
  },
  initialize: function(options) {
    L.Util.setOptions(this, options);
  },
  onAdd: function(map) {
    var controlElementTag = 'div';
    var controlElementClass = 'my-layers-manager';
    var controlElement = L.DomUtil.create(controlElementTag, controlElementClass);

    // Continue implementing the control here.

    return controlElement;
  }
});
L.myLayersManager = function(options) {
  return new L.Control.myLayersManager(options);
};


/*L.Control.layersManager = L.Control.Layers.extend({
    options: {
        position: 'topright',
    },

    initialize: function (options) {
      L.Util.setOptions(this, options)
    },

    onAdd: function (map) {
      var className = 'leaflet-control-geocoder-ban'
      var container = this.container = L.DomUtil.create('div', className + ' leaflet-bar')
      var icon = this.icon = L.DomUtil.create('button', className + '-icon', container)
      var form = this.form = L.DomUtil.create('div', className + '-form', container)
      var input

      icon.innerHTML = '&nbsp;'
      icon.type = 'button'
    },
});
L.Control.layersManager = function(baseLayers, overlays, options) {
    return new L.Control.layersManager(baseLayers, overlays, options);
};*/
