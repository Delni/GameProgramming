var tutorial = function(){}

var case1 = true;
var case2 = false;
var case3 = false;

tutorial.prototype = {
  preload: function(){
    game.load.image('sky', '../JS/assets/Decor/parallax_backgound_pack/_11_background_1.png');
    game.load.image('trees', '../JS/assets/Decor/parallax_backgound_pack/_02_trees and bushes.png');
    game.load.image('distanttrees', '../JS/assets/Decor/parallax_backgound_pack/_03_distant_trees_1.png');
    game.load.image('bushes', '../JS/assets/Decor/parallax_backgound_pack/_04_bushes_0.png');
    game.load.image('hugeclouds', '../JS/assets/Decor/parallax_backgound_pack/_07_huge_clouds_1.png');
    game.load.image('clouds', '../JS/assets/Decor/parallax_backgound_pack/_08_clouds.png');
    game.load.spritesheet('inputs', '../JS/assets/Inputs/inputs.png', 159, 65);

  },

  create: function(){
    compteur = 1;
    hasdashed = hasthrow = false;
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A background with parrallax for our game
    game.add.sprite(0, 0, 'sky');
    background_lvl5 = game.add.sprite(0,0,'clouds');
    background_lvl4 = game.add.sprite(0,0,'hugeclouds');
    background_lvl3 = game.add.sprite(0,0,'bushes');
    background_lvl2 = game.add.sprite(0,0,'distanttrees');
    background_lvl1 = game.add.sprite(0,0,'trees');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    var imageRoad = game.add.sprite(0, game.world.height-50-44,'road');

    // Generate the obstacles
    city = game.add.group();
    thrownNewspaper = game.add.group();
    obstacleGroup = game.add.group();
    obstacleGroup.enableBody = true;
    box = obstacleGroup.create(game.world.centerX,game.world.height - 140,'box')
    box.anchor.setTo(0.5,0);
    box.body.immovable = true;


    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(0, game.world.height - 240, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties.
    player.enableBody = true;
    player.body.bounce.y = 0;
    player.body.gravity.y = 750;
    player.body.velocity.x = 350;
    player.body.collideWorldBounds = true;

    //  Our four animations, walking left and right, jumping and sliding.
    player.animations.add('right', [22, 23, 24, 25, 26, 27, 28, 29], 7, true);
    player.animations.add('up', [7, 6, 11, 12, 13], 7, false);
    player.animations.add('dash', [16, 17], 7, true);
    // UI
    inputs = game.add.sprite(game.world.centerX,100,'inputs');
    inputs.anchor.setTo(0.5,0.5);
    game.input.onDown.add(startGame, self);
    let text = game.add.bitmapText(game.world.centerX, game.world.height - 30, 'ParkLane','Click to continue',30);
    text.anchor.setTo(0.5,0);

  },

  update: function(){
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(thrownNewspaper, platforms);
    game.physics.arcade.collide(player, obstacleGroup);

    if(player.position.x+player.width >= 800){
      player.position.x = 0;
      player.position.y = game.world.height - 240;
      player.body.velocity.x = 350;
      player.play('right');
      compteur++;
    }

    switch (compteur) {
      case 1:
        {
          if(!case1){
            house.destroy();
            thrownNewspaper.children[0].destroy();
            box = obstacleGroup.create(game.world.centerX,game.world.height - 140,'box')
            box.anchor.setTo(0.5,0);
            box.body.immovable = true;
            case1 = true;
            inputs.frame = 0;
          }
          if(player.position.x >= 150 && !hasjumped){
            player.play('up');
            player.body.velocity.y = -550;
            inputs.frame = 1;
            setTimeout(() => {
              inputs.frame = 0;
            },250)
            hasjumped = true;
          } else if(player.position.y >= 385){
            player.play('right')
            hasjumped = false;
          }
        };
        break;
      case 2:
        {
          if(!case2){
            box.destroy();
            treeup = obstacleGroup.create(game.world.centerX,game.world.height - 400,'treeUp');
            treeup.anchor.x= 0.5;
            treedown = game.add.sprite(game.world.centerX,game.world.height - 230,'treeDown')
            treedown.anchor.x= 0.5;
            case2 = true;
            inputs.frame = 2;
          }
          if(player.position.x >= 50 && !hasdashed){
            player.play('dash');
            inputs.frame = 3;
            setTimeout(() => {
              inputs.frame = 2;
              player.play('right');
            },1500);
            player.position.y = game.world.height - 220;
            hasdashed = true;
          }
        };
        break;
      case 3:
        {
          if(!case3){
            treeup.destroy()
            treedown.destroy()
            inputs.frame = 4;
            house = city.create(game.world.centerX,game.world.height-100,'ItalianteHouse');
            house.anchor.setTo(0.5,1);
            case3 = true;
          }

          if(player.position.x >= 50 && !hasthrow){
            inputs.frame = 5;
            {
              let newspaper = thrownNewspaper.create(player.position.x,player.position.y,'newspaper');
              game.physics.arcade.enable(newspaper);
              newspaper.enableBody = true;
              newspaper.body.bounce.y = 0.25;
              newspaper.body.gravity.y = 550;
              newspaper.body.velocity = {x:500, y: -300};
              newspaper.body.acceleration.set(-350,0);
              newspaper.animations.add('flying',[0,1,2,3,4,5,6,7],7,false);
              newspaper.play('flying');
            }
            setTimeout(() => {
              inputs.frame = 4;
            },250);
            hasthrow = true;
          }
        };
        break;
      default:
        compteur = 1;
        case1 = false;
        case2 = false;
        case3 = false;
        hasdashed = false;
        hasthrow = false;
    }
  }
}
