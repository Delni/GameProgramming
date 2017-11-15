// Allow the player to choose among 8 levels
var LvlSelect = function(){};

var needExplanation = true;
// Feel free to change below values to test locked levels
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
