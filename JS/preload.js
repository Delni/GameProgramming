var preload = function(){};

preload.prototype = {
  preload: function() {
    // Decor
    game.load.image('sky', '../JS/assets/Decor/parallax_backgound_pack/_11_background.png');
    game.load.image('trees', '../JS/assets/Decor/parallax_backgound_pack/_02_trees and bushes.png');
    game.load.image('distanttrees', '../JS/assets/Decor/parallax_backgound_pack/_03_distant_trees.png');
    game.load.image('bushes', '../JS/assets/Decor/parallax_backgound_pack/_04_bushes.png');
    game.load.image('hugeclouds', '../JS/assets/Decor/parallax_backgound_pack/_07_huge_clouds.png');
    game.load.image('clouds', '../JS/assets/Decor/parallax_backgound_pack/_08_clouds.png');
    // City
    game.load.image('Building1','../JS/assets/Decor/Buildings/Building1.png');
    game.load.image('ColonialHouse','../JS/assets/Decor/Buildings/ColonialHouse.png');
    game.load.image('ItalianteHouse','../JS/assets/Decor/Buildings/ItalianteHouse.png');
    game.load.image('MansardeHouse','../JS/assets/Decor/Buildings/MansardeHouse.png');
    game.load.image('RedHouse','../JS/assets/Decor/Buildings/RedHouse.png');
    game.load.image('ground', '../JS/assets/Decor/pedWayDown.png');
    // game.load.image('stars', '../JS/assets/Elements/star.png');
    game.load.image('road', '../JS/assets/Decor/upPedWay.png');
    game.load.image('lastBuilding_back', '../JS/assets/Decor/Buildings/Last_up.png');
    game.load.image('lastBuilding_front', '../JS/assets/Decor/Buildings/Last_down.png');
    // Player
    game.load.spritesheet('dude', '../JS/assets/Player/player_spritesheet.png', 138, 150);
    game.load.spritesheet('newspaper', '../JS/assets/Elements/newspaper_spritesheet.png', 96, 96);
    //Obstacles
    game.load.spritesheet('box', '../JS/assets/Decor/Obstacles/Box.png');
    game.load.spritesheet('bin', '../JS/assets/Decor/Obstacles/Bin.png');
    game.load.spritesheet('lampPost', '../JS/assets/Decor/Obstacles/LampPost.png');
    //Font
    game.load.bitmapFont('ParkLane','../JS/assets/font/parklane.png','../JS/assets/font/parklane.fnt')
    // UI
    game.load.image('menuWP','../JS/assets/MenuWP.png');
    game.load.image('helper','../JS/assets/HelpWP.png');
    game.load.image('pause','../JS/assets/PauseWP.png');
    game.load.image('LevelWP','../JS/assets/LvlWP.png');
    game.load.image('WinWP','../JS/assets/WinWP.png');
    game.load.spritesheet('buttonPause', '../JS/assets/Inputs/PlayPause.png', 128, 128);
    game.load.spritesheet('large_buttons', '../JS/assets/Inputs/large_buttons_spritesheet.png', 195, 72);
    game.load.spritesheet('buttons', '../JS/assets/Inputs/buttons_spritesheet.png', 64, 64);
    game.load.spritesheet('lvlButtons', '../JS/assets/Inputs/LvlButtons_spritesheet.png', 144,144);
    game.load.image('menuItems', '../JS/assets/Inputs/Menu.png');

    // Sounds
    //  Firefox doesn't support mp3 files, so use ogg
    game.load.audio('suzyMusic', ['../assets/musics/suzy.mp3', '../assets/musics/suzy.ogg']);
    game.load.audio('bootySwingMusic', ['../assets/musics/Booty_Swing.mp3', '../assets/musics/Booty_Swing.ogg']);
    game.load.audio('dirtyStopOutMusic', ['../assets/musics/Dirty_Stop_Out.mp3', '../assets/musics/Dirty_Stop_Out.ogg']);
    game.load.audio('dragonsMusic', ['../assets/musics/Dragons.mp3', '../assets/musics/Dragons.ogg']);
    game.load.audio('geraldinesRoutineMusic', ['../assets/musics/Geraldines_Routine.mp3', '../assets/musics/Geraldines_Routine.ogg']);
    game.load.audio('sweetRascalMusic', ['../assets/musics/Sweet_Rascal.mp3', '../assets/musics/Sweet_Rascal.ogg']);

    game.load.audio('chaching', '../assets/sounds/Cash Register Cha Ching.wav');
    // game.load.audio('runnerSound', ['../assets/sounds/Coureur.mp3', '../assets/sounds/Coureur.ogg']);
    // game.load.audio('thrownNewspaperSound', ['../assets/sounds/Journal_jete.wav', '../assets/sounds/Journal_jete.ogg']);
    // game.load.audio('thrownNewspaperTableSound', ['../assets/sounds/Journal_jete_sur_table.wav', '../assets/sounds/Journal_jete_sur_table.ogg']);
    // game.load.audio('rainSound', ['../assets/sounds/Pluie.mp3', '../assets/sounds/Pluie.ogg']);
    // game.load.audio('loudRainSound', ['../assets/sounds/Pluie_forte.mp3', '../assets/sounds/Pluie_forte.ogg']);
    // game.load.audio('garbageBinSound', ['../assets/sounds/Poubelle.mp3', '../assets/sounds/Poubelle.ogg']);
  },

  create: function(){
    console.log("Preload complete, now starting menu");
    this.game.state.start('Menu')
  },
}
