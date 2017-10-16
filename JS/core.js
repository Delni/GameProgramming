var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'playground');

game.state.add("Preload",preload);
game.state.add("Menu",menu);
game.state.add("Game",playground);
game.state.add("Win",win);
game.state.add("Lose",lose);

game.state.start('Preload');
