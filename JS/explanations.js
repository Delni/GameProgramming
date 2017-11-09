var explanations = function(){};

explanations.prototype = {
  preload: function() {
    game.load.image('newspaper','../JS/assets/NewsWP.png');
  },

  create: function() {
    game.add.sprite(0, 0, 'newspaper');
    game.input.onDown.add(startGame, self);
    game.camera.flash(0x000000, 500, false);
  }
}

function startGame() {
  game.state.start('Game',true,false,1);
  game.camera.fade(0x000000, 500);
}
