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
        <p class="title">You are not keen on online web-embedded game ?</p>
        <p class="Subtitle">...want to try our downloadable game? Pack with ♥ and <a href="https://electron.atom.io" class="has-text-danger" target="_blank">Electron</a></p>
        <p>
          <span class="icon is-large"><i class="fa fa-apple fa-2x"></i></span>
          Ready to deploy .dmg for Mac : <a href="https://drive.google.com/open?id=1W1bKPDIrrnEca5Ip9ycX7kwgl20HrRA9" class="is-link has-text-info">newsrunner.dmg</a>
        </p>
        <p>
          <span class="icon is-large"><i class="fa fa-windows fa-2x"></i></span>
          Portable for Windows : <a href="https://drive.google.com/open?id=1PxuNhgHLIWl0_m6gnCdjda3xoD8rneVy" class="is-link has-text-info">newsrunner.exe</a>
        </p>
        <p><em>Note : the links leads to a GoogleDrive deposit, since Moodle crashed on uploading because of the weight of the executables (~350Mb each). <br> Please see "Details" as a proof that those files where done in time.</em></p>
        <div class="has-text-centered">
          <img src="../assets/img/screenshot.png" alt="" width="475px">
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
    $('#download').addClass('is-active');
  </script>
</body>

</html>
