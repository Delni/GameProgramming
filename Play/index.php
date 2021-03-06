<!DOCTYPE html>
<html>

<head>
  <?php include '../PHP/head.php' ?>
  <!--  My CSS -->
  <link rel="stylesheet" href="../assets/master.css">
  <script type="text/javascript" src="../assets/phaser.min.js"></script>
</head>

<body>
  <section class="hero is-bold is-warning is-fullheight">
    <div class="hero-head">
      <?php include '../PHP/menu.php' ?>
    </div>
    <div class="hero-body" style="padding-bottom: 24px">
      <div class="container">
        <div id="playground" class="has-text-centered">
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
    $('#play').addClass('is-active');
  </script>
  <!--  Toggle next line to change from first game to new architecture -->
  <script src="../JS/preload.js"></script>
  <script src="../JS/menu.js"></script>
  <script src="../JS/playground.js"></script>
  <script src="../JS/win.js"></script>
  <script src="../JS/lose.js"></script>
  <script src="../JS/helper.js"></script>
  <script src="../JS/explanations.js"></script>
  <script src="../JS/tutorial.js"></script>
  <script src="../JS/levels.js"></script>
  <script src="../JS/core.js"></script>

  <!-- <script src="../JS/game.js"></script> -->
</body>

</html>
