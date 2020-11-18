(function (factory, window) {
  // define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) {
    define(['leaflet'], factory);
    // define a Common JS module that relies on 'leaflet'
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  } else {
    // Assume Leaflet is loaded into global object L already
    factory(L);
  }
}(function (L) {
  //'use strict';
  L.Control.layersManager = L.Control.extend({
    options: {
      position: 'topleft',
      layers: [{
        layerName: '',
        inputName: '',
        inputType: 'checkbox',
        inputDisabled: false,
        layerFunctionOn: '',
        layerFunctionOff: ''
      }]
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
      //<li>
      for (let i = 0; i < this.options.layers.length; i++) {
        let listElement = this.listElement = L.DomUtil.create('li', '', list);
        //<label>
        let listElementLabel = this.listElementLabel = L.DomUtil.create('label', '', listElement);
        //<input/>
        let listElementInput = this.listElementInput = L.DomUtil.create('input', 'layerIsOff', listElementLabel);
        listElementInput.type = '' + this.options.layers[i].inputType + '';
        listElementInput.name = '' + this.options.layers[i].inputName + '';
        listElementInput.id = 'leaflet-layers-manager-entry-' + i + '';
        listElementInput.setAttribute('onClick', '' + this.options.layers[i].layerFunctionOn + '');
        //<span>
        let listElementSpan = this.listElementSpan = L.DomUtil.create('span', '', listElementLabel);
        listElementSpan.innerHTML = '' + this.options.layers[i].layerName + ''
        //<input disabled/> <input type="radio"/>
        if (this.options.layers[i].inputDisabled == true || listElementInput.type == 'radio') {
          listElementInput.disabled = true;
          listElementSpan.classList.add('disabled');
        }
        //<input type="checkbox"/>
        if (this.options.layers[i].inputType == 'checkbox') {
          listElementInput.classList.add('layerIsOff');
          L.DomEvent.on(listElementInput, 'click', function (e) {
            this.onOffElement('leaflet-layers-manager-entry-' + i + '', '' + this.options.layers[i].layerFunctionOn + '', '' + this.options.layers[i].layerFunctionOff + '');
          }, this);
        }
        //<input type="radio"/>
        if (this.options.layers[i].inputType == 'checkbox' && this.options.layers[i].inputName !== '') {
          L.DomEvent.on(listElementInput, 'click', function (e) {
            this.onOffSubList('' + this.options.layers[i].inputName + '', '' + this.options.layers[i].layerFunctionOn + '', '' + this.options.layers[i].layerFunctionOff + '')
          }, this);
        }
      }

      return controlElement;

      },
    onOffElement: function(id, functionOn, functionOff) {
        let element = document.getElementById(id);
          if (element.classList.contains('layerIsOff')) {
            element.classList.add('layerIsOn');
            element.classList.remove('layerIsOff');
            element.setAttribute('onClick', '' + functionOff + '');
          } else {
            element.classList.add('layerIsOff');
            element.classList.remove('layerIsOn');
            element.setAttribute('onClick', '' + functionOn + '');
          }
    },
    onOffSubList: function(groupName, functionOn, functionOff) {
      let elements = document.getElementsByName('' + groupName + '');
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == 'radio') {
          if (elements[i].disabled) {
            elements[i].disabled = false;
            elements[i].nextSibling.classList.remove('disabled');
          } else {
            elements[i].disabled = true;
            elements[i].checked = false;
            elements[i].nextSibling.classList.add('disabled');
          }
        }
      }
    }
  });

  L.layersManager = function (options) {
		return new L.Control.layersManager(options);
	};

	return L;

}));

//L.layersManager = function(options) {
//  return new L.Control.layersManager(options);
//};
