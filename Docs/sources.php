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
    <div class="hero-body has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="container column is-8">
            <article class="message is-dark">
              <div class="message-body">
                <p class="title">Birth of a Project</p>
                <p>The idea to place our game in the late 1920's came from the visit of the Scotland Street
                   School Museum, with many examples of Macintosh's work</p><hr>
                <img src="../assets/img/SSSM.jpg" alt="Scotland Street School Museam" class="image" style="margin:auto;margin-bottom : 0">
              </div>
            </article>
            <article class="message is-dark">
              <div class="message-body ">
                <p class="title">Color Palettes</p>
                <p>Here are some of the color palettes we tried first of all. You can try yourself on
                  <a href="http://colormind.io/" class="has-text-info" target="_blank">colormind.io</a><hr></p>
                  <img src="../assets/img/Palette1.png" alt="Palette1" class="image"><hr>
                  <img src="../assets/img/Palette2.png" alt="Palette2" class="image"><hr>
          				<img src="../assets/img/Palette3.png" alt="Palette3" class="image"><hr>
          				<img src="../assets/img/Palette4.png" alt="Palette4" class="image"><hr>
          				<img src="../assets/img/Palette5.png" alt="Palette5" class="image">
                </div>
              </article>
          </div>
          <div class="container column">
            <article class="message is-dark">
              <div class="message-body">
                <p class="title">External sources &amp; credits</p>
                <p>Here are the external assets we used on the website / game</p>
                <hr>
                <p class="subtitle">Web design:</p>
                <div class="content has-text-left">
                  <ul>
                    <li><a class="has-text-info" href="http://bulma.io">Bulma</a>, the CSS framework</li>
                    <li><a class="has-text-info" href="http://fontawesome.io">Font Awesome 4</a></li>
                    <li><a class="has-text-info" href="http://jquery.com">JQuery</a></li>

                  </ul>
                </div>
                <hr>
                <p class="subtitle">Game's assets:</p>
                <div class="content has-text-left">
                  <ul>
                    <li><a class="has-text-info" href="http://phaser.io">Phaser</a>, the game framework</li>
                    <li><a class="has-text-info" href="https://www.piskelapp.com/">Piskel</a></li>
                    <li>Character spritesheets by <a class="has-text-info" href="https://opengameart.org/content/hero-spritesheets-ars-notoria">Balmer</a> </li>
                  </ul>
                </div>
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
