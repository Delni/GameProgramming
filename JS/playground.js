window.PhaserGlobal = { disableWebAudio: true };

var playground = function(){};

// Global definitions for later use
var isOverlaping = false;
var score = 25;
var houses = 10;

playground.prototype = {
  preload: function() {
    console.log('Game is loaded');
  },

  create: function(){
    music = game.add.audio('suzyMusic');
    music.play();
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Generate the city
    city = game.add.group();
    city.enableBody = true;
    generateCity(houses);

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    game.add.sprite(0, game.world.height-50-44,'road');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(138, game.world.height - 240, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties.
    player.enableBody = true;
    player.body.bounce.y = 0;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our four animations, walking left and right, jumping and sliding.
    player.animations.add('left', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('right', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('up', [7, 6, 11, 12, 13], 12, true);
    player.animations.add('dash', [14, 15, 16, 17, 18], 12, true);

    //  The score
    leftText = game.add.text(16, 16, '🗞 Left: 25', { fontSize: '32px', fill: '#000' });
    houseText = game.add.text(16, 48, '🏠 Houses: 10', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(player);

    // UI
    midlayer = game.add.group();
    pause_group = game.add.group();
    pause_button = game.make.button(game.world.width-69,5,'buttonPause',pause,this,2,1,0);
    pause_button.scale.setTo(0.5,0.5);
    pause_group.add(pause_button);
    // Add a input listener that can help us return from being paused
    game.input.onDown.add(unpause, self);
  },

  update: function(){
    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    if (game.physics.arcade.overlap(player, city)) {
      updateHousesLeft()
      isOverlaping = true;
    } else {
      isOverlaping = false;
    }

    //  Reset the players velocity (movement)
    if (player.body.position.y >= 386) {
      player.animations.play('right');
    } else {
      player.frame = 13;
    }

    //  Allow the player to jump if they are touching the ground.
    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && player.body.position.y >= 386)
    {
        player.body.velocity.y = -350;
        player.animations.play('up');
    }

    if(game.input.keyboard.isDown(Phaser.Keyboard.X) && player.body.position.y >= 386)
    {
      player.frame = (player.frame === 17) ? 16 : 17;
    }
  }
}

function collectStar (player, star) {

    //Removes the star from the screen
    star.kill();

    //Add and update the score
    score --;
    leftText.text = '🗞 Left: ' + score;

}

function updateHousesLeft(){
  if(!isOverlaping){
    houses --;
    houseText.text = "🏠 Houses: "+houses;
  }
}

function generateCity(nbBuildings){
  var buildings = [
    'Building1',
    'ColonialHouse',
    'ItalianteHouse',
    'MansardeHouse',
    'RedHouse'
  ];
  let currentBuilding;
  for (var i = 0; i < nbBuildings; i++) {
    let rand = Math.round(Math.random() * (buildings.length-1));
    let xPosition = game.world.width * (i+1) + Math.round(Math.random() * (385)); //10px margin between each
    let yPosition = game.world.height - 64 - 30 - game.cache.getImage(buildings[rand]).height;
    currentBuilding = city.create(xPosition, yPosition,buildings[rand]);
    game.physics.arcade.enable(currentBuilding);
    currentBuilding.body.velocity.x=-350;
    currentBuilding.body.acceleration.set(-10,0);
  }

}

const pause_buttons = [
  {
    key: 'buttons',
    action: unpause,
    frames: [2,0,1]
  },
  {
    key: 'buttons',
    action: mute,
    frames: [5,3,4]
  },
  {
    key: 'buttons',
    action: restartLvl,
    frames: [11,9,10]
  },
  {
    key: 'buttons',
    action: selectLvl,
    frames: [14,12,13]
  },
  {
    key: 'buttons',
    action: backToMenu,
    frames: [17,15,16]
  },
];

function pause(){
    // When the pause button is pressed, we pause the game
    game.paused = true;
    menu = game.add.group();
    for (var i = 0; i < pause_buttons.length; i++) {
      let tmp = game.make.button(
        210+ 80*i,
        game.world.height-90,
        pause_buttons[i].key,
        pause_buttons[i].action,
        this,
        pause_buttons[i].frames[0],
        pause_buttons[i].frames[1],
        pause_buttons[i].frames[2]
      );
      menu.add(tmp);
    }
    //pause_label.hide();
    //Display WP
    pauseWP = midlayer.create(0,0,'pause');

    //Display play button
    // pause_button.setFrames(6,7,8);
    pause_button.visible =false;
  // And a label to illustrate which menu item was chosen. (This is not necessary)
  choiseLabel = game.add.text(game.world.centerX-200, game.world.centerY-100, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
  //choiseLabel.anchor.setTo(0.5, 0.5);
}

// And finally the method that handles the pause menu
function unpause(event){
    // Only act if paused
    if(game.paused){
        //TODO @CHANGE
        // Calculate the corners of the menu
        var x1 = game.world.centerX - 270, x2 = game.world.centerX + 270,
            y1 = game.world.height-89, y2 = game.world.height;

        // Check if the click was inside the menu
        if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
            // The choicemap is an array that will help us see which item was clicked
            var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

            // Get menu local coordinates for the click
            var x = event.x - x1,
                y = event.y - y1;

            // Calculate the choice
            var choise = Math.floor(x / 90);

            // Display the choice
            choiseLabel.text = 'You chose menu item: ' + choisemap[choise];

        }
        else{
          // Remove the menu and the label
          menu.destroy();
          choiseLabel.destroy();
          pauseWP.destroy();
          // Display pause button
          pause_button.visible = true;
          // pause_button.setFrames(2,1,0);
          // Unpause the game
          game.paused = false;
        }
    }
}

function mute() {
  if (menu.children[1].frame <= 5) {
    menu.children[1].setFrames(8,6,7)
  } else {
    menu.children[1].setFrames(5,3,4)
  }
}

function restartLvl(){
  music.stop();
  game.paused = false;
  game.state.start('Game');
}

function selectLvl(){
  //music.stop();
  //game.paused = false;
  //game.state.start('LvlSelect');
}

function backToMenu(){
  music.stop();
  game.paused = false;
  game.state.start('Menu')
}
