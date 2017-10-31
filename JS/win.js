var win = function(){};

win.prototype = {
  preload: function() {

  },

  create: function(){
    game.state.start('Menu')
  },
}
