// Simple view with a newspaper containing the 'How-to'
var explanations = function(){};

explanations.prototype = {
  preload: function() {
    game.load.image('newspaperWP','../JS/assets/NewsWP.png');
  },

  create: function() {
    game.add.sprite(0, 0, 'newspaperWP');
    game.input.onDown.add(goToTutorial, self);
    game.camera.flash(0x000000, 500, false);
  }
}

function startGame() {
  game.state.start('Game',true,false,1);
  game.camera.fade(0x000000, 1500);
}

function goToTutorial() {
  console.log('tut');
  game.state.start('Tutorial');
  game.camera.fade(0x000000, 500);
}
