{include file='views/layouts/header.html'}

<div class="spacer4 mb-2"></div>

<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <div class="row no-gutter stream-window">
                <div class="col-xs-12 col-lg-9">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="stream-video position-relative">
                                <div class="position-absolute stream-mode d-none d-md-block">
                                    <div class="list-inline">
                                        <li><img src="images/icons/desktop.svg" alt=""></li>
                                        <li class="active"><img src="images/icons/theatre.svg" alt=""></li>
                                    </div>
                                </div>
                                <div class="position-absolute mobile-controls d-md-none">
                                    <div class="list-inline">
                                        <li><img src="images/icons/rewind.svg" alt=""></li>
                                        <li><img src="images/icons/play-btn.svg" alt=""></li>
                                        <li><img src="images/icons/forward.svg" alt=""></li>
                                        <li><img src="images/icons/volume.svg" alt=""></li>
                                    </div>
                                </div>
                                <div class="position-absolute controls">
                                    <div class="list-inline">
                                        <li class="d-none d-md-inline-block"><img src="images/icons/rewind.svg" alt=""></li>
                                        <li class="d-none d-md-inline-block"><img src="images/icons/play-btn.svg" alt=""></li>
                                        <li class="d-none d-md-inline-block"><img src="images/icons/forward.svg" alt=""></li>
                                        <li class="d-none d-md-inline-block"><img src="images/icons/volume.svg" alt=""></li>
                                        <li class="font-xxs">Streaming time: 01:34:45</li>
                                    </div>
                                </div>
                                <div class="position-absolute options">
                                    <div class="list-inline">
                                        <li><img src="images/icons/play.svg" alt=""></li>
                                        <li><img src="images/icons/menu/settings.svg" alt=""></li>
                                        <li><img src="images/icons/full-screen.svg" alt=""></li>
                                    </div>
                                </div>
                                <div id="stream-video" class="embed-responsive embed-responsive-16by9">
                                    <img src="images/stream-video.jpg" class="image-fill">
                                </div>
                            </div>
                            <div class="stream-info d-none d-lg-flex flex-between text-uppercase">
                                <h6>Stream name here | other stream info</h6>
                                <div class="stream-cat font-xxs">Stream category</div>
                                <div class="d-flex flex-between">
                                <span class="tag label">Tag 1</span>
                                <span class="tag label">Tag 1</span>
                                <span class="tag label">Tag 1</span>
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
                                <div class="list-inline d-flex align-items-center m-0">
                                <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                <li class="px-1"><a class="text-reset" href="#"><img class="mb-1" src="images/icons/discord.svg"></a></li>
                                </div>
                            </div>
                            <div class="row no-gutter d-none stream-profile d-lg-flex align-items-center">
                                <div class="col-xs-12 col-sm-8 d-flex align-items-center text-uppercase">
                                    <img src="images/user-image.jpg" class="rounded-circle profile-img p-0 mr-3">
                                    <h6 class="stream-gamer-tag mr-3">Gamertag1</h6>
                                    <div class="d-flex align-items-center font-xxs mr-3">
                                        <div class="stats d-flex flex-center">
                                            <img src="images/icons/stats.svg">
                                        </div>
                                        <div class="ml-2">Lvl 25</div>
                                    </div>
                                    <div class="live-badge mr-3">
                                        <img src="images/icons/streaming-red.svg">
                                        <span>Live</span>
                                    </div>
                                    <div class="font-xxs">34K followers</div>
                                </div>
                                <div class="col-xs-12 col-sm-3 d-flex flex-between font-xs ml-auto">
                                    <div class="d-flex align-items-center">
                                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                                        <div class="ml-2">Follow | 34K</div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <div class="ml-2">Subscribe</div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <img src="images/icons/donate.svg">
                                    <div class="ml-2">Donate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-lg-3 d-none d-xl-block">
                    <div class="stream-chat">
                        <div class="users d-flex flex-center py-2">
                            <img src="images/icons/users.svg">
                            <div class="font-xxs ml-2">1,205</div>
                        </div>
                        <div class="chat-box pr-3 m-3 overflow-auto">
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                            {include file='views/layouts/chat.html'}
                        </div>
                    </div>
                    <div class="stream-chat-message font-xxs p-3">
                        <div class="form-inline d-flex justify-content-between mb-2">
                            <div class="form-group mb-0">
                                <input type="message" class="form-control" id="message" placeholder="Your message">
                            </div>
                            <button type="submit" class="btn text-reset">Send</button>
                        </div>
                        <div class="d-flex">
                            <div class="chat-img d-flex flex-center mr-2">
                                <img src="images/icons/chat.svg">
                            </div>
                            <div class="d-flex flex-between flex-grow-1">
                                <div class="font-xxs">1</div>
                                <div class="progress w-100 shadow-none mb-0 my-2">
                                    <div class="progress-bar shadow-none" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">
                                    <span class="sr-only">50%</span>
                                    </div>
                                </div>
                                <div class="font-xxs">2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

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
                <span class="tag label">Tag 1</span>
                <span class="tag label">Tag 1</span>
            </div>
        </div>
        <hr class="my-4 opacity-10">
        <div class="d-flex align-items-center text-uppercase">
            <img src="images/user-image.jpg" class="rounded-circle profile-img p-0 mr-3">
            <h6 class="stream-gamer-tag mr-3">Gamertag1</h6>
            <div class="d-flex align-items-center font-xxs mr-3">
                <div class="stats d-flex flex-center">
                    <img src="images/icons/stats.svg">
                </div>
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
                <li class="px-1"><a class="text-reset" href="#"><img class="mb-1" src="images/icons/discord.svg"></a></li>
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

<div class="container">
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
            <div class="stats d-flex flex-center mr-3">
                <img src="images/icons/stats.svg">
            </div>
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
        <img src="images/icons/play.svg">
    </div>
    {include file='views/layouts/stream-grid-top-section.html'}
    <div class="row d-flex d-md-block row-grid mb-4 pb-1 pb-md-0">
        {include file='views/layouts/stream-grid-simple.html'}
        {include file='views/layouts/stream-grid-simple.html'}
        {include file='views/layouts/stream-grid-simple.html'}
        {include file='views/layouts/stream-grid-simple.html'}
    </div>
    {include file='views/layouts/show-more.html'}
</div>

<div class="container">
    <div class="spacer3"></div>
    <div class="d-flex flex-between">
        <h3 class="text-uppercase">More streams</h3>
        <div class="streaming-icon"></div>
    </div>
    {include file='views/layouts/stream-grid-top-section.html'}
    <div class="row d-flex d-md-block row-grid mb-4 pb-1 pb-md-0">
        {include file='views/layouts/stream-grid.html'}
        {include file='views/layouts/stream-grid.html'}
        {include file='views/layouts/stream-grid.html'}
        {include file='views/layouts/stream-grid.html'}
    </div>
    {include file='views/layouts/show-more.html'}
</div>

<div class="container">
    <div class="spacer3"></div>
    <h3 class="text-uppercase">Streamer Products</h3>
    <div class="spacer3"></div>
    <div class="row d-flex d-md-block row-grid mb-4 pb-1 pb-md-0">
        {include file='views/layouts/products.html'}
        {include file='views/layouts/products.html'}
        {include file='views/layouts/products.html'}
        {include file='views/layouts/products.html'}
    </div>
    {include file='views/layouts/show-more.html'}
</div>

<div class="spacer4"></div>

{include file='views/layouts/footer.html'}