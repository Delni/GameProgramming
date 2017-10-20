var preload = function(){};

preload.prototype = {
  preload: function() {
    game.load.image('sky', '../JS/assets/Decor/sky.png');
    game.load.image('Building1','../JS/assets/Decor/Buildings/Building1.png');
    game.load.image('ColonialHouse','../JS/assets/Decor/Buildings/ColonialHouse.png');
    game.load.image('ItalianteHouse','../JS/assets/Decor/Buildings/ItalianteHouse.png');
    game.load.image('MansardeHouse','../JS/assets/Decor/Buildings/MansardeHouse.png');
    game.load.image('RedHouse','../JS/assets/Decor/Buildings/RedHouse.png');
    game.load.image('ground', '../JS/assets/Decor/platform.png');
    game.load.image('star', '../JS/assets/Elements/star.png');
    game.load.spritesheet('dude', '../JS/assets/Player/player_spritesheet.png', 138, 150);
    game.load.spritesheet('newspaper', '../JS/assets/Elements/newspaper_spritesheet.png', 96, 96);
    // UI
    game.load.image('newsIco','../JS/assets/favico.png');
    game.load.image('menuWP','../JS/assets/MenuWP.png');
    game.load.image('helpWP','../JS/assets/HelpWP.png');
    game.load.spritesheet('buttonPlay', '../JS/assets/Inputs/Play.png', 195, 72);
    game.load.spritesheet('buttonBack', '../JS/assets/Inputs/Back.png', 195, 72);
    game.load.spritesheet('buttonHelp', '../JS/assets/Inputs/Help.png', 195, 72);
  },

  create: function(){
    console.log("Preload complete, now starting menu");
    this.game.state.start('Menu')
  },
}
