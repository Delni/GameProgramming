var menu = function(){};

menu.prototype = {
  preload: function() {
    console.log("Menu preload");
  },

  create: function(){
    //game.add.tileSprite(0, 0, 800, 600, 'background');

    group = game.add.group();

    var playButton = game.make.button(game.world.centerX - 95, 400, 'buttonPlay', playGame, this, 2, 0, 1);
    // game.input.onDown.addOnce(removeGroup, this);
    group.add(playButton);

  },
}

function playGame() {
  game.state.start('Game');
}
