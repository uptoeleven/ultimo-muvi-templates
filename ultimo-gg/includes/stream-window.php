<div class="stream-window d-flex flex-wrap mx-auto container">
    <div class="stream-window-left">
        <div class="stream-video">
            <div id="stream-video" class="w-100">
                <div class="embed-responsive embed-responsive-16by9">
                    <img src="images/stream-video.jpg" class="image-fill">
                </div>
            </div>
            <div class="position-absolute fullscreen-mode-info w-100 p-3 p-lg-2">
                <div class="stream-info d-flex align-items-center text-uppercase border-0">
                    <h6 class="font-bold d-lg-none">Stream name here | other stream info</h6>
                    <h6 class="d-none d-lg-block">Stream name here | other stream info</h6>
                    <div class="stream-cat font-xxs mx-3 d-none d-lg-inline-block">Stream category</div>
                    <div class="d-none d-lg-flex flex-between">
                        <span class="tag label">Tag 1</span>
                        <span class="tag label mx-1">Tag 1</span>
                        <span class="tag label">Tag 1</span>
                    </div>
                </div>
                <div class="stream-profile d-none d-lg-flex align-items-center">
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
                <div class="stream-profile d-flex d-lg-none align-items-center">
                    <div class="stream-gamer-tag font-xxs mr-3">1,205 viewers</div>
                    <div class="d-flex flex-between">
                        <span class="tag label">Tag 1</span>
                        <span class="tag label mx-1">Tag 1</span>
                        <span class="tag label">Tag 1</span>
                    </div>
                    <div class="live-badge ml-3">
                        <img src="images/icons/streaming-red.svg">
                        <span>Live</span>
                    </div>
                </div>
            </div>
            <div class="position-absolute stream-mode d-none d-xl-block p-3 p-lg-2">
                <div class="list-inline">
                    <li id="desktop-mode" class="active"><button><img src="images/icons/desktop.svg" alt=""></button></li>
                    <li id="theatre-mode"><button><img src="images/icons/theatre.svg" alt=""></button></li>
                </div>
            </div>
            <div class="w-100 position-absolute mobile-controls d-lg-none text-center">
                <div class="list-inline">
                    <li class="px-3"><button><img src="images/icons/rewind.svg" alt=""></button></li>
                    <li class="px-3"><button><img src="images/icons/play-btn.svg" alt=""></button></li>
                    <li class="px-3"><button><img src="images/icons/forward.svg" alt=""></button></li>
                </div>
            </div>
            <div class="position-absolute controls p-3 p-lg-2">
                <div class="list-inline">
                    <li class="d-none d-lg-inline-block"><button><img src="images/icons/rewind.svg" alt=""></button></li>
                    <li class="d-none d-lg-inline-block"><button><img src="images/icons/play-btn.svg" alt=""></button></li>
                    <li class="d-none d-lg-inline-block"><button><img src="images/icons/forward.svg" alt=""></button></li>
                    <li class="d-none d-lg-inline-block"><button><img src="images/icons/volume.svg" alt=""></button></li>
                    <li class="font-xxs">Streaming time: 01:34:45</li>
                </div>
            </div>
            <div class="position-absolute options p-3 p-lg-2">
                <div class="list-inline">
                    <li><button><img src="images/icons/play.svg" alt=""></button></li>
                    <li><button><img src="images/icons/settings.svg" alt=""></button></li>
                    <li id="fullscreen-mode-open" class="active"><button onclick="openFullscreen();"><img src="images/icons/full-screen.svg" alt=""></button></li>
                    <li id="fullscreen-mode-close"><button onclick="closeFullscreen();"><img src="images/icons/full-screen.svg" alt=""></button></li>
                </div>
            </div>
        </div>
    </div>
    <div class="stream-window-right stream-chat d-none d-xl-block">
        <div class="users d-flex flex-center py-2">
            <div class="viewers-icon"></div>
            <div class="font-xxs ml-2">1,205</div>
        </div>
        <div class="chat-box pr-3 mx-3 mt-3 overflow-auto">
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
            <?php include('includes/chat.php'); ?>
        </div>
    </div>
    <div class="stream-window-left border-top-0">
        <div class="stream-info d-none d-lg-flex flex-between text-uppercase">
            <div class="d-flex align-items-center">
                <h6>Stream name here | other stream info</h6>
                <div class="stream-cat font-xxs mx-3">Stream category</div>
                <div class="d-flex flex-between">
                    <span class="tag label">Tag 1</span>
                    <span class="tag label mx-1">Tag 1</span>
                    <span class="tag label">Tag 1</span>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="d-flex font-xxs">
                    <div class="d-flex align-items-center like mr-3">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <img class="mx-2" src="images/icons/flame.svg">
                        <div class="font-bold">538</div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="viewers-icon"></div>
                        <div class="viewers-text ml-2">1,205 viewers</div>
                    </div>
                </div>
                <div class="list-inline d-flex align-items-center m-0 ml-3">
                    <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li class="px-1"><a class="text-reset" href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                    <li class="px-1"><a class="text-reset" href="#"><div class="discord-icon"></div></a></li>
                </div>
            </div>
        </div>
        <div class="stream-profile d-none d-lg-flex align-items-center">
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
            <div class="d-flex flex-between font-xs ml-auto">
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
        </div>
    </div>
    <div class="stream-window-right border-top-0 stream-chat-message font-xxs px-3 d-none d-xl-flex flex-column justify-content-center">
        <div class="form-inline d-flex justify-content-between mb-2">
            <div class="form-group mb-0 w-100">
                <input type="message" class="form-control w-100" id="message" placeholder="Your message">
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

<script>
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
</script>