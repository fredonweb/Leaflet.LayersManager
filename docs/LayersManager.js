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

L.Control.layersManager = L.Control.extend({
  options: {
    position: 'topright'
  },
  initialize: function(options) {
    L.Util.setOptions(this, options);
  },
  onAdd: function(map) {

    //let controlElementTag = 'div';
    let controlElementClassName = 'leaflet-layers-manager';

    let controlElement = this.controlElement = L.DomUtil.create('div', controlElementClass);
    let title = this.title = L.DomUtil.create('div', className + '-title', controlElement)
    let list = this.list = L.DomUtil.create('div', className + '-list', controlElement)

    // Continue implementing the control here.

    return controlElement;
  }
});
L.layersManager = function(options) {
  return new L.Control.layersManager(options);
};
