<!DOCTYPE html>
<html>

<head>
  <?php include 'PHP/head.php' ?>
  <!--  My CSS -->
  <link rel="stylesheet" href="./assets/master.css">
</head>

<body>
  <section class="hero is-bold is-warning is-fullheight">
    <div class="hero-head">
      <?php include 'PHP/menu.php' ?>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">

          <div id="mainTitle" class="column is-6">
            <div>
              <h1 class="title is-1">Welcome to XXX</h1>
              <h2 class="subtitle">UWS's Project</h2>
              <a class="button is-dark is-large title has-text-light" id="playbutton" href="/GameProgramming/Play/">Go to game !</a>
            </div>
          </div>
          <div class="column is-6 has-text-centered image">
            <img src="JS/assets/player.gif" alt="Ready Player One ?" style="max-width: 37vw; position:relative;top:-10%">
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

  <?php include 'PHP/scripts.php' ?>
  <script type="text/javascript">
    $('#home').addClass('is-active');
  </script>
</body>

</html>
