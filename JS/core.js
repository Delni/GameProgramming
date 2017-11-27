var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'playground');

game.state.add("Preload",preload);
game.state.add("Menu",menu);
game.state.add("Game",playground);
game.state.add("Explanations",explanations);
game.state.add("Tutorial",tutorial);
game.state.add("Win",win);
game.state.add("Lose",lose);
game.state.add("Helper",helper);
game.state.add("LvlSelect",LvlSelect);

game.state.start('Preload');
