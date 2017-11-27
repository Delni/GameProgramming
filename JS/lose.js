var lose = function(){};

lose.prototype = {
  preload: function() {
    game.load.image('LoseWP','../JS/assets/LoseWP.png');
  },

  create: function(){
    music.fadeOut(1000);
    game.add.sprite(0, 0, 'LoseWP');
    group = game.add.group();

    music = game.add.audio('sweetRascalMusic', 0.5);
    music.play();

    var replayButton = game.make.button(game.world.centerX - 200, game.world.height - 150, 'large_buttons', replay, this, 14, 12, 13);
    var menuButton = game.make.button(game.world.centerX + 5, game.world.height - 150, 'large_buttons', backGame, this, 17, 15, 16);

    group.add(replayButton);
    group.add(menuButton);

  },
}
