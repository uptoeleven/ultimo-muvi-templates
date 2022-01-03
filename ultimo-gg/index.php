<?php require_once('includes/header.php'); ?>

<div class="w-100 home-banner"></div>

<div class="search-bar w-100 py-3 d-none d-md-block">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                <div class="form-group mb-0">
                    <input type="email" class="form-control" id="searchbar" placeholder="Search">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container position-relative px-0 px-xl-3">
    <div class="gamer-nav position-absolute d-flex flex-center">
    <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="gamer-slider-container my-5 py-4">
        <div class="gamer-slider owl-carousel text-uppercase">
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
            <?php include('includes/gamer-slider.php'); ?>
        </div>
    </div>
</div>

<div class="container">
    <h3 class="text-uppercase">Featured</h3>
    <div class="spacer1"></div>
    <div class="featured-slider owl-carousel text-uppercase">
        <?php include('includes/featured-slider.php'); ?>
        <?php include('includes/featured-slider.php'); ?>
        <?php include('includes/featured-slider.php'); ?>
        <?php include('includes/featured-slider.php'); ?>
        <?php include('includes/featured-slider.php'); ?>
        <?php include('includes/featured-slider.php'); ?>
        <?php include('includes/featured-slider.php'); ?>
    </div>
</div>

<div class="spacer6"></div>

<div class="container">
    <hr class="my-0 opacity-10">
</div>

<div class="container">
    <div class="spacer3"></div>
    <div class="d-flex flex-between">
        <h3 class="text-uppercase">Stream category</h3>
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
    <div class="d-flex flex-between">
        <h3 class="text-uppercase">Stream category</h3>
        <div class="streaming-icon"></div>
    </div>
    <?php include('includes/stream-grid-top-section.php'); ?>
    <div class="row d-flex d-md-block row-grid row-grid-tall mb-4 pb-1 pb-md-0">
        <?php include('includes/stream-grid-tall.php'); ?>
        <?php include('includes/stream-grid-tall.php'); ?>
        <?php include('includes/stream-grid-tall.php'); ?>
        <?php include('includes/stream-grid-tall.php'); ?>
        <?php include('includes/stream-grid-tall.php'); ?>
        <?php include('includes/stream-grid-tall.php'); ?>
    </div>
    <?php include('includes/show-more.php'); ?>
</div>

<div class="container">
    <div class="spacer3"></div>
    <div class="d-flex flex-between">
        <h3 class="text-uppercase">Stream category</h3>
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

<div class="spacer5"></div>

<?php require_once('includes/footer.php'); ?>