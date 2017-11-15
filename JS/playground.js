window.PhaserGlobal = { disableWebAudio: true };

var playground = function(){};

// Global definitions for later use
var isOverlaping = false;
var ended = false;
var throwing = false;
var score, left, houses, delivered;
var currentLvl;
var isMute;
isMute = false;
const musics = [
  'suzyMusic',
  'bootySwingMusic',
  'dirtyStopOutMusic',
  'dragonsMusic',
  'geraldinesRoutineMusic'
]

playground.prototype = {
  preload: function() {
    // Decor
    game.load.image('sky', '../JS/assets/Decor/parallax_backgound_pack/_11_background_'+currentLvl+'.png');
    game.load.image('trees', '../JS/assets/Decor/parallax_backgound_pack/_02_trees and bushes.png');
    game.load.image('distanttrees', '../JS/assets/Decor/parallax_backgound_pack/_03_distant_trees_'+(currentLvl+1)%2+'.png');
    game.load.image('bushes', '../JS/assets/Decor/parallax_backgound_pack/_04_bushes_'+(currentLvl+1)%2+'.png');
    game.load.image('hugeclouds', '../JS/assets/Decor/parallax_backgound_pack/_07_huge_clouds_'+(currentLvl+1)%2+'.png');
    game.load.image('clouds', '../JS/assets/Decor/parallax_backgound_pack/_08_clouds.png');
    console.log('Game is loaded');
  },

  init: function(lvl){
    left = 12*lvl;
    houses = 10*lvl;
    obstacles = 2*lvl;
    currentLvl = lvl;
  },

  create: function(){
    ended = false;
    delivered = 0;
    if (!isMute) {
      music = game.add.audio(musics[(currentLvl-1)%5]);
      music.fadeIn(1000);
    }
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A background with parrallax for our game
    game.add.sprite(0, 0, 'sky');
    background_lvl5 = game.add.group();
    background_lvl4 = game.add.group();
    background_lvl3 = game.add.group();
    background_lvl2 = game.add.group();
    background_lvl1 = game.add.group();

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    roadGroup = game.add.group();
    roadGroup.enableBody = true;
    var imageRoad = roadGroup.create(0, game.world.height-50-44,'road');
    upRoadGroup = game.add.group();
    upRoadGroup.enableBody = true;

    // Generate the city
    city = game.add.group();
    city.enableBody = true;
    let coords = generateCity(houses);

    // Generate the obstacles
    obstacleGroup = game.add.group();
    obstacleGroup.enableBody = true;
    obstacleSide = game.add.group();
    obstacleSide.enableBody = true;
    let obstacleCoords = generateObstacleGroup(houses);

    // End of the level : the runner enter a specific building...
    var lastBuildingLayer = game.add.group()
    var lastBuilding = lastBuildingLayer.create(coords[0], coords[1],'lastBuilding_back');
    game.physics.arcade.enable(lastBuilding);
    lastBuilding.body.velocity.x=-350;
    lastBuilding.body.acceleration.set(-10,0);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // Add the layer for the thrown newspapers:
    thrownNewspaper = game.add.group();

    // The player and its settings
    player = game.add.sprite(138, game.world.height - 240, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties.
    player.enableBody = true;
    player.body.bounce.y = 0;
    player.body.gravity.y = 550;
    player.body.collideWorldBounds = true;

    //  Our four animations, walking left and right, jumping and sliding.
    player.animations.add('left', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('right', [22, 23, 24, 25, 26, 27, 28, 29], 12, true);
    player.animations.add('up', [7, 6, 11, 12, 13], 12, false);
    player.animations.add('dash', [16, 17], 12, true);

    //  The labels
    leftText = game.add.text(16, 16, '🗞 Left: '+left, { fontSize: '32px', fill: '#000' });
    houseText = game.add.text(16, 48, '🏠 Houses: '+houses, { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(player);

    // UI
    // Extra layer for 'pause' menu
    midlayer = game.add.group();
    // The runner enters in : one part of this assets comes in front of the rest
    lastBuildingF = midlayer.create(coords[0], coords[1],'lastBuilding_front');
    game.physics.arcade.enable(lastBuildingF);
    lastBuildingF.body.velocity.x=-350;
    lastBuildingF.body.acceleration.set(-10,0);

    // One button to trigger the pause
    pause_group = game.add.group();
    pause_button = game.make.button(game.world.width-69,5,'buttonPause',pause,this,2,1,0);
    pause_button.scale.setTo(0.5,0.5);
    pause_group.add(pause_button);

    // Add a input listener that can help us return from being paused
    game.input.onDown.add(unpause, self);
    game.camera.flash(0x000000, 1000, false);
  },

  update: function(){
    //  Collide the player and the newspaper with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(thrownNewspaper, platforms);

    // Handle the status of each newspaper
    checkNewsPaperStatus();

    //Test if the runner has arrived the end of the run
    if (!ended && game.physics.arcade.overlap(lastBuildingF,player)) {
      ended = true,
      goToWin();
    }

    //Reset runner gravity :
    player.body.gravity.y = 550;

    //  Checks to see if the player overlaps with any of the buildings
    if (!(game.physics.arcade.overlap(player, city,(p, c) => {
      if (!isOverlaping && c.key !== 'CrossingRoad') {
        updateHousesLeft();
      }
      isOverlaping = true;
    }))) {
      // If they are overlaping, Phaser should enter the arrow function. If not, it enter in the if
      // so we can reset the Overlaping state.
      isOverlaping = false;
    }

    // If the player run through any obstacle, the game is over.
    if (game.physics.arcade.collide(player, obstacleGroup)){
      music.stop();
      game.state.start('Lose');
    }

    // Animations manager
    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && player.body.position.y >= 385) {
      //  Allow the player to jump if they are touching the ground.
      player.body.velocity.y = -550;
      player.animations.play('up');
    } else if(game.input.keyboard.isDown(Phaser.Keyboard.X)){
      if (player.body.position.y >= 385) {
        // Allow the player to dash if they are touching the ground.
        player.animations.play('dash')
        player.body.y = 395;
      } else {
        // Quick down
        player.body.gravity.y = 2000;
      }
    } else if (player.body.position.y >= 385) {
      // If the player is not jumping nor dashing, make it run :
      player.animations.play('right');
      //Reset runner position:
      player.body.y = 386
    } else {
      //Default : stand still
      player.frame = 13;
    }

    // Allow player to throw newspaper (two tests: AZERTY or QWERTY)
    if(!throwing && (game.input.keyboard.isDown(Phaser.Keyboard.W) || game.input.keyboard.isDown(Phaser.Keyboard.Z))){
      createNewsPaper();
      throwing = true;
    } else if (!(game.input.keyboard.isDown(Phaser.Keyboard.W) || game.input.keyboard.isDown(Phaser.Keyboard.Z))){
      throwing = false;
    }
  }
}

function createNewsPaper() {
  if (left>0) {
    let newspaper = thrownNewspaper.create(player.position.x,player.position.y,'newspaper');
    game.physics.arcade.enable(newspaper);
    newspaper.enableBody = true;
    newspaper.body.bounce.y = 0.25;
    newspaper.body.gravity.y = 550;
    newspaper.body.velocity = {x:400*200/-city.children[0].body.velocity.x, y: -300};
    newspaper.body.acceleration.set(-250,0);
    newspaper.animations.add('flying',[0,1,2,3,4,5,6,7],7,false);
    newspaper.play('flying');
    left --;
    leftText.text = '🗞 Left: ' + left;
  }
}

function checkNewsPaperStatus(){
  for (var i = 0; i < thrownNewspaper.children.length; i++) {
    if (thrownNewspaper.children[i].body.touching.down) {
      thrownNewspaper.children[i].body.velocity.x = city.children[0].body.velocity.x
      for (var j = 0; j < city.children.length; j++) {
        if (city.children[j].key !== 'CrossingRoad' &&
            !city.children[j].isDelivered &&
            game.physics.arcade.overlap(thrownNewspaper.children[i],city.children[j])) {
          city.children[j].isDelivered = true;
          if (!isMute) {
            game.add.audio('chaching').play().volume = 0.42;
          }
        }
      }
    }
  }
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
    'RedHouse',
    'CrossingRoad'
  ];
  let currentBuilding, back1, back2, back3, back4, back5;
  for (var i = 0; i < nbBuildings; i++) {
    let rand = Math.round(Math.random() * (buildings.length-1));
    let xPosition = game.world.width * (i+1) + Math.round(Math.random() * (400)); //px margin between each
    let yPosition = game.world.height - 64 - 30 - game.cache.getImage(buildings[rand]).height;
    currentBuilding = city.create(xPosition, yPosition,buildings[rand]);
    game.physics.arcade.enable(currentBuilding);
    currentBuilding.body.velocity.x=-350;
    currentBuilding.body.acceleration.set(-10,0);
    // For later, to check if the newspaper has arrived this house
    currentBuilding.isDelivered = false;
    // Add background
    parrallaxBackground(i);
    if (city.children[i].key == 'CrossingRoad'){
      putPedestrianWays(i);
    }
  }
  let xPosition = game.world.width * (i+1) + Math.round(Math.random() * (400)); //px margin between each
  let yPosition = game.world.height+64 - game.cache.getImage('lastBuilding_back').height;
  return [xPosition,yPosition];
}

function putPedestrianWays(buildingNumber){
      let xPosition = city.children[buildingNumber].body.x;
      let currentPedway = roadGroup.create(xPosition, game.world.height - 64, 'roadDownCorner');
      game.physics.arcade.enable(currentPedway);
      currentPedway.body.velocity.x=-350;
      currentPedway.body.acceleration.set(-10,0);
      let othercurrentPedWay = upRoadGroup.create(xPosition, game.world.height-50-44,'roadUpCorner');
      game.physics.arcade.enable(othercurrentPedWay);
      othercurrentPedWay.body.velocity.x=-350;
      othercurrentPedWay.body.acceleration.set(-10,0);
}

function parrallaxBackground(token) {
  const currentLayer = [
    [background_lvl1,'trees',-300],
    [background_lvl2,'distanttrees',-250],
    [background_lvl3,'bushes',-200],
    [background_lvl4,'hugeclouds',-100],
    [background_lvl5,'clouds',-174]
  ];
  let tmp;
  for (var i = 0; i < currentLayer.length; i++) {
    tmp = currentLayer[i][0].create(game.world.width * token,0,currentLayer[i][1]);
    game.physics.arcade.enable(tmp);
    tmp.body.velocity.x=currentLayer[i][2];
  }
}

function generateObstacleGroup(nbBuildings){
  var obstacles = [
    'box',
    'bin',
    // 'lampPost',
    'metroUp'
  ];
  let currentObstacle;
  let xPosition = 0;
  for (var i = 0; i < nbBuildings * (1 - 0.4); i++) {
    let rand = Math.round(Math.random() * (obstacles.length-1));
    var a;
    a = Math.round(Math.random() * (800 - 500)) + 500;
    let yPosition;
    //let xPosition = game.world.width * (i+1) + a; //px margin between each
    //xPosition = xPosition + Math.round(Math.random() * (city.children[nbBuildings - 1].x - xPosition)) + a;
    sup = (city.children[nbBuildings - 1].x / (nbBuildings * (1 - 0.4)));
    if (i===0) {
      xPosition = Math.round(Math.random() * (sup)) + 400;
    } else {
      xPosition = Math.round(Math.random() * (sup)) + sup*i;
    }
    if (obstacles[rand] == 'metroUp'){
      yPosition = game.world.height-212 - game.cache.getImage(obstacles[rand]).height;
      currentObstacle = obstacleGroup.create(xPosition, yPosition,obstacles[rand]);
      game.physics.arcade.enable(currentObstacle);
      currentObstacle.body.velocity.x=-450;
      currentObstacle.body.acceleration.set(-10,0);
      obstaclesBottomElements(i);
      // //let yPositionSide = game.world.height-70 - game.cache.getImage('metroLeftSide').height;
      // currentObstacle = obstacleGroup.create(xPosition, yPositionSide,'metroLeftSide');
      // game.physics.arcade.enable(currentObstacle);
      // currentObstacle.body.velocity.x=-450;
      // currentObstacle.body.acceleration.set(-10,0);
      // let xPositionSide = game.world.width * (i+1) + a + 70; //px margin between each
      // yPositionSide = game.world.height-70 - game.cache.getImage('metroRightSide').height;
      // currentObstacle = obstacleGroup.create(xPositionSide, yPositionSide,'metroRightSide');
      // game.physics.arcade.enable(currentObstacle);
      // currentObstacle.body.velocity.x=-450;
      //currentObstacle.body.acceleration.set(-10,0);
    }
    else {
       yPosition = game.world.height-50 - game.cache.getImage(obstacles[rand]).height;
       currentObstacle = obstacleGroup.create(xPosition, yPosition,obstacles[rand]);
       game.physics.arcade.enable(currentObstacle);
       currentObstacle.body.velocity.x=-450;
       currentObstacle.body.acceleration.set(-10,0);
    }
    // currentObstacle = obstacleGroup.create(xPosition, yPosition,obstacles[rand]);
    // game.physics.arcade.enable(currentObstacle);
    // currentObstacle.body.velocity.x=-450;
    // currentObstacle.body.acceleration.set(-10,0);
  }
}

function obstaclesBottomElements(numberObstacles){
      let xPositionLeftSide = obstacleGroup.children[numberObstacles].x;
      //let yPosition = game.world.height - 215 - game.cache.getImage('metroUp').height;
      let yPositionLeftSide = game.world.height-70 - game.cache.getImage('metroLeftSide').height;
      //currentObstacle = obstacleGroup.create(xPosition, yPositionSide,'metroLeftSide');
      let currentObstacle = obstacleSide.create(xPositionLeftSide, yPositionLeftSide,'metroLeftSide');
      game.physics.arcade.enable(currentObstacle);
      currentObstacle.body.velocity.x=-450;
      currentObstacle.body.acceleration.set(-10,0);
      let xPositionRightSide = xPositionLeftSide + 70; //px margin between each
      let yPositionRightSide = game.world.height-70 - game.cache.getImage('metroRightSide').height;
      let currentOtherObstacle = obstacleSide.create(xPositionRightSide, yPositionRightSide,'metroRightSide');
      game.physics.arcade.enable(currentOtherObstacle);
      currentOtherObstacle.body.velocity.x=-450;
      currentOtherObstacle.body.acceleration.set(-10,0);
}

// Ancienne fonction
// function obstaclesBottomElements(nbBuildings){
//   for (var i = 0; i < nbBuildings * (1 - 0.4); i++) {
//     if (obstacleGroup.children[i].key == 'metroUp'){
//       let xPosition = obstacleGroup.children[i].x;
//       //let yPosition = game.world.height - 215 - game.cache.getImage('metroUp').height;
//       let yPositionSide = game.world.height-70 - game.cache.getImage('metroLeftSide').height;
//       //currentObstacle = obstacleGroup.create(xPosition, yPositionSide,'metroLeftSide');
//       let currentObstacle = obstacleSide.create(xPosition, yPositionSide,'metroLeftSide');
//       game.physics.arcade.enable(currentObstacle);
//       currentObstacle.body.velocity.x=-450;
//       currentObstacle.body.acceleration.set(-10,0);
//       let xPositionSide = xPosition + 70; //px margin between each
//       yPositionSide = game.world.height-70 - game.cache.getImage('metroRightSide').height;
//       currentObstacle = obstacleSide.create(xPositionSide, yPositionSide,'metroRightSide');
//       game.physics.arcade.enable(currentObstacle);
//       currentObstacle.body.velocity.x=-450;
//       currentObstacle.body.acceleration.set(-10,0);
//     }
//   }
// }

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
    let tmp;
    for (var i = 0; i < pause_buttons.length; i++) {
      if (i == 1 && isMute == true){
        tmp = game.make.button(
          210+ 80*i,
          game.world.height-90,
          pause_buttons[i].key,
          pause_buttons[i].action,
          this,
          8,
          6,
          7
        );
      }
      else {
        tmp = game.make.button(
          210+ 80*i,
          game.world.height-90,
          pause_buttons[i].key,
          pause_buttons[i].action,
          this,
          pause_buttons[i].frames[0],
          pause_buttons[i].frames[1],
          pause_buttons[i].frames[2]
        );
      };
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
    menu.children[1].setFrames(8,6,7);
    music.pause();
    isMute = true;
  } else {
    menu.children[1].setFrames(5,3,4);
    music.resume();
    isMute = false;
  }
}

function restartLvl(){
  music.stop();
  game.paused = false;
  game.state.start('Game',true,false,currentLvl);
}

function selectLvl(){
  music.stop();
  game.paused = false;
  game.state.start('LvlSelect');
}

function backToMenu(){
  music.stop();
  game.paused = false;
  game.state.start('Menu',true,false)
}

function goToWin(){
  setTimeout(() => {
    for (var i = 0; i < city.children.length; i++) {
      delivered = (city.children[i].isDelivered) ? delivered+1: delivered;
    }
    game.state.start('Win',true,false,delivered,left);
    music.pause();
  },3000)
  music.fadeOut(2000);
  game.camera.fade(0x000000, 2500);
}
