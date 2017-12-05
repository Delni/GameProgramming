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
        <div class="columns">
          <div class="container column is-3">
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Main character running :</p>
                <p class="has-text-centered"><a href="../JS/assets/Player/player.gif"><img src="../JS/assets/Player/player.gif" alt="player"></a></p>
              </div>
            </article>
          </div>
          <div class="container column is-3">
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Main character jumping :</p>
                <p class="has-text-centered"><a href="../JS/assets/Player/player_jump.gif"><img src="../JS/assets/Player/player_jump.gif" alt="player"></a></p>
              </div>
            </article>
          </div>
          <div class="container column is-3">
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Main character dashing :</p>
                <p class="has-text-centered"><a href="../JS/assets/Player/player_dash.gif"><img src="../JS/assets/Player/player_dash.gif" alt="player"></a></p>
              </div>
            </article>
          </div>
        </div>
        <div class="columns">
          <div class="container column is-12">
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Full character's spritesheet :</p>
                <p class="has-text-centered"><a href="../JS/assets/Player/player_spritesheet.png"><img src="../JS/assets/Player/player_spritesheet.png" alt="player"></a></p>
              </div>
            </article>
          </div>
        </div>
        <div class="columns">
          <div class="container column is-6">
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Red House</p>
                <p class="has-text-centered"><a href="../JS/assets/Decor/Buildings/RedHouse.png"><img src="../JS/assets/Decor/Buildings/RedHouse.png" alt="redhouse"></a></p>
              </div>
            </article>
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Colonial House</p>
                <p class="has-text-centered"><a href="../JS/assets/Decor/Buildings/ColonialHouse.png"><img src="../JS/assets/Decor/Buildings/ColonialHouse.png" alt="colonialhouse"></a></p>
              </div>
            </article>
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Italiante House</p>
                <p class="has-text-centered"><a href="../JS/assets/Decor/Buildings/ItalianteHouse.png"><img src="../JS/assets/Decor/Buildings/ItalianteHouse.png" alt="italiantehouse"></a></p>
              </div>
            </article>
			<article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Mansarde House</p>
                <p class="has-text-centered"><a href="../JS/assets/Decor/Buildings/MansardeHouse.png"><img src="../JS/assets/Decor/Buildings/MansardeHouse.png" alt="mansardehouse"></a></p>
              </div>
            </article>
          </div>
          <div class="container column is-6">
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Buidling 1</p>
                <p class="has-text-centered"><a href="../JS/assets/Decor/Buildings/Building1.png"><img src="../JS/assets/Decor/Buildings/Building1.png" alt="building1"></a></p>
              </div>
            </article>
            <div class="columns">
              <div class="container column">
                <article class="message has-background-alpha">
                  <div class="message-body">
                    <p class="title is-4">Bin</p>
                    <p class="has-text-centered"><a href="../JS/assets/Decor/Obstacles/Bin.png"><img src="../JS/assets/Decor/Obstacles/Bin.png" alt="Bin"></a></p>
                  </div>
                </article>
              </div>
              <div class="container column">
                <article class="message has-background-alpha">
                  <div class="message-body">
                    <p class="title is-4">Bench</p>
                    <p class="has-text-centered"><a href="../JS/assets/Decor/Obstacles/Banc.png"><img src="../JS/assets/Decor/Obstacles/Banc.png" alt="Banc"></a></p>
                  </div>
                </article>
              </div>
            </div>
            <article class="message  has-background-alpha">
              <div class="message-body">
                <p class="title is-4">Car</p>
                <p class="has-text-centered"><a href="../JS/assets/Decor/Obstacles/CarObstacle.png"><img src="../JS/assets/Decor/Obstacles/CarObstacle.png" alt="Car"></a></p>
              </div>
            </article>
          </div>
        </div>
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
