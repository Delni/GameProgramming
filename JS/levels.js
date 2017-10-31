var LvlSelect = function(){};

LvlSelect.prototype = {
  preload: function(){},
  create: function(){
    game.add.sprite(0, 0, 'LevelWP');
    group = game.add.group();

    var lvl1 = game.make.button(70, 170, 'lvlButtons', startLvl1, this, 1, 0, 1);
    var lvl2 = game.make.button(70+170*1, 170, 'lvlButtons', startLvl2, this, 3, 2, 3);
    var lvl3 = game.make.button(70+170*2, 170, 'lvlButtons', null, this, 16, 17, 16);
    var lvl4 = game.make.button(70+170*3, 170, 'lvlButtons', null, this, 16, 17, 16);
    var lvl5 = game.make.button(70, 170*2, 'lvlButtons', null, this, 16, 17, 16);
    var lvl6 = game.make.button(70+170*1, 170*2, 'lvlButtons', null, this, 16, 17, 16);
    var lvl7 = game.make.button(70+170*2, 170*2, 'lvlButtons', null, this, 16, 17, 16);
    var lvl8 = game.make.button(70+170*3, 170*2, 'lvlButtons', null, this, 16, 17, 16);

    // game.input.onDown.addOnce(removeGroup, this);
    group.add(lvl1);
    group.add(lvl2);
    group.add(lvl3);
    group.add(lvl4);
    group.add(lvl5);
    group.add(lvl6);
    group.add(lvl7);
    group.add(lvl8);
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
  game.state.start('Game',true,false,lvl*10)
}
