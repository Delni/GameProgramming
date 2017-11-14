var win = function(){};
var totalscore = 0;

win.prototype = {
  init: function(delivered_houses,extras) {
    this.houseBonus = delivered_houses * 16;
    console.log(this.houseBonus);
    this.extraBonus = extras * 32;
    console.log(this.extraBonus);
    this.lvlBonus = currentLvl * 100;
    console.log(this.lvlBonus);
    totalscore += this.lvlBonus+this.houseBonus+this.extraBonus;
  },

  create: function(){
    game.add.sprite(0, 0, 'WinWP');
    group = game.add.group();

    var nextButton = game.make.button(game.world.width - 200 , game.world.height - 77, 'large_buttons', nxtLvl, this, 11, 9, 10);
    var replayButton = game.make.button(5, game.world.height - 77, 'large_buttons', replay, this, 14, 12, 13);
    var menuButton = game.make.button(5 , 5 , 'large_buttons', backGame, this, 17, 15, 16);
    var scoreTxt = game.add.bitmapText(game.world.centerX, game.world.centerY, 'ParkLane',totalscore,62);
    scoreTxt.anchor.setTo(0.5,0.5)
    var lvlButton = game.make.button(game.world.width - 200 , 5, 'large_buttons', playGame, this, 20, 18, 19);

    group.add(replayButton);
    group.add(nextButton);
    group.add(menuButton);
    group.add(lvlButton);
  },
}

function nxtLvl() {
  game.state.start('Game',true,false,currentLvl+1);
}

function replay() {
  if(music !== 'undefined'){
    music.stop();
  }
  game.state.start('Game',true,false,currentLvl);
}
