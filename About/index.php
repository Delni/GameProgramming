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
    <div class="hero-body columns" style="padding-bottom: 24px">
      <!-- <div class="container "> -->
        <span class="column is-1"></span>
        <div class="card column is-5">
          <div class="card-image">
            <figure class="image is-3by4">
              <img
                src="../assets/img/10thdoctor.png"
                alt="Placeholder image"
                style="-moz-transform: scaleX(-1);
                -o-transform: scaleX(-1);
                -webkit-transform: scaleX(-1);
                -ms-transform: scaleX(-1);
                transform: scaleX(-1);">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Nicolas Delauney</p>
                <p class="subtitle is-6">Tenant of the Design Street</p>
              </div>
            </div>
            <div class="content">
              <span class="tag is-dark">B00334575</span><br>
              Passionate about design, I created the buttons and the menus' layers.
              Then I used my knowledge of electron to adapt our game and make it downloadable.
              Finally we worked together with Claire for the game.
            </div>
          </div>
        </div>
        <div class="card column is-5">
          <div class="card-image">
            <figure class="image is-3by4">
              <img src="../assets/img/rosetyler.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Claire Lacroix</p>
                <p class="subtitle is-6"><abbr title="Tile Maker">Tyler</abbr> of the Development Society</p>
              </div>
            </div>
            <div class="content">
              <span class="tag is-dark">B00333613</span><br>
              Totally beginner with piskel I enjoyed creating some assets in it, such as the houses and obstacles.
              <br>Then the development of the game has been a cooperative work with Nicolas.
            </div>
          </div>
        </div>
        <span class="column is-1"></span>
      <!-- </div> -->
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
    $('#about').addClass('is-active');
  </script>
</body>

</html>
