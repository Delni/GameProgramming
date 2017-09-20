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
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Nicolas Delauney</p>
                <p class="subtitle is-6">Tenant of the Design Street</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#" class="has-text-primary">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Claire Lacroix</p>
                <p class="subtitle is-6"><abbr title="Tile Maker">Tyler</abbr> of the Development Society</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#" class="has-text-primary">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
</body>

</html>
