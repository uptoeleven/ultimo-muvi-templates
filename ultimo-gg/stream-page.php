<?php require_once('includes/header.php'); ?>

<div class="spacer4 mb-2"></div>

<?php require_once('includes/stream-window.php'); ?>

<div class="d-lg-none">
    <div class="w-100 stream-banner"></div>
    <div class="spacer2"></div>
</div>

<div class="d-lg-none">
    <div class="container stream-profile stream-info">
        <h5 class="mb-3">Stream name here | other stream info</h5>
        <div class="d-inline-flex align-items-center">
            <div class="viewers-text font-xxs mr-3">1,205 viewers</div>
            <div class="d-inline-flex flex-between">
                <span class="tag label">Tag 1</span>
                <span class="tag label mx-1">Tag 1</span>
                <span class="tag label">Tag 1</span>
            </div>
        </div>
        <hr class="my-4 opacity-10">
        <div class="d-flex align-items-center text-uppercase">
            <img src="images/user-image.jpg" class="rounded-circle profile-img p-0 mr-3">
            <h6 class="stream-gamer-tag mr-3">Gamertag1</h6>
            <div class="d-flex align-items-center font-xxs mr-3">
                <div class="stats d-flex flex-center"></div>
                <div class="ml-2">Lvl 25</div>
            </div>
            <div class="live-badge mr-3">
                <img src="images/icons/streaming-red.svg">
                <span>Live</span>
            </div>
            <div class="font-xxs">34K followers</div>
        </div>
        <div class="d-flex align-items-center my-4">
            <div class=" d-flex flex-between font-xs mr-4">
                <div class="d-flex align-items-center">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <div class="ml-2">Follow | 34K</div>
                </div>
                <div class="d-flex align-items-center mx-3">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <div class="ml-2">Subscribe</div>
                </div>
                <div class="d-flex align-items-center">
                    <img src="images/icons/donate.svg">
                    <div class="ml-2">Donate</div>
                </div>
            </div>
            <div class="list-inline d-flex align-items-center m-0">
                <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                <li class="px-1"><a class="text-reset" href="#"><div class="discord-icon"></div></a></li>
            </div>
        </div>
        <div class="d-flex font-xxs">
            <div class="d-flex align-items-center like mr-3">
                <i class="fa fa-plus" aria-hidden="true"></i>
                <img class="mx-2" src="images/icons/flame.svg">
                <div class="font-bold">538</div>
            </div>
            <div class="d-flex align-items-center">
                <img src="images/icons/users.svg">
                <div class="viewers-text ml-2">1,205 viewers</div>
            </div>
        </div>
        <hr class="my-4 opacity-10">
    </div>
</div>

<div class="container d-lg-none">
  <hr class="my-0 opacity-10">
</div>

<div class="container my-5 text-uppercase">
    <div class="w-100 d-flex flex-wrap align-items-center">
        <div class="d-flex align-items-center mr-5 mb-4 mb-sm-0">
            <div class="profile-badge mr-4">
                <img class="profile-img rounded-circle img-responsive" src="images/user-image.jpg">
            </div>
            <div>
                <h3 class="stream-gamer-tag mb-2">Gamertag1</h3>
                <div class="font-xxs">Streaming time: 01:34:45</div>
            </div>
        </div>
        <div class="d-flex flex-column flex-lg-row align-items-center ml-auto ml-md-0 order-md-last">
            <div class="profile-stats d-flex flex-center mb-3 mb-lg-0 order-md-last">
                <div class="d-flex align-items-center like like-lg">
                    <img src="images/icons/flame.svg">
                    <h5>538</h5>
                </div>
            </div>
            <div class="profile-stats d-flex flex-center mr-lg-3 order-md-first">
                <h5>Profile</h5>
            </div>
        </div>
        <div class="flex-break d-md-none"></div>
        <div class="user-progress d-flex align-items-center flex-md-grow-1 mt-5 mt-md-0">
            <div class="stats d-flex flex-center mr-3"></div>
            <div class="user-progress-bar">
                <div class="d-flex flex-between font-xxs">
                    <div>xp</div>
                    <div>4590/6700</div>
                </div>
                <div class="progress shadow-none mb-0 my-2">
                    <div class="progress-bar shadow-none" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                    <span class="sr-only">60%</span>
                    </div>
                </div>
                <div class="d-flex flex-between stats-number">
                    <h4>24</h4>
                    <h4>25</h4>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
  <hr class="my-0 opacity-10">
</div>

<div class="container">
    <div class="spacer3"></div>
    <div class="d-flex flex-between">
        <h3 class="text-uppercase">Streamer clips</h3>
        <div class="play-icon"></div>
    </div>
    <?php include('includes/stream-grid-top-section.php'); ?>
    <div class="row d-flex d-md-block row-grid mb-4 pb-1 pb-md-0">
        <?php include('includes/stream-grid-simple.php'); ?>
        <?php include('includes/stream-grid-simple.php'); ?>
        <?php include('includes/stream-grid-simple.php'); ?>
        <?php include('includes/stream-grid-simple.php'); ?>
    </div>
    <?php include('includes/show-more.php'); ?>
</div>

<div class="container">
    <div class="spacer3"></div>
    <div class="d-flex flex-between">
        <h3 class="text-uppercase">More streams</h3>
        <div class="streaming-icon"></div>
    </div>
    <?php include('includes/stream-grid-top-section.php'); ?>
    <div class="row d-flex d-md-block row-grid mb-4 pb-1 pb-md-0">
        <?php include('includes/stream-grid.php'); ?>
        <?php include('includes/stream-grid.php'); ?>
        <?php include('includes/stream-grid.php'); ?>
        <?php include('includes/stream-grid.php'); ?>
    </div>
    <?php include('includes/show-more.php'); ?>
</div>

<div class="container">
    <div class="spacer3"></div>
    <h3 class="text-uppercase">Streamer Products</h3>
    <div class="spacer3"></div>
    <div class="row d-flex d-md-block row-grid mb-4 pb-1 pb-md-0">
        <?php include('includes/products.php'); ?>
        <?php include('includes/products.php'); ?>
        <?php include('includes/products.php'); ?>
        <?php include('includes/products.php'); ?>
    </div>
    <?php include('includes/show-more.php'); ?>
</div>

<div class="spacer4"></div>

<?php require_once('includes/footer.php'); ?>