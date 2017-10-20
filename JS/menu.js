var menu = function(){};

menu.prototype = {
  preload: function() {
    console.log("Menu preload");
  },

  create: function(){
    //game.add.tileSprite(0, 0, 800, 600, 'background');
    game.add.sprite(0, 0, 'menuWP');
    group = game.add.group();

    var playButton = game.make.button(game.world.centerX - 95, 350, 'buttonPlay', playGame, this, 2, 0, 1);
    var helpButton = game.make.button(game.world.centerX - 95, 450, 'buttonHelp', helpGame, this, 2, 0, 1);

    // game.input.onDown.addOnce(removeGroup, this);
    group.add(playButton);
    group.add(helpButton);

  },
}

function playGame() {
  game.state.start('Game');
}

function helpGame(){
  game.state.start('Helper');
}
