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
      <div class="container">
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
        <p class="title">Overview</p>
        <p>
          Evolving in a city in the 1920’s, a newspaper’s carrier must deliver a certain amount of newspapers
          as fast as possible in the mailboxes in the street. Doing so, the player must avoid different obstacles
          such as cars, trash bins, ... The player would continuously run through the game until an obstacle stops
          the character.
          During the game, the character could jump, stop, slide and throw newspapers.
          We’ve also been thinking about making different levels of difficulty for the game.
         </p>
         <hr>
         <p class="subtitle">Website completion</p>
         <p>
           At first we’ve determined the main purposes and goals we wished to get from our web site. Then we’ve
            agreed on the website’s architecture and its universe. We’ve tried to determine the design on our
            pages by choosing the color palette with colormind.io and by working on the layouts. In the same time
            we’ve written the content of the different pages. Then we started creating the website itself and
            coding it according to the website architecture that was previously decided.
          </p>
          <hr>
          <p class="subtitle">What has been learnt so far...</p>
          <p>
            So far we have been able to use our skills in HTML, PHP and CSS to build our web site. Moreover we
            familiarised ourselves with Phaser by following
            <a class="has-text-info" href="http://phaser.io/tutorials/making-your-first-phaser-game">some tutorials</a>.
            We also learnt valuable skills on how to create / modify spritesheets.
          </p>
          <hr>
          <p class="subtitle">What are the difficulties encontered...</p>
          <p>
            We’ve begun to apprehend the universe we wanted for our game so we’ve tried to design some elements
            such as the characters. The main issue is to find assets, or create them, in a style that fit our project.
          </p>
          <hr>
          <p class="subtitle">What are the next steps...</p>
          <ul>
            <li><input type="checkbox" class="checkbox"> We need to find the title for our game.</li>
            <li><input type="checkbox" class="checkbox"> The design of the streets, the buildings and the industrial furniture will be a big part of our work. </li>
            <li><input type="checkbox" class="checkbox"> Determine the gameplay and the different options the player will be able to choose upon.</li>
          </ul>
          <p>
             Of course learning how to use Phaser will be challenging at first but with practice and work we
             should be able to develop our ideas into a game.
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
