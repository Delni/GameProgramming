var win = function(){};
var totalscore = 0;

win.prototype = {
  init: function(delivered_houses,extras) {
    this.houseBonus = delivered_houses * 16;
    this.extraBonus = extras * 2;
    this.lvlBonus = currentLvl * 100;
    totalscore += this.lvlBonus+this.houseBonus+this.extraBonus;
  },

  create: function(){
    game.add.sprite(0, 0, 'WinWP');
    group = game.add.group();
    // unlocked next level :
    if (currentLvl < 8) {
      unlocked[currentLvl] = true;
    }
    var nextButton = game.make.button(game.world.width - 200 , game.world.height - 77, 'large_buttons', nxtLvl, this, 11, 9, 10);
    var replayButton = game.make.button(5, game.world.height - 77, 'large_buttons', replay, this, 14, 12, 13);
    var menuButton = game.make.button(5 , 5 , 'large_buttons', backGame, this, 17, 15, 16);
    var scoreTxt = game.add.bitmapText(game.world.centerX, game.world.centerY, 'ParkLane',totalscore,62);
    scoreTxt.anchor.setTo(0.5,0.5)
    var lvlButton = game.make.button(game.world.width - 200 , 5, 'large_buttons', playGame, this, 20, 18, 19);
    var prevScoreTxt = game.add.text(game.world.centerX, game.world.height - 90, "Previous score: "+(totalscore-(this.lvlBonus+this.houseBonus+this.extraBonus)),{font: 'Helvetica, Arial',fontSize: '15px', fill : '#FFF'})
    prevScoreTxt.anchor.setTo(0.5,0.5);
    var houseTxt = game.add.text(game.world.centerX, game.world.height - 72, "Houses delivered: "+(this.houseBonus)/16+" x16 pts",{font: 'Roboto, Helvetica, Arial',fontSize: '15px', fill : '#FFF'})
    houseTxt.anchor.setTo(0.5,0.5);
    var extraTxt = game.add.text(game.world.centerX, game.world.height - 54, "Extra saved: "+(this.extraBonus)/2+" x2 pts",{font: 'Roboto, Helvetica, Arial',fontSize: '15px', fill : '#FFF'})
    extraTxt.anchor.setTo(0.5,0.5);
    var lvlTxt = game.add.text(game.world.centerX, game.world.height - 36, "Bonus: +"+(this.lvlBonus)+"pts",{font: 'Helvetica, Arial',fontSize: '15px', fill : '#FFF'})
    lvlTxt.anchor.setTo(0.5,0.5);
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
  if(typeof music !== 'undefined'){
    music.stop();
  }
  game.state.start('Game',true,false,currentLvl);
}
