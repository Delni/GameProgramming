var LvlSelect = function(){};

var needExplanation = true;
var unlocked = [true,false,false,false,false,false,false,false];

LvlSelect.prototype = {
  preload: function(){},
  create: function(){
    game.add.sprite(0, 0, 'LevelWP');
    group = game.add.group();

    let functions = [startLvl1,startLvl2,startLvl3,startLvl4,startLvl5,startLvl6,startLvl7,startLvl8]
    for (var i = 0; i < unlocked.length; i++) {
      let lvl = null;
      if(unlocked[i]){
        group.add(game.make.button(70 + 170*(i%4), 170*( (i>3) ? 2 : 1), 'lvlButtons', functions[i], this, 2*i+1, 2*i, 2*i+1));
      } else {
        lvl = game.make.button(70 + 170*(i%4), 170*( (i>3) ? 2 : 1), 'lvlButtons', null, this, 17, 16, 17);
        group.add(lvl);
      }
    }

    // var lvl1 = game.make.button(70, 170, 'lvlButtons', startLvl1, this, 1, 0, 1);
    // var lvl2 = game.make.button(70+170*1, 170, 'lvlButtons', startLvl2, this, 3, 2, 3);
    // var lvl3 = game.make.button(70+170*2, 170, 'lvlButtons', startLvl3, this, 5, 4, 5);
    // var lvl4 = game.make.button(70+170*3, 170, 'lvlButtons', startLvl4, this, 7, 6, 7);
    // var lvl5 = game.make.button(70, 170*2, 'lvlButtons', startLvl5, this, 9, 8, 9);
    // var lvl6 = game.make.button(70+170*1, 170*2, 'lvlButtons', startLvl6, this, 11, 10, 11);
    // var lvl7 = game.make.button(70+170*2, 170*2, 'lvlButtons', startLvl7, this, 13, 12, 13);
    // var lvl8 = game.make.button(70+170*3, 170*2, 'lvlButtons', startLvl8, this, 15, 14, 15);
    //
    // // game.input.onDown.addOnce(removeGroup, this);
    // group.add(lvl1);
    // group.add(lvl2);
    // group.add(lvl3);
    // group.add(lvl4);
    // group.add(lvl5);
    // group.add(lvl6);
    // group.add(lvl7);
    // group.add(lvl8);
  },
}

function startLvl1(){ newLevel(1)}
function startLvl2(){ newLevel(2)}
function startLvl3(){ newLevel(3)}
function startLvl4(){ newLevel(4)}
function startLvl5(){ newLevel(5)}
function startLvl6(){ newLevel(6)}
function startLvl7(){ newLevel(7)}
function startLvl8(){ newLevel(8)}

function newLevel(lvl) {
  // Reset score if levels are choosen : total score only in a row
  totalscore = 0;
  if (needExplanation) {
    needExplanation = false;
    game.state.start('Explanations')
  } else {
    game.state.start('Game',true,false,lvl)
  }
}
