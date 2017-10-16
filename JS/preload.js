var preload = function(){};

preload.prototype = {
  preload: function() {
    game.load.image('sky', '../JS/assets/Decor/sky.png');
    game.load.image('building1','../JS/assets/Decor/Buildings/MansardeHouse.png');
    game.load.image('ground', '../JS/assets/Decor/platform.png');
    game.load.image('star', '../JS/assets/Elements/star.png');
    game.load.spritesheet('dude', '../JS/assets/Player/player_spritesheet.png', 138, 150);
    game.load.spritesheet('buttonPlay', '../JS/assets/Inputs/buttonPlay.png', 195, 72);
  },

  create: function(){
    console.log("Preload complete, now starting menu");
    this.game.state.start('Menu')
  },
}
