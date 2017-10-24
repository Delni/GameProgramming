
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'playground', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', '../JS/assets/sky.png');
    game.load.image('building1','../JS/assets/RedHouse.png');
    game.load.image('ground', '../JS/assets/pedWayDown.png');
    game.load.image('road', '../JS/assets/Decor/upPedWay.png');
    game.load.image('star', '../JS/assets/star.png');
    game.load.spritesheet('dude', '../JS/assets/player_spritesheet.png', 138, 150);

}

var player;
var platforms;
var cursors;

var stars;
var score = 0;
var scoreText;

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(0, game.world.height-64-375-30,'building1')

    // We change the size of the world
    game.world.setBounds(0, 0, 1920, 600);

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(138, game.world.height - 280, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('right', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('up', [7, 6, 11, 12, 13], 12, true);

    //  Finally some stars to collect
    stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(7 + Math.random() * 600, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    //  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 350;
    game.camera.follow(player)

    // Create a label to use as a button
      pause_label = game.add.text(game.world.centerX - 95, game.world.centerY - 20, 'Pause', { font: '24px Arial', fill: '#fff' });
      pause_label.inputEnabled = true;
      pause_label.events.onInputUp.add(function () {
          // When the pause button is pressed, we pause the game
          game.paused = true;

    // Then add the menu
      //menu = game.add.sprite(1920/2, 600/2, 'menu');
      //menu.anchor.setTo(0.5, 0.5);

       // And a label to illustrate which menu item was chosen. (This is not necessary)
      //choiseLabel = game.add.text(1920/2, 600-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
      //choiseLabel.anchor.setTo(0.5, 0.5);
    });

    // Add a input listener that can help us return from being paused
      game.input.onDown.add(unpause, self);

      function unpause(event){
          // Only act if paused
          if(game.paused){
              // Create a label to use as a button
              unpause_label = game.add.text(60, 20, 'Unpause', { font: '24px Arial', fill: '#fff' });
              unpause_label.inputEnabled = true;
              unpause_label.events.onInputUp.add(function () {
              // When the pause button is pressed, we pause the game
              unPause_label.destroy();
              game.paused = false;
            });
          }
      };

    }

}

function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 350;
    if (player.body.touching.down) {
      player.animations.play('right');
    } else {
      player.frame = 13;
    }
    // if (cursors.left.isDown)
    // {
    //     //  Move to the left
    //     player.body.velocity.x = -350;
    //     if(player.body.touching.down)
    //     player.animations.play('left');
    // }
    // else if (cursors.right.isDown)
    // {
    //     //  Move to the right
    //     player.body.velocity.x = 350;
    //     if(player.body.touching.down)
    //     player.animations.play('right');
    // }
    // else
    // {
    //     //  Stand still
    //     player.animations.stop();
    //     if(player.body.touching.down){
    //       player.frame = 0;
    //     } else {
    //       player.frame = 13;
    //     }
    // }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
        player.animations.play('up');
    }
}

function collectStar (player, star) {

    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}
