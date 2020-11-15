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
      //const layersList = options.layers;
      //console.log(layersList);
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

      //li
      for (let i = 0; i < this.options.layers.length; i++) {
        let listElement = this.listElement = L.DomUtil.create('li', '', list);

        //label
        let onOffClassName = '';
        if (this.options.layers[i].inputType == 'checkbox') onOffClassName = 'layerIsOff';
        let listElementLabel = this.listElementLabel = L.DomUtil.create('label', '', listElement);
        listElementLabel.innerHTML = '<input name="' + this.options.layers[i].inputName + '" type="' + this.options.layers[i].inputType + '" />' +
                                     '<span id="leaflet-layers-manager-entry-' + i + '" class="' + onOffClassName + '">' + this.options.layers[i].layerName + '</span>';

        //input
        if (this.options.layers[i].inputDisabled == true || listElementLabel.firstChild.type == 'radio') {
          listElementLabel.firstChild.disabled = true;
          listElementLabel.lastChild.classList.add('disabled');
          listElementLabel.lastChild.style.pointerEvents = 'none';
        }

        //span
        let listElementSpan = listElementLabel.lastChild;
        if (this.options.layers[i].inputType == 'checkbox' && this.options.layers[i].inputName !== '') {
          L.DomEvent.on(listElementSpan, 'click', function (e) {
            this.onOffSubList('' + this.options.layers[i].inputName + '', '' + this.options.layers[i].layerFunctionOn + '', '' + this.options.layers[i].layerFunctionOff + '')
          }, this);
        }
        if (this.options.layers[i].inputDisabled !== true) {
          listElementSpan.setAttribute('onClick', '' + this.options.layers[i].layerFunctionOn + '');
          if (this.options.layers[i].inputType = 'checkbox') {
            L.DomEvent.on(listElementSpan, 'click', function (e) {
              this.onOffElement('leaflet-layers-manager-entry-' + i + '', '' + this.options.layers[i].layerFunctionOn + '', '' + this.options.layers[i].layerFunctionOff + '');
            }, this);
          }
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
            elements[i].nextSibling.style.pointerEvents = 'auto';
          } else {
            elements[i].disabled = true;
            elements[i].checked = false;
            elements[i].nextSibling.classList.add('disabled');
            elements[i].nextSibling.style.pointerEvents = 'none';
          }
        } else {
          if (elements[i].disabled) {
            //elements[i].nextSibling.setAttribute('onClick', '' + functionOn + '');
          } else {
            //elements[i].nextSibling.setAttribute('onClick', '' + functionOff + '');
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
