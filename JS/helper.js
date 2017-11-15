var helper = function(){};

helper.prototype = {
  preload: function() {},

  create: function() {
    game.add.sprite(0, 0, 'helper');
    group = game.add.group();

    var backButton =  game.make.button(0,0,'large_buttons',backGame,this,8,6,7);
    //Player
    playerU = game.add.sprite(550, 60, 'dude');
    playerD = game.add.sprite(200, 175, 'dude');
    playerU.animations.add('up', [7,7,7,7, 6, 11, 12, 13], 12, true);
    playerD.animations.add('dash', [18, 14, 15, 16, 17, 16, 17, 16, 17, 16, 17], 12, true);
    playerD.play('dash');
    playerU.play('up');
    // Newspaper
    newspaper = game.add.sprite(game.world.centerX - 48, 450, 'newspaper');
    newspaper.animations.add('flying',[0,1,2,3,4,5,6,7,7,7,7],12,true);
    newspaper.play('flying');


    group.add(backButton);
  }
}

function backGame() {
  if(music !== 'undefined'){
    music.stop();
  }
  game.state.start('Menu');
}
