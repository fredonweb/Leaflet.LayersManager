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

    // Container
    let controlElementClassName = 'leaflet-layers-manager';
    let controlElement = this.controlElement = L.DomUtil.create('div', controlElementClassName);
    // title
    let title = this.title = L.DomUtil.create('h6', controlElementClassName + '-title', controlElement);
    title.innerHTML = '<i id="show-hide-btn" class="material-icons left">keyboard_arrow_up</i><span>Détails de la carte</span>';
    title.id = 'show-hide';

    // <ul>
    let list = this.list = L.DomUtil.create('ul', controlElementClassName + '-list', controlElement);
    list.id = 'leaflet-layers-manager-list';
    list.style.display = 'none';

    // <li>
    let listElement = this.listElement = L.DomUtil.create('li', '', list);
    let listElementLabel = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement);
    listElement.onclick = loadMarkers;
    listElementLabel.innerHTML = '<input type="checkbox" /><span>GIE La Ville Autrement</span>';

    let listElement2 = this.listElement2 = L.DomUtil.create('li', '', list);
    let listElementLabel2 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement2);
    listElementLabel2.innerHTML = '<input type="checkbox" /><span>Cadastre</span>';

    let listElement3 = this.listElement3 = L.DomUtil.create('li', '', list);
    let listElementLabel3 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement3);
    listElementLabel3.innerHTML = '<input type="checkbox" /><span>PLU-H</span>';

    let listElement4 = this.listElement4 = L.DomUtil.create('li', '', list);
    let listElementLabel4 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement4);
    listElementLabel4.innerHTML = '<input name="group1" type="radio" checked /><span>Zonage et réglement</span>';

    let listElement5 = this.listElement5 = L.DomUtil.create('li', '', list);
    let listElementLabel5 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement5);
    listElementLabel5.innerHTML = '<input name="group1" type="radio" /><span>Orientations d\'Aménagement et de Programmation</span>';

    let listElement6 = this.listElement6 = L.DomUtil.create('li', '', list);
    let listElementLabel6 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement6);
    listElementLabel6.innerHTML = '<input name="group1" type="radio" /><span>Secteurs de mixité sociale</span>';

    let listElement7 = this.listElement7 = L.DomUtil.create('li', '', list);
    let listElementLabel7 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement7);
    listElementLabel7.innerHTML = '<input name="group1" type="radio" /><span>Emplacements réservés</span>';

    let listElement8 = this.listElement8 = L.DomUtil.create('li', '', list);
    let listElementLabel8 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement8);
    listElementLabel8.innerHTML = '<input name="group1" type="radio" /><span>Hauteur de façade</span>';

    let listElement9 = this.listElement9 = L.DomUtil.create('li', '', list);
    let listElementLabel9 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement9);
    listElementLabel9.innerHTML = '<input name="group1" type="radio" /><span>Taille de logement</span>';

    let listElement10 = this.listElement10 = L.DomUtil.create('li', '', list);
    let listElementLabel10 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement10);
    listElementLabel10.innerHTML = '<input type="checkbox" /><span>Demandes de valeurs foncières</span>';

    let listElement11 = this.listElement11 = L.DomUtil.create('li', '', list);
    let listElementLabel11 = this.listElementLabel = L.DomUtil.create('label', 'noClassName', listElement11);
    listElementLabel11.innerHTML = '<input type="checkbox" /><span>Sites et sols pollués BASOL</span>';

    return controlElement;

  }
});
L.layersManager = function(options) {
  return new L.Control.layersManager(options);
};
