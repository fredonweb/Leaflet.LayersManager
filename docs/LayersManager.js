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

L.Control.layersManager = L.Control.Layers.extend({
    options: {
        position: 'topright',
    },
});
L.Control.layersManager = function(baseLayers, overlays, options) {
    return new L.Control.layersManager(baseLayers, overlays, options);
};
