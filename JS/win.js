var win = function(){};

win.prototype = {
  init: function(score) {
    this.score = score;
  },

  create: function(){
    game.add.sprite(0, 0, 'WinWP');
    group = game.add.group();

    var replayButton = game.make.button(game.world.width - 200, game.world.height - 77, 'large_buttons', replay, this, 11, 9, 10);
    var nextButton = game.make.button(5 , game.world.height - 77, 'large_buttons', nxtLvl, this, 14, 12, 13);
    var menuButton = game.make.button(5 , 5 , 'large_buttons', backGame, this, 17, 15, 16);
    var scoreTxt = game.add.bitmapText(game.world.centerX, game.world.centerY, 'ParkLane',this.score,62);
    scoreTxt.anchor.setTo(0.5,0.5)
    var lvlButton = game.make.button(game.world.width - 200 , 5, 'large_buttons', playGame, this, 20, 18, 19);

    group.add(replayButton);
    group.add(nextButton);
    group.add(menuButton);
    group.add(lvlButton);
  },
}

function nxtLvl() {
  game.state.start('Game',true,false,currentLvl);
}

function replay() {
  game.state.start('Game',true,false,currentLvl+1);
}
