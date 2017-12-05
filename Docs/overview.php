<!DOCTYPE html>
<html>

<head>
  <?php include '../PHP/head.php' ?>
  <!--  My CSS -->
  <link rel="stylesheet" href="../assets/master.css">
</head>

<body>
  <section class="hero is-bold is-warning is-fullheight">
    <div class="hero-head">
      <?php include '../PHP/menu.php' ?>
    </div>
    <div class="hero-body">
      <div class="container content">
        <strong>Group Members:</strong>
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Nicolas Delauney</span>
              <span class="tag is-info">B00334575</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Claire Lacroix</span>
              <span class="tag is-info">B00333613</span>
            </div>
          </div>
        </div>
        <p class="title is-1">Overview</p>
        <p>
          Evolving in a city in the late 1920’s, a newspaper’s carrier must deliver a certain amount of newspapers
          as fast as possible in the mailboxes in the street. Doing so, the player must avoid different obstacles
          such as cars, trash bins, ... The player would continuously run through the game until an obstacle stops
          the character.
          During the game, the character could jump, slide and throw newspapers.
          As the player go through levels, difficulty will increase : more obstacles, more houses, less newspapers.
         </p>
         <p class="subtitle is-5">Inspirations</p>
         <p>You can see <em>News Runner</em> as the spiritual little brother of <em>PaperBoy</em> (see <a href="./sources.php" class="has-text-info">Sources</a> for more info),
           with some improvements in the diversity of the obstacles and the houses, but with an other gameplay:
            cabinet perspective game vs 2D flat runner.
         </p>
         <hr>
         <p class="title is-2">Website completion</p>
         <p>
           At first we’ve determined the main purposes and goals we wished to get from our web site. Then we’ve
            agreed on the website’s architecture and its universe (the late 1920's). We’ve tried to determine the design on our
            pages by choosing the color palette with <a href="colormind.io" class="has-text-info">colormind.io</a> and by working on the layouts. In the same time
            we’ve written the content of the different pages. Then we started creating the website itself and
            coding it according to the website architecture that was previously decided. We also choose fonts that suited our universe.
          </p>
          <hr>
          <p class="title is-2">What has been learnt so far...</p>
          <p>
            So far we have been able to use our skills in HTML, PHP and CSS to build our web site. Moreover we
            familiarised ourselves with Phaser by following
            <a class="has-text-info" href="http://phaser.io/tutorials/making-your-first-phaser-game">some tutorials</a>.
            We also learnt valuable skills on how to create / modify spritesheets.
          </p>
          <hr>
          <p class="title is-2">What were the difficulties encountered...</p>
          <p>
            Main issue was to find assets, or create them, in a style that fit our project. Hopefully, we have found quite quickly the player,
            setting a PixelArt style easy to reproduce for static or simpliest assets.
            We also encountered some difficulties with the gameplay. As we used Phaser's <em>Arcade</em> engine,
            the hitboxes are rectangular and sometimes collide far from what you would expect. A solution would have been to switch to P2 engine.
          </p>
          <hr>
          <p class="title is-2">What were the milestones...</p>

            <p><input type="checkbox" class="checkbox" checked> Find the title for our game.</p>
            <p><input type="checkbox" class="checkbox" checked> Adapt the assets to fit our game.</p>
            <p><input type="checkbox" class="checkbox" checked> Design the streets, the buildings and the industrial furniture</p>
            <p><input type="checkbox" class="checkbox" checked> Design the obstacles</p>
            <p><input type="checkbox" class="checkbox" checked> Determine the gameplay and the different options the player will be able to choose upon.</p>
            <p><input type="checkbox" class="checkbox" checked> Elaborate a system to make the levels harder and harder, and different from each other</p>
            <p><input type="checkbox" class="checkbox"> Improve hitbox with P2 engine</p>
            <p><input type="checkbox" class="checkbox"> More assets, more diversity !</p>
          <hr>
          <p>
             Of course learning how to use Phaser was very challenging at first but with practice and work we
             were able to develop our ideas into a game. We are now proud of our runner.
          </p>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container is-marginless">
          <ul>
            <li class=""><a>HTML5 &amp; Javascript Game Programming</a></li>
            <li><a>N.Delauney &amp; C.Lacroix</a></li>
            <li><a>&copy; 2017</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  <?php include '../PHP/scripts.php' ?>
  <script type="text/javascript">
    $('#docs').addClass('is-active');
  </script>
</body>

</html>
