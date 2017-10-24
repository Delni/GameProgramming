var playground = function(){};

playground.prototype = {
  preload: function() {
    console.log('Game is loaded');
  },

  create: function(){
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    // Generate the city
    city = game.add.group();
    city.enableBody = true;
    generateCity(10);
    // We change the size of the world
    game.world.setBounds(0, 0, 800, 600);

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 50, 'ground');
    game.add.sprite(0, game.world.height-50-44,'road');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(138, game.world.height - 280, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.enableBody = true;
    player.body.bounce.y = 0;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('right', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('up', [7, 6, 11, 12, 13], 12, true);
    player.animations.add('dash', [14, 15, 16, 17, 18], 12, true);

    //  Finally some stars to collect
    //stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    //stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    //for (var i = 0; i < 12; i++){
        //  Create a star inside of the 'stars' group
        //var star = stars.create(7 + Math.random() * 600, 0, 'star');

        //  Let gravity do its thing
        //star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        //star.body.bounce.y = 0.7 + Math.random() * 0.2;
    //}

    //  The score
    leftText = game.add.text(16, 16, '🗞 Left: 25', { fontSize: '32px', fill: '#000' });
    houseText = game.add.text(16, 48, '🏠 Houses: 10', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 350;
    game.camera.follow(player);

    pause_label = game.add.text(game.world.width - 100, 20, 'Pause', { fontSize: '32px', fill: '#000' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the pause button is pressed, we pause the game
        game.paused = true;
        menu = game.add.sprite(game.world.centerX, game.world.height-44, 'menuItems');
        menu.anchor.setTo(0.5, 0.5);
        //pause_label.hide();

      // And a label to illustrate which menu item was chosen. (This is not necessary)
      choiseLabel = game.add.text(game.world.centerX - 30, 20, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
      //choiseLabel.anchor.setTo(0.5, 0.5);
    });

      // Add a input listener that can help us return from being paused
        game.input.onDown.add(unpause, self);

        // And finally the method that handels the pause menu
    function unpause(event){
        // Only act if paused
        if(game.paused){
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
              pause_label.inputEnabled = true;

              // Unpause the game
              game.paused = false;
            }
        }
    };
  },

  update: function(){
    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    //game.physics.arcade.collide(stars, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    //game.physics.arcade.overlap(player, stars, collectStar, null, this);
    //game.physics.arcade.overlap(player, stars, collectStar, null, this);
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

var isOverlaping = false;
var score = 25;
var houses = 10;

function collectStar (player, star) {

    // Removes the star from the screen
    star.kill();

    //  Add and update the score
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
    let yPosistion = game.world.height - 64 - 30 - game.cache.getImage(buildings[rand]).height;
    console.log(buildings[rand]);
    currentBuilding = city.create(xPosition, yPosistion,buildings[rand]);
    game.physics.arcade.enable(currentBuilding);
    currentBuilding.body.velocity.x=-350;
  }
}
