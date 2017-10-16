var preload = function(){};

preload.prototype = {
  preload: function() {
    game.load.image('sky', '../JS/assets/sky.png');
    game.load.image('building1','../JS/assets/RedHouse.png');
    game.load.image('ground', '../JS/assets/platform.png');
    game.load.image('star', '../JS/assets/star.png');
    game.load.spritesheet('dude', '../JS/assets/player_spritesheet.png', 138, 150);
    game.load.spritesheet('buttonPlay', '../JS/assets/buttonPlay.png', 195, 72);
  },

  create: function(){
    console.log("Preload complete, now starting menu");
    this.game.state.start('Menu')
  },
}
