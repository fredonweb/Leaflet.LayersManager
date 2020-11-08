(function(){
  initialize: function(buttons, options){

    if(options){
      L.Util.setOptions( this, options );
    }

    this._buildContainer();
    this._buttons = [];

    for(var i = 0; i < buttons.length; i++){
      buttons[i]._bar = this;
      buttons[i]._container = buttons[i].button;
      this._buttons.push(buttons[i]);
      this.container.appendChild(buttons[i].button);
    }

    },

  onAdd: function () {
    return this.container;
  }

});

L.layersManager = function(/* args will pass automatically */){
  var args = Array.prototype.concat.apply([L.Control.layersManager],arguments);
  return new (Function.prototype.bind.apply(L.Control.layersManager, args));
};
