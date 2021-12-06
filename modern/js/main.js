function ConfirmFavPopup(obj) {
    $("#muvi_deleteFav").modal('show');
    var header = $(obj).attr('data-header');
    var action_btn = $(obj).attr('data-button');
    $("#muvi_deleteFav").find("#Favbodymodal").text(header);
    $("#muvi_deleteFav").find('.action_btn').addClass(action_btn);
    $("." + action_btn).attr('data-content_id', $(obj).attr('data-content_id'));
    $("." + action_btn).attr('data-content_type', $(obj).attr('data-content_type'));
    $("#muvi_deleteFav").find('.action_btn').attr('onclick', 'deleteFavContent(this)');
}

function changeFldValue(data_input, calculation) {
    var fld = $('.muvi_c-spinner input.' + data_input);
    var fldVlu = $('.muvi_c-spinner input.' + data_input).val();

    if (fldVlu != '') {
        if (calculation == "plus")
            fld.val(parseInt(fldVlu) + 1);
        else if (calculation == "minus") {
            if (fldVlu > 1)
                fld.val(parseInt(fldVlu) - 1);
        }
    }
}
jQuery(document).ready(function ($) {
    /* 21178: Advance Player| Support "Related Audios" and "Related Products" in Advance Player page similar to Content Details. */
    $('#confirmbtn').click(function(){
        var permalink = $('#selected_content_permalink').val();
        window.location.href = HTTP_ROOT+'/'+permalink+'?autoplay=1';
    });
    /* 21178: Advance Player| Support "Related Audios" and "Related Products" in Advance Player page similar to Content Details. */
    
    $(".muvi_c-link").mouseover(function () {
        $('.muvi_c-dropdown').removeAttr('style')
    });
    $(".profile").mouseover(function () {
        $('.profile-dropdown').removeAttr('style')
    });

    $('.muvi_c-link').on("click", function () {
        $('.muvi_c-dropdown').removeAttr('style')
    });
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') == -1) {
            $('#bootstrap-touch-slider').addClass('safari-banner');
        }
    }
    /*$("div#ap").on("DOMAttrModified",function(){
     if($(this).is(":visible")){
     $('footer').addClass('playerOn');
     }else{
     $('footer').removeClass('playerOn');
     }
     });*/
    setTimeout(function () {
        $(".muvi_c-navbar .container").css("top", "0px");
    }, 5000);

    $('body').on('click', function (e) {
        if ($.trim($(e.target).attr('class')) == "language-list" || $.trim($(e.target).attr('class')) == "fa fa-language") {
        } else {
            if ($('.language-list').attr('aria-describedby')) {
                $('.language-list').popover('hide');
                $('.popover').removeClass('in');
                $('.popover').remove();
                $('.language-list').removeAttr('aria-describedby');
            }
        }
    });

    var click_count = 1;
    if (is_audio_enable == 1) {
        $('a').attr('data-pjax', '#main');
        $('.playbtn').removeAttr('data-pjax');
        $('a[target="_blank"]').removeAttr('data-pjax');
        $('.logout').removeAttr('data-pjax');
        $('.language-list').removeAttr('data-pjax');
        $('a.cardinformation').removeAttr('data-pjax');//@47107
        //getPlaylistName(sdk_user_id, 2);  //#20401: Playlist and Queue Feature for REVO and Modern Template- R1
    }
    $('.muvi_c-cart-toggler').removeAttr('data-pjax');
    $('a.managecontent').removeAttr('data-pjax');
    $('a.mydonations').removeAttr('data-pjax');
    $('a.mycredits').removeAttr('data-pjax');
    $('a.add-content-btn').removeAttr('data-pjax');
    $('a.muvi_edit-ugc-content').removeAttr('data-pjax');
    $('.muvi_c-menu-type-classic').click(function () {
        if ($(window).width() < 1280) {
            if (click_count % 2 != 0) {
                $(this).children('.dropdown-menu').css('display', 'block');
            } else {
                $(this).children('.dropdown-menu').css('display', 'none');
            }
            click_count++;
        }
    });
    soundOn();
    //$('.playbtn').addClass('btn c-btn btn-lg c-font-bold c-font-white c-theme-btn c-btn-square c-font-uppercase');
    $('.close').click(function () {
        $('.loader').hide();
        $('.avatar-wrapper').html("");
        $('.avatar-input').html("");
    });
    $('.joinnow').addClass('btn btn-lg c-theme-btn c-btn-square c-btn-uppercase c-btn-bold');
    $('.joinnow').attr('data-animation', 'animated fadeInLeft');
    $('#avatar-modal').on('hidden.bs.modal', function () {
        $('.avatar-wrapper').html("");
        $('#avatarInput').val("");

    });
    $('#cancel_now').addClass('btn-lg c-theme-btn c-btn-square c-btn-uppercase c-btn-bold');
    $('.muvi_review_form h2').addClass('c-font-uppercase c-font-bold h3');

    $('<div class="muvi_c-line-left"></div>').insertAfter(".muvi_review_form h2");
    $('.muvi_review_form p .btn').addClass('c-font-white c-theme-btn c-btn-square c-font-uppercase muvi_btn_view_trailer_inside pull-right');
    $('<div class="clearfix"></div>').insertAfter('.casting .col-md-6:nth-child(2n)');

    // jQuery sticky Menu

    $(".muvi_mainmenu-area").sticky({topSpacing: 0});

//    $('.product-carousel').owlCarousel({
//        loop: true,
//        navigation: true,
//        navigationText: ['<i class="fa fa-3x fa-chevron-left"></i>', '<i class="fa fa-3x fa-chevron-right"></i>'],
//        margin: 20,
//        responsiveClass: true,
//        rewindNav: false,
//        responsive: {
//            0: {
//                items: 1,
//            },
//            600: {
//                items: 3,
//            },
//            1000: {
//                items: 5,
//            }
//        }
//    });
//
//    $('.related-products-carousel').owlCarousel({
//        loop: true,
//        nav: true,
//        margin: 20,
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//            },
//            600: {
//                items: 2,
//            },
//            1000: {
//                items: 2,
//            },
//            1200: {
//                items: 3,
//            }
//        }
//    });
//
//    $('.brand-list').owlCarousel({
//        loop: true,
//        nav: true,
//        margin: 20,
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//            },
//            600: {
//                items: 3,
//            },
//            1000: {
//                items: 4,
//            }
//        }
//    });

    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function (e) {
        e.preventDefault();
    });

    //Shift Nav Caret Place From </a> to Parent <li/>
//    $('.navbar-nav >li > a > span.caret').each(function() {
//        //alert($(this).closest("a").attr("href"));
//        if ($(this).closest("a").attr("href") != "#") {
//
//            var aprentNode = $(this).closest("li");
//            $(this).detach().appendTo(aprentNode).addClass("mob-nav-caret");
//        }
//    });
    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _renderMenu: function (ul, items) {
            var self = this, currentCategory = "";
            $.each(items, function (index, item) {
                /*for(var i in item){
                 alert(item[i]);
                 }*/
                if (item.category != currentCategory) {
                    //alert(item.category);
                    ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                    currentCategory = item.category;
                }

                self._renderItemData(ul, item);
            });
        }
    });
    var category = "";
    $("#muvi_siteSearchField").catcomplete({
        source: HTTP_ROOT + "/search/search/",
        minLength: 1,
        select: function (event, ui) {
            console.log(HTTP_ROOT);
            var I = ui.item;
            var searchCat = I.category;
            searchCat = searchCat.toLowerCase();
            var logurl = HTTP_ROOT + '/search/siteSearchLog';
            $.post(logurl, {'object_category': I.content_types, 'search_string': I.value, 'search_url': window.location.href, 'object_id': I.id}, function (res) {
                if (parseInt(searchCat.search(" - episode")) >= 0) {
                    playAudio(I.stream_id);
                } else if (searchCat == 'star') {
                    $.cookie("audio_star", '1');
                    var cast_url = HTTP_ROOT + '/star/' + I.title;
                    $.pjax({url: cast_url, container: '#main'});
                    //window.location = HTTP_ROOT + '/star/' + I.title;
                } else {
                    $.cookie("audio_content", '1');
                    var content_url = HTTP_ROOT + '/' + I.title;
                    $.pjax({url: content_url, container: '#main'});
                    //window.location = HTTP_ROOT + '/' + I.title;
                }

            });
        }
    });

});

//Make footer stick to bottom
var footerHeight = 0;
var footerTop = 0;
var footerObj = "";
$(function () {
   // ER-24621-Starts here    
   if(MAKE_ASYNC_CALL_FOR_NOTIFICATION===true){  
        checkSubscriptionExpiry();
        setInterval(function () {
        checkSubscriptionExpiry();
    }, 1000000);   
   }        
 // ER-24621-ends here
    positionFooter();
})
$(window).bind("load", function () {
    positionFooter();
    setInterval(function () {
        positionFooter();
    }, 3000);
});
$(window).bind("scroll", function () {
    positionFooter();

});
$(window).bind("resize", function () {
    positionFooter();
});

//ER-24621 Starts here
function updateExpiry(unique_id) {
    url = HTTP_ROOT + '/usernotification/updateExpiry',
            $.post(url, {'unique_id': unique_id}, function (res) {

            });
}
function checkSubscriptionExpiry() {
    
 if(MAKE_ASYNC_CALL_FOR_NOTIFICATION===true){
    $.ajax({
        method: 'post',
        url: HTTP_ROOT + '/usernotification/showExpiryNotification',
        data: {type: '1'},
        dataType: 'json',
        success: function (res) {           
            if (res.status === 'success') {
                $.confirm({
                    title: '<b>Attention!</b>',
                    content: res.notification_message,
                    buttons: {
//                        confirm: function () {
//                            $.alert('Confirmed!');
//                        },
//                        cancel: function () {
//                            $.alert('Canceled!');
//                        },
                        somethingElse: {
                            text: 'Ok',
                            btnClass: 'btn-blue',
                            keys: ['enter', 'shift'],
                            action: function () {
                                updateExpiry(res.unique_id);
                            }
                        }
                    }
                });
            }
        }
    });
    }


}
//ER-24621 ends here

function positionFooter() {
    footerObj = $(".muvi_c-layout-footer");
    footerHeight = footerObj.height();
    footerTop = ($(window).scrollTop() + $(window).height() - footerHeight);
    if ($('body').hasClass('has-player'))
        footerTop = footerTop - $('#ap').height();
    footerTop = footerTop + "px";
    var chkHeight = $(document.body).height();
    if (footerObj.css('position') == 'absolute') {
        chkHeight = $(document.body).height() + footerHeight;
    }
    if (chkHeight < $(window).height()) {
        footerObj.css({
            position: "absolute",
            width: "100%"
        }).animate({
            top: footerTop
        });
    } else {
        footerObj.css({
            position: "static"
        });
    }
}
function placeFooter() {
    if ($('body').hasClass('has-player')) {
        $('.muvi_c-layouc-layout-footer-6').css({'position': 'relative', 'top': $(window).height() - ($('#main').innerHeight() - $('#ap').height())});
    } else {
        $('.muvi_c-layouc-layout-footer-6').css({'position': 'relative', 'top': $(window).height() - $('#main').innerHeight()});
    }
}
//function initSlickSlider(currentObj){ //currently using for featured section
//    $(currentObj).not('.slick-initialized').slick({
//        dots: false,
//        infinite: false,
//        speed: 300,
//        slidesToShow: 6,
//        customPadding: '10px',
//        autoplay: false,
//        autoplaySpeed: 3000,
//
//        responsive: [
//            {
//                breakpoint: 1366,
//                settings: {
//                    slidesToShow: 6,
//                    infinite: false,
//                }
//            },
//            {
//                breakpoint: 1300,
//                settings: {
//                    slidesToShow: 5,
//                }
//            },
//            {
//                breakpoint: 869,
//                settings: {
//                    slidesToShow: 2
//                }
//            }
//        ]
//    });
//}
function initSlickSlider(currentObj) { //currently using for featured section
    $(currentObj).not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        customPadding: '80px',
        autoplay: false,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
function episodeContent() {
    var movie_id = $('#content_id').val();
    var movie_type = $('#muvi_episode_type').val();
    if (movie_type == '6') {
        $(".loader_episode").show();
        var action_url = HTTP_ROOT + "/content/findepisodes";
        $.ajax({
            method: "POST",
            url: action_url,
            dataType: "json",
            data: {'movie_id': movie_id, 'limit': 9999}
        }).done(function (res) {
            $('.loader_episode').hide();
            $(".muvi_tracklist").html(res.msg);
            var total_track = '';
            var trackLang;
            if (res.status != 'failure') {
                total_track = $('.episode_total').val();
            }
            var date = $('.release_date').html();
            var cast = $('.cast_data').html();
            var cast_symbol = '';
            var release_symbol = '';

            if (cast) {
                cast_symbol = '<span class="symbol">&nbsp;-</span>&nbsp;&nbsp;';
            }
            if (date) {
                var release_symbol = '<span class="symbol">&nbsp;-</span>&nbsp;&nbsp;';
            }
            if (total_track == 1) {
                trackLang = track;
            } else {
                trackLang = tracks;
            }
            if (total_track != '') {
                $('.symbol-release').addClass('hide');
                $('.tracks').html(cast_symbol + total_track + '&nbsp;' + trackLang + release_symbol);
            }
        });
    }
}
function soundOn() {
    $(".bar1").animate({height: '15px'}, 80, soundOn);
    $(".bar2").animate({height: '15px'}, 100);
    $(".bar3").animate({height: '15px'}, 100);
    $(".bar1").animate({height: '1px'}, 100);
    $(".bar2").animate({height: '15px'}, 100);
    $(".bar3").animate({height: '2px'}, 100);
    $(".bar1").animate({height: '3px'}, 100);
    $(".bar2").animate({height: '2px'}, 100);
    $(".bar3").animate({height: '1px'}, 100);
    $(".bar1").animate({height: '15px'}, 100);
    $(".bar2").animate({height: '2px'}, 100);
    $(".bar3").animate({height: '10px'}, 100);
    $(".bar1").animate({height: '12px'}, 100);
    $(".bar2").animate({height: '8px'}, 100);
    $(".bar3").animate({height: '12px'}, 100);
    $(".bar1").animate({height: '9px'}, 100);
    $(".bar2").animate({height: '12.5px'}, 100);
    $(".bar3").animate({height: '3px'}, 100);
}
function bannerLoad(autoScroll, interval, thumb_visibe) {
    var autoScroll = $('#auto_scroll').val();
    var interval = $('#scroll_interval').val();
    var thumb_visibe = $('#muvi_active_thumb').val();
    initSliderOne();
    configSliderOne(thumb_visibe);
}
function submit_search() {
    var search_val = $("input[name='search_field']").val();
    if (search_val == "") {
        return false;
    }
    var event = HTTP_ROOT + "/search/show_all";
    var form = $('#form');
    $.pjax({
        container: "#main",
        timeout: 2000,
        url: event,
        data: form.serialize()
    });
}
function addFav(obj) {
    var login_status = $(obj).attr('data-login_status');
    var content_id = $(obj).attr('data-content_id');
    var content_type = $(obj).attr('data-content_type');
    var fav_status = $(obj).attr('data-fav_status');
    if (login_status == 1) {
        $('#muvi_loader_fav').show();
        if ($(obj).find('.fa').hasClass('fa-heart-o')) {
            $(obj).find('.fa').removeClass('fa-heart-o');
            $(obj).find('.fa').addClass('fa-heart');
            $(obj).attr('data-fav_status', 0);
            $('.muvi_favourite__content').html(((typeof added_fav !== "undefined") ? added_fav : JSLANGUAGE.added_to_fav));
        } else {
            $(obj).find('.fa').removeClass('fa-heart');
            $(obj).find('.fa').addClass('fa-heart-o');
            $(obj).attr('data-fav_status', 1);
            $('.muvi_favourite__content').html(((typeof add_fav !== "undefined") ? add_fav : JSLANGUAGE.add_to_fav));
        }
        addFavContent(content_id, content_type, true, fav_status);
    } else {
        $("#loginModal").modal('show');
        var input_field = '<div id="fav_input"><input type="hidden" name="add_to_fav" id="add_to_fav" value="1" /><input type="hidden" name="content_type"  id="content_type" value="' + content_type + '" /></div>';
        $("#loginModal .popup_bottom").append(input_field);
        if (content_type == 1) {
            $("#stream_id").val(content_id);
        } else {
            $("#movie_id").val(content_id);
        }
    }
}
function addFavContent(content_id, content_type, login_status, action) {
    var url = HTTP_ROOT + "/user/addtofavlist/";
    $.ajax({
        url: url,
        data: {'content_id': content_id, 'content_type': content_type, 'login_status': login_status, 'action': action},
        type: 'POST',
        headers: {"X-PJAX": "true", "X-PJAX-Container": "#main"},
        success: function (res) {
            $('#muvi_loader_fav').hide();
        }
    });
}
function deleteFavContent(obj) {
    var content_id = $(obj).attr('data-content_id');
    var content_type = $(obj).attr('data-content_type');
    var url = HTTP_ROOT + "/user/deletefromfavlist/";
    $('#favlist_loading').show();
    $('#muvi_deleteFav').modal('hide');
    var action = 0;
    if ($.trim(content_type) == "") {
        content_type = 0;
    }
    $.post(url, {'content_id': content_id, 'content_type': content_type, 'login_status': true, 'action': action}, function (res) {
        location.reload();
    });
}
function showText()
{
    $('.short-content').addClass('hide-text');
    $('.full-content').removeClass('hide-text');
}
function removefromcart(id, cartid, qnty) {
    $('.loader_cart').show();
    var url = HTTP_ROOT + '/shop/RemoveCart';
    $.post(url, {'id': id, 'cartpopup': 1}, function (res) {
        $('.loader_cart').hide();
        $('.muvi_round-cart').html(eval($('.muvi_round-cart').html()) - eval(qnty));
        $('#cartpopup').html(res);
		if(window.location.href == HTTP_ROOT+"/shop/cart"){
			goKart();
		}
    });
}
function goKart() {
    window.location.href = HTTP_ROOT + "/shop/cart";
}

$(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
        $('.c-layout-header .muvi_c-navbar > .container').addClass('color-change');
    } else {
        $('.c-layout-header .muvi_c-navbar > .container').removeClass('color-change');
    }
});


//Embedded js code are placed here 

//blog -> view.html

function blogLoadCommentForm(postId) {
    $.ajax({
        url: "/blog/LoadCommentForm",
        data: "post_id=" + postId,
        type: 'POST',
        success: function (data) {
            $('#muvi_comment_form').html(data);
        }
    });
}
//@Mantis: 12046 start
//added class="blog-item" 
function blogViewVideo(domEle){
    $(domEle).find('iframe').css({
       position:'absolute',
       top:0,
       left:0,
       width:'100%',
       height:'100%'
    });        
    var divEle = $('<div/>');
    divEle.css({
        position:'relative',
        paddingTop:'56.25%',
        clear:'both'
    });        
    $(domEle).find('iframe').wrap(divEle);
}
//@Mantis: 12046 end

//layouts -> cookie_msg.html

function cookieMsg(setCookieUrl) {
    var isshow = localStorage.getItem('isshow');
    if (isshow == null) {
        $("#muvi_cookieModal").show();    //ER-36352: Change position of cookie message in Frontend website
    }
    $(".muvi_accept_cookie").on("click", function () {
        $.post(setCookieUrl, {"cookieName": "showMessageForCookies", "cookieValue": 1}, function (res) {
            console.log("Cookie set successfully");
            localStorage.setItem('isshow', 1);
            $("#muvi_cookieModal").hide();    //ER-36352: Change position of cookie message in Frontend website
        });
    });
    //ER-36352: Change position of cookie message in Frontend website
    $(".close_cookie").on("click", function(){
        $("#muvi_cookieModal").hide();
    });
    //ER-36352: Change position of cookie message in Frontend website
}

//layouts -> listitem.html

function listItemInLayouts() {
    $('#main').addClass('c-layout-page');
    $(".muvi_c-overlay-object").matchHeight({property: 'min-height'});
    $("p.muvi_c-title").matchHeight({property: 'min-height'});
    $("p.muvi_caption_genre").matchHeight({property: 'min-height'});
    $(".muvi_c-info").matchHeight({property: 'min-height'});
    $(".muvi_list-box").matchHeight({property: 'min-height'});
    $.fn.matchHeight._update(true);
}

//layouts -> topbar.html
function topbarInLayouts() {
    $('.bfh-selectbox').on('change.bfhselectbox', function () {
        var countrycode = $(this).val();
        $('.loader_cart').show();
        var url = SITE_URL + '/shop/CountryChange';
        $.post(url, {'countrycode': countrycode}, function (res) {
            window.location.reload();
        })
    });
}

//Media -> list.html

function listInMedia() {
    $(".muvi_c-overlay-object").matchHeight({property: 'min-height'});
    $("p.muvi_c-title").matchHeight({property: 'min-height'});
    $("p.muvi_caption_genre").matchHeight({property: 'min-height'});
    $(".muvi_c-info").matchHeight({property: 'min-height'});
    $(".muvi_list-box").matchHeight({property: 'min-height'});
    $.fn.matchHeight._update();
}

function listInMediaReady() {
    $('.nav .dropdown').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });
}

//Movie -> show.html

function showInMovie() {
    $('.videocontent').hide();
    $('a.muvi_review_link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    $('.loader').hide();
    $('#main').addClass('c-layout-page');
    var user_id = $('.muvi_playlist_user_id').val();
    episodeContent();
    if (!$("#myTrailer").hasClass("section")) {
        $('#myTrailer').addClass('section');
        var halfwidth = $(window).width();
        if (halfwidth > 800) {
            halfwidth = halfwidth / 2;
        } else {
            halfwidth = halfwidth - (halfwidth / 10);
        }
        var halfheight = $(window).height() / 2;
        $('#myTrailer.section').width(halfwidth);
        $('#myTrailer.section').height(halfheight);
        $('#myTrailer').hide();
    }
}

//Movie -> showParent.html
function showParentInMovie() {
    $('.loader').hide();
    var user_id = $('.muvi_playlist_user_id').val();
    episodeContent();
    $("#episodes").on("click", ".muvi_multipart_child", function () {
        var stream_id = $(this).attr('data-stream-id');
        console.log(stream_id);
        var title = $('.muvi_episode_content_' + stream_id).find('.muvi_c-title').html();
        var story = $('.muvi_episode_content_' + stream_id).find('.muvi_c-full-desc').html();
        $('#muvi_multipart_child_title').html($.trim(title));
        // 22902: Generic|WE-Stream : story doesn't show in modal popup when click "more" (Jitendra K Sahoo) start
        $('#muvi_multipart_child_story').html($.trim(story));
        // 22902: Generic|WE-Stream : story doesn't show in modal popup when click "more" (Jitendra K Sahoo) end
    });
    if (!$("#myTrailer").hasClass("section")) {
        $('#myTrailer').addClass('section');
        var halfwidth = $(window).width();
        if (halfwidth > 800) {
            halfwidth = halfwidth / 2;
        } else {
            halfwidth = halfwidth - (halfwidth / 10);
        }
        var halfheight = $(window).height() / 2;
        $('#myTrailer.section').width(halfwidth);
        $('#myTrailer.section').height(halfheight);
        $('#myTrailer').hide();
    }
}

//playng -> play_video.html

function playVideoInPlaying() {
    $("#muvi_video_loader").show();
    var window_height = $(window).height();
    var header_height = $("header").height() + 70;
    var iFrameID = document.getElementById('Playerframe');
    iFrameID.height = "";
    if (iFrameID) {
        iFrameID.height = window_height - header_height;
    }
}

function iframeLoaded() {
    $("#muvi_video_loader").hide();
}

//playlist -> show.html

function playlistShow() {
    $('.videocontent').hide();
    var user_id = $('.muvi_playlist_user_id').val();
    var total = $('#total').val();
    $('#main').addClass('c-layout-page');
    if (total > 0) {
        allPlaylistData();
    }
}

//search -> index.html

function showcart(id, flag) {
    $('.loader_cart').show();
    var url = SITE_URL + '/shop/addtocart';
    var reloadUrl = HTTP_ROOT + '/shop/cart';
    $.post(url, {'quantity': 1, 'id': id}, function (res) {
        if (flag == 2) {
            $.pjax({url: reloadUrl, container: '#main'});
            $('.muvi_round-cart').html(eval($('.muvi_round-cart').html()) + 1);
            $('#cartpopup').html(res);
            $('.loader_cart').hide();
        } else {
            if (res == 'currencyerror') {
                $('.loader_cart').hide();
                $("#addtocarterror").modal("show");
            } else {
                $('.loader_cart').hide();
                //$('html,body').animate({scrollTop:0}, 500);
                $('.muvi_round-cart').html(eval($('.muvi_round-cart').html()) + 1);
                $('#cartpopup').html(res);
            }
        }
    })
}

//seasondata -> index.html

function seasonDataLoad() {
    $("img.play_box_img").matchHeight();
    $(".play-box").matchHeight();
    $(".movie_name_title").matchHeight();
    $(".movie_genre_title").matchHeight();
    $(".caption").matchHeight();
    $.fn.matchHeight._update();
}

//shop -> itemlist.html

function shopItemlist() {
    $('.muvi_list-box').matchHeight();
    $.fn.matchHeight._update();
}

//shop -> product_details.html

function slider_pseudocall(obj) {
    var lightSlider = obj.lightSlider({
        loop: false,
        keyPress: true,
        item: 10,
        auto: false,
        gallery: true,
        slideMargin: 5,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 10,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 5,
                }
            }
        ],
        onSliderLoad: function () {
            $('.lSPager.lSGallery').addClass('cS-hidden');
        }
    });
}

function shownew_price_sku() {
    var v_div = '';
    var def_attr = $('#muvi_defaultattribute').val();
    $(".variants_div").find("select, textarea, input").each(function () {
        v_div = v_div + ',' + $(this).val();
    })
    v_div = v_div.replace(/(^,)|(,$)/g, "");
    $(".hiddentxt").each(function () {
        var defval = $(this).attr('data-variantid');
        var lsv = $("#muvi_content-slider-" + defval);
        if (v_div == $(this).attr('data-key')) {
            if ($('#muvi_c-product-dynamic-content-' + defval).length) {
                $('.muvi_c-product-gallery-content').hide();
                $('#muvi_c-product-dynamic-content-' + defval).show();
            }
			if($(this).attr('data-price')){
				$("#variable_error").hide()
				$('#muvi_productskuspan').html($(this).attr('data-sku'));
				$('#muvi_productpricediv').html($(this).attr('data-price'));
			}else{
				$("#variable_error").show().html(JSLANGUAGE.variant_mismatch);
				$('#muvi_productskuspan').html($('#productdefaultsku').val());
				$('#muvi_productpricediv').html($('#productdefaultprice').val());
			}
            //$(".no-match").hide();
            slider_pseudocall(lsv);

            return false;
        } else {
            if (v_div == def_attr) {
                $('.muvi_c-product-gallery-content').hide();
                $('#muvi_c-product-dynamic-content-default').show();
                //$(".no-match").hide();
                $("#variable_error").hide()
            } else {
                //$(".no-match").show();
                $("#variable_error").show().html(JSLANGUAGE.variant_mismatch);
            }
            $('#muvi_productskuspan').html($('#productdefaultsku').val());
            $('#muvi_productpricediv').html($('#productdefaultprice').val());
        }
    })
}

// shop -> success.html

//Declared Globally before positionFooter() function

//    Site -> contactus.html

function contactusLoad(msg) {
    $('.wrapper').addClass('has-not-sidebar');
    $('#contact_us').on('click', function () {
        $('#muvi_submit-btn').val('contact');
        var frm = $(this).closest('form');
        frm.validate({
            /*22588 : XSS vulnerability : Contact Us Page*/
            rules: {
                "ContactForm[name]": {
                    required: true,
                    minlength: 5,
                    noScript:true
                },
                "ContactForm[email]": {
                    required: true,
                    email: true
                },
                "ContactForm[message]": {
                    required: true,
                    noScript:true
                },
            },
            /*22588 : XSS vulnerability : Contact Us Page*/
            messages: {
                "ContactForm[name]": {
                    required: JSLANGUAGE.full_name_required,
                    minlength: JSLANGUAGE.name_atleast_5_char,
                },
                "ContactForm[email]": {
                    required: JSLANGUAGE.email_required,
                    email: JSLANGUAGE.valid_email
                },
                "ContactForm[message]": {
                    required: msg
                }
            },
            submitHandler: function (data) {
                $('#muvi_contact-loading').show();
                $.ajax({
                    url: HTTP_ROOT + "/site/contactus",
                    data: frm.serialize(),
                    type: 'POST',
                    headers: {"X-PJAX": "true", "X-PJAX-Container": "#main"},
                    beforeSend: function () {
                        $('#profile-loading').show();
                    },
                    success: function (res) {
                        $(frm).each(function () {
                            this.reset();
                        });
                        $('#muvi_contact-loading').hide();
                        $('#success_message').html(res).show();
                        $(".alert-msg").fadeTo(5000, 0).slideUp("slow", function () {
                            $('#success_message').html('').css({opacity: 1});
                        });
                    }
                });
            }
        });
    });
}

//site -> index.html

function siteIndex() {
    var autoScroll = $('#auto_scroll').val();
    var interval = $('#scroll_interval').val();
    var thumb_visibe = $('#muvi_active_thumb').val();
    $(document).on('pjax:success', function () {
        $('#muvi_loader_container').hide();
        loadSlider(autoScroll, interval, thumb_visibe);
    });
}

//UGC -> create_ugc.html

function ugcReadypage() {
    tinymce.init({
        selector: ".RichText",
        formats: {
                bold: {inline: 'b'},  
        },
        valid_elements: '*[*]',
        force_br_newlines: true,
        force_p_newlines: false,
        forced_root_block: false,
        menubar: false,
        element_format: 'html',
        extended_valid_elements: 'div[*], style[*]',
        valid_children: "+body[style]",
        height: 200,
        plugins: [
            'advlist autolink link lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor'
        ],
        setup: function (editor) {
            editor.addButton('newmedia', {
                text: 'Add Image',
                title: 'Add image',
                icon: 'image',
                onclick: function () {
                    $("#MediaModal").modal("show");
                    $('#glry_preview').removeAttr('src width height');
                    $('#imgtolib').removeAttr('src width height');
                    $('#choose_img_name').val("");
                    $("#InsertPhoto").text("Insert Image");
                    $("#InsertPhoto").removeAttr("disabled");
                    $("#cancelPhoto").removeAttr("disabled");
                    $('.overlay').removeAttr('style');
                    $("#browsefiledetails").text("No file selected");
                    $("#tinygallery").load("<?php echo Yii::app()->getBaseUrl(true)?>/template/tinyGallery");
                }});
        },
        content_css: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link newmedia | code",
    });


    $('#release_date').datepicker();
    $('#publish_date').datepicker({minDate: '0'}),
            $('#publish_time').flatpickr({
        enableTime: true,
        noCalendar: true,
        enableSeconds: false, // disabled by default
        time_24hr: true, // AM/PM time picker is used by default
        // default format
        dateFormat: "H:i",
        // initial values for time. don't use these to preload a date
        defaultHour: 12,
        defaultMinute: 0
    });

    $('#update-btn').removeAttr('disabled');
}

// clear info by cropping (onRelease event handler)
function clearInfo() {
    $('#x1').val('');
    $('#y1').val('');
    $('#x2').val('');
    $('#y2').val('');
    $('#w').val('');
    $('#h').val('');
    $('button[type="submit"]').removeAttr('disabled');
}
;
function updateInfo(e) {
    var x = (e.x <= 0) ? 0 : e.x;
    var y = (e.y <= 0) ? 0 : e.y;
    var x2 = (e.x2 <= 0) ? 0 : e.x2;
    var y2 = (e.y2 <= 0) ? 0 : e.y2;
    $('#x1').val(x);
    $('#y1').val(y);
    $('#x2').val(x2);
    $('#y2').val(y2);
    $('#w').val(e.w);
    $('#h').val(e.h);
}

function checkperma(val)
{
    if (val != '')
    {
        var newperm = name_to_url(val);
        if (newperm == '')
        {
            $('#plink').html("<input style='margin-top:5px;' type='text' name='movie[permalink]' id='permalink' class='form-control input-sm checkInput' required placeholder='Please enter english equivalent name' onblur='checkperma(this.value)'>Please provide the english equivalent name which will be used for permalink purpose only.&nbsp;<em class='icon-info'></em>");
        }
    }
}
function name_to_url(name) {
    name = name.toLowerCase(); // lowercase
    name = name.replace(/^\s+|\s+$/g, ''); // remove leading and trailing whitespaces
    name = name.replace(/\s+/g, ''); // convert (continuous) whitespaces to one -
    name = name.replace(/[^a-z-]/g, ''); // remove everything that is not [a-z] or -
    return name;
}

function showType(id, name) {
    $('#showtype').hide();
    $('#showtypeadd').show();
    $('#typenew').val(name);
    $('#typenew_id').val(id);
}
function removeshowType() {
    $('#showtype').show();
    $('#showtypeadd').hide();
}

function ajaxshowType() {
    var url = HTTP_ROOT + "/ugc/ajaxshowtype";
    $.post(url, function (postresult) {
        $("#ajaxshowtype").html(postresult);
    });
}

function createUGCFn() {
    window.addEventListener("beforeunload", function (e) {
        if (browserreloadflag) {
            var confirmationMessage = JSLANGUAGE.no_action_while_payment;
            //console.log(confirmationMessage);
            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
            return confirmationMessage;                            //Webkit, Safari, Chrome
        }
    });


    $('#update-btn').on('click', function () {
        //function saveUGCData(obj) {
        $("#muvi_upload_ugc_content").validate({
            rules: {
                "movie[name]": {
                    required: true,
                },
                "movie[content_category_value][]": {
                    required: true,
                },
                "movie[permalink]": {
                    required: true,
                }
            },
            messages: {
                "movie[name]": {
                    required: JSLANGUAGE.field_required,
                },
                "movie[content_category_value][]": {
                    required: JSLANGUAGE.field_required,
                },
                "movie[permalink]": {
                    required: JSLANGUAGE.field_required,
                }
            },
            submitHandler: function (form) {
                var formObj = document.getElementById('muvi_upload_ugc_content');
                var formData = new FormData(formObj);
                formData.append('isAjax', 1);
                $('#update-btn').html(JSLANGUAGE.wait);
                $('#update-btn').attr('disabled', true);
                $('.loader').show();
                var submitBtn = JSLANGUAGE.btn_submit;
                $.ajax({
                    method: 'post',
                    url: HTTP_ROOT + '/ugc/saveUserContent',
                    data: formData,
                    contentType: false,
                    cache: false,
                    processData: false,
                    dataType: 'json',
                    success: function (response) {
                        if (response.success) {
                            if (response.requestType == 'add') {
                                $('input[name = "stream_uniq_id"]').val(response.stream_uniq_id);
                                /*location.href = HTTP_ROOT + "/ugc/editContent/stream_uniq_id/"+response.stream_uniq_id;*/
                                history.pushState(null, "Edit Content", HTTP_ROOT + '/ugc/editContent?stream_uniq_id=' + response.stream_uniq_id)
                                showUGCAlert('' + success, JSLANGUAGE.content_successfully_added, '' + JSLANGUAGE.please_upload_video)
                                $('.addmore-content').html(response.video_html);
                                $('.addmore-content').show();
                                $('#update-btn').html(submitBtn);
                                $('#update-btn').removeAttr('disabled');
                            } else {
                                location.href = HTTP_ROOT + "/ugc/Showdetails";
                            }
                            $('.loader').hide();

                        }
                    }});
                return false;
            }
        });
    });

}


//ugc -> showdetaillists.html

function showDetailLists() {
    var video_duration = $("#video_duration").val();
    var file_size = $("#file_size").val();
    var is_encoded = $("#is_encoded").val();
    var uploaded_in = $("#uploaded_in").val();
    var processing = false;
    ;
    var count = 1;
    var maxscrollcount = 16;
    var tempScrollTop, currentScrollTop = 0;
    $("#filetype").change(function () {
        $('.error').html('')
        $('.savefile').hide();
        $('#' + $(this).val() + '_div').show();
    });
}

function manage_progressbar() {
    $("#all_progress_bar").toggle('slow');
}

function CopytoClipeboard(id) {
    $('#' + id).css('display', 'block');
    $('#' + id).animate({
        opacity: 0,
        top: '-=75',
    }, {
        easing: 'swing',
        duration: 500,
    });
}
function openEmbedBox(embedid) {
    $('#' + embedid).modal('show');
}
function embedThirdPartyPlatformForTrailer() {
    $('#divgetIframeSrcModernThemeValue').append($("#muvi_embed_url").val());
    var videoUrlexistm3u8 = 'm3u8';
    var iframeTagvalue = $("#muvi_embed_url").val();
    var validVideoUrl = 0;
    var iframe_src_exist = $('#divgetIframeSrcModernThemeValue :first-child').attr('src');
    var dataPattern_check_iframe = new RegExp("(<iframe.*?>.*?<\/iframe>)");
    var iframe_exist = iframeTagvalue.match(dataPattern_check_iframe);
    if (iframeTagvalue.length == 0) {
        $('#save-btn').attr('disabled', 'disabled');
        return false;
    } else if ((iframeTagvalue.indexOf(videoUrlexistm3u8) != -1) || (iframe_src_exist != "" && iframe_exist != null)) {
        showLoader();
        var embed_text = $("#muvi_embed_url").val();
        var action_url = HTTP_ROOT + '/admin/embedThirdPartyPlatformForTrailer';
        $('#embed_url_error').html('');
        var movie_id = $('#movie_id').val();
        var movie_stream_id = $('#movie_stream_id').val();
        $.post(action_url, {'third_party_url': embed_text, 'movie_id': movie_id, 'movie_stream_id': movie_stream_id}, function (res) {
            showLoader(1);
            window.location.href = window.location.href;
        });
    } else {
        $('#divgetIframeSrcModernThemeValue').html("");
        showUGCAlert('Error', JSLANGUAGE.provide_valid_iframe);
        return false;
    }
}

//user -> cardinformation.html
//@Mantis: 19607 start
var months = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC');
//@Mantis: 19607 end
function getMonthList() {
    var d = new Date();
    var curyr = d.getFullYear();
    var selyr = parseInt($('#exp_year').val());
    var curmonth = d.getMonth() + 1;
    var sel_month = $.trim($("#exp_month").val());
    var startindex = 1;

    if (curyr === selyr) {
        startindex = curmonth;
    }
    var month_opt = '<option value="">' + JSLANGUAGE.expiry_month + '</option>';
    for (var i = startindex; i <= 12; i++) {
        var selected = '';
        if (i === parseInt(sel_month)) {
            selected = 'selected="selected"';
        }
        month_opt += '<option value="' + i + '" ' + selected + '>' + months[i - 1] + '</option>';
    }
    $('#exp_month').html(month_opt);
}

function validateUserForm(is_redirect) {
    $('#muvi_card-info-error').hide();
    if (parseInt(is_redirect)) {
        var x = 1;
    } else {
        var validate = $("#membership_form").validate({
            rules: {
                "data[card_name]": {
                    required: true
                },
                "data[card_number]": {
                    required: true,
                    number: true
                },
                "data[exp_month]": {
                    required: true
                },
                "data[exp_year]": {
                    required: true
                },
                "data[security_code]": {
                    required: true
                },//37028 starts
                "data[payulatum_card_type]": {
                    required: true
                }//37028 ends
            },
            messages: {
                "data[card_name]": {
                    required: JSLANGUAGE.card_name_required
                },
                "data[card_number]": {
                    required: JSLANGUAGE.card_number_required,
                    number: JSLANGUAGE.card_number_required
                },
                "data[exp_month]": {
                    required: JSLANGUAGE.expiry_month_required
                },
                "data[exp_year]": {
                    required: JSLANGUAGE.expiry_year_required
                },
                "data[security_code]": {
                    required: JSLANGUAGE.security_code_required
                },//37028 starts
                "data[payulatum_card_type]": {
                    required: JSLANGUAGE.card_type_required
                }//37028 ends
            }
        });
        var x = validate.form();
    }
    if (x) {
        var payment_gateway = $("#payment_gateway").val();
        var class_name = payment_gateway + '()';
        eval("var obj = new " + class_name);
        if (payment_gateway !== 'manual' && payment_gateway != 'paypalpro') {
            obj.processCard(1);
        } else if (payment_gateway == 'paypalpro') {
            obj.updateCard();
        }
    }
}

function showCardConfirmPopup(obj) {
    $("#paymentModal").modal('show');
    var header = $(obj).attr('data-header');
    var type = $(obj).attr('data-type');
    var header_lower = header.toLowerCase();
    $("#muvi_headermodal").text(header.charAt(0).toUpperCase() + header.slice(1) + " " + JSLANGUAGE.card + "?");
    var myString = JSLANGUAGE.action_card;
    var myString = myString.replace(/\$/g, '');
    var oldword = "action";
    var reg = new RegExp(oldword, "g");
    var header1 = myString.replace(reg, header_lower);
    $("#bodymodal").text(header1);
    $("#paymentbtn").attr('data-managepayment_id', $(obj).attr('data-managepayment_id'));
    var onclick = type + 'Card(this)';
    $("#paymentbtn").attr('data-type', type);
    $("#paymentbtn").attr('onclick', onclick).bind('click');
}

function makeprimaryCard(obj) {
    $("#id_payment").val($(obj).attr('data-managepayment_id'));
    var type = $(obj).attr('data-type');

    var action = HTTP_ROOT + "/user/" + type + "Card";

    $('#paymodal').attr("action", action);
    document.paymodal.submit();
}

function deleteCard(obj) {
    $("#id_payment").val($(obj).attr('data-managepayment_id'));

    var type = $(obj).attr('data-type');

    var action = HTTP_ROOT + "/user/" + type + "Card";

    $('#paymodal').attr("action", action);
    document.paymodal.submit();
}

function payFromPrimaryCard(short_code) {
    var action = HTTP_ROOT + "/user/payFromPrimaryCard?gateway_code=" + short_code;
    if ($('#is_sca').length && $('#is_sca').length == 1 && ($('#payment_gateway').length && $('#payment_gateway').val() == 'stripe')) {
        var stripe = Stripe(stripe_pk);
        $.ajax({
            method: 'post',
            data: {is_sca: 1},
            url: action,
            dataType: 'json',
            success: function (res) {
                console.log(jQuery.param(res));
                    var sca_url = action + '&payment_method_id=' + res.payment_method_id + '&is_sca=1';
                if (res.requires_action && res.requires_action == 1) {
                        var additional_params = '';
                        //47107 starts
                        if(res.setup_intent_client_secret){
                            stripe.confirmCardSetup(
                                res.setup_intent_client_secret,
                                {
                                    payment_method: res.payment_method_id
                                }
                            ).then(function (result) {
                                if (result.error) {
                                    additional_params += '&is_success=0';
                                    location.reload();
                                } else {
                                    $.ajax({
                                        method:'post',
                                        data:{is_sca:1, setup_intent_id:result.setupIntent.id, payment_method_id:result.setupIntent.payment_method},
                                        url:action,
                                        dataType:'json',
                                        success:function(res){ console.log(jQuery.param(res));
                                            if (res.authentication_required) {
                                                var additional_params = '';
                                                stripe.confirmCardPayment(res.payment_intent_client_secret, {
                                                    payment_method: res.payment_method_id
                                                }).then(function (result) {
                                                    if (result.error) {
                                                        additional_params += '&is_success=0';
                                                        location.reload();                                
                                                    } else if (result.paymentIntent.status === 'succeeded') {                                
                                                        additional_params += '&is_success=1';
                                                        additional_params += '&amount=' + res.amount;
                                                        additional_params += '&paid_amount=' + res.paid_amount;
                                                        additional_params += '&dollar_amount=' + res.dollar_amount;
                                                        additional_params += '&currency_code=' + res.currency_code;
                                                        additional_params += '&currency_symbol=' + res.currency_symbol;
                                                        additional_params += '&invoice_id=' + res.invoice_id;
                                                        additional_params += '&order_number=' + res.order_number;
                                                        window.location.href = sca_url + additional_params;
                                                    } else {
                                                        additional_params += '&is_success=0';
                                                        location.reload();
                                                    }
                                                });
                                            } else {
                                                location.reload();                    
                                            }                                            
                                        }
                                    });
                                    /*additional_params += '&is_success=0';
                                    additional_params += '&amount=' + res.amount;
                                    additional_params += '&paid_amount=' + res.paid_amount;
                                    additional_params += '&dollar_amount=' + res.dollar_amount;
                                    additional_params += '&currency_code=' + res.currency_code;
                                    additional_params += '&currency_symbol=' + res.currency_symbol;
                                    additional_params += '&invoice_id=' + res.invoice_id;
                                    additional_params += '&order_number=' + res.order_number;
                                    additional_params += '&setup_intent_id=' + result.setupIntent.id;
                                    additional_params += '&payment_method_id=' + result.setupIntent.payment_method;
                                    window.location.href = sca_url + additional_params;*/
                                }
                            });
                        }                        
                        /*stripe.handleCardPayment(
                            res.client_secret,
                            {
                              payment_method: res.payment_method_id,
                            }
                          ).then(function(result) {
                              console.log(result);
                            if (result.error) {
                                additional_params += '&is_success=0';
                                location.reload();
                            } else {
                                additional_params += '&is_success=1';
                                additional_params += '&amount=' + res.amount;
                                additional_params += '&paid_amount=' + res.paid_amount;
                                additional_params += '&dollar_amount=' + res.dollar_amount;
                                additional_params += '&currency_code=' + res.currency_code;
                                additional_params += '&currency_symbol=' + res.currency_symbol;
                                additional_params += '&invoice_id=' + res.invoice_id;
                                additional_params += '&order_number=' + res.order_number;
                                window.location.href = sca_url + additional_params;
                            }
                          });*/
                        //47107 ends
                    } 
                    //47107 starts
                    else if (res.authentication_required) {
                        var additional_params = '';
                        stripe.confirmCardPayment(res.payment_intent_client_secret, {
                            payment_method: res.payment_method_id
                        }).then(function (result) {
                            if (result.error) {
                                additional_params += '&is_success=0';
                                location.reload();                                
                            } else if (result.paymentIntent.status === 'succeeded') {                                
                                additional_params += '&is_success=1';
                                additional_params += '&amount=' + res.amount;
                                additional_params += '&paid_amount=' + res.paid_amount;
                                additional_params += '&dollar_amount=' + res.dollar_amount;
                                additional_params += '&currency_code=' + res.currency_code;
                                additional_params += '&currency_symbol=' + res.currency_symbol;
                                additional_params += '&invoice_id=' + res.invoice_id;
                                additional_params += '&order_number=' + res.order_number;
                                window.location.href = sca_url + additional_params;
                            } else {
                                additional_params += '&is_success=0';
                                location.reload();
                            }
                        });
                    }
                    //47107 ends
                    else {
                        location.reload();
                    }
                }
            });
        } else {
            window.location.href = action;
        }
    }

function addHostedCard(obj){
    var gateway_shortcode = $(obj).attr('data-gateway');
    var gatewayArr = ["corvus", "cybersource"];
    if(gatewayArr.indexOf(gateway_shortcode) != -1){
        window.location.href = HTTP_ROOT + "/user/addHostedCard";
    } else if(gateway_shortcode == 'ippayment'){
        window.location.href = HTTP_ROOT + "/user/addIppaymentCard";
    } else {
        alert("Error!!!");
    }
}

function cardInformationPageLoad() {
    if ($('#bill_fname').length) {
        $('#card_name').on('change', function () {
            var card_name_arr = $('#card_name').val().split(' ');
            var first_name = '';
            var last_name = '';
            if (card_name_arr.length >= 1) {
                first_name = card_name_arr[0];
                last_name = card_name_arr[card_name_arr.length - 1];
                console.log(first_name);
                console.log(last_name);
                $('#bill_fname').val(first_name);
                $('#bill_lname').val(last_name);
            }
        });
    }
    $('input').attr('autocomplete', 'false');
    $('form').attr('autocomplete', 'false');

    $("#security_code").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
                        (e.keyCode == 65 && e.ctrlKey === true) ||
                        // Allow: Ctrl+C
                                (e.keyCode == 67 && e.ctrlKey === true) ||
                                // Allow: Ctrl+X
                                        (e.keyCode == 88 && e.ctrlKey === true) ||
                                        // Allow: home, end, left, right
                                                (e.keyCode >= 35 && e.keyCode <= 39)) {
                                    // let it happen, don't do anything
                                    return;
                                }
                                // Ensure that it is a number and stop the keypress
                                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                                    e.preventDefault();
                                }
                            });
                }

//    user -> ccavenue_payment_redirect.html

                function ccavenuePaymentPage() {
                    $('#loadingPopup').modal('toggle');
                    $('#loadingPopup').modal('show');
                    $("#redirect_ccavenue").submit();
                }

                function corvusPaymentRedirect() {
                    $('#loadingPopup').modal('toggle');
                    $('#loadingPopup').modal('show');
                    $("#redirect_corvus").submit();
                }

// user -> credits.html
                function creditsPageLoad() {

                    $('#page-selection-all').bootpag({
                        total: Math.ceil(all_total),
                        page: 1,
                        maxVisible: Math.round(maxVisible_all)
                    }).on('page', function (event, num) {
                        $('#muvi_loader_credit').show();
                        $.post(all_url, {'page': num}, function (res) {
                            $('#muvi_allcreditlist').html(res);
                            $('#muvi_loader_credit').hide();
                        });
                    });
                    $('#page-selection').bootpag({
                        total: Math.ceil(total),
                        page: 1,
                        maxVisible: Math.round(maxVisible)
                    }).on('page', function (event, num) {
                        $('#muvi_loader_credit').show();
                        $.post(url, {'page': num}, function (res) {
                            $('#muvi_allcreditlist').html(res);
                            $('#muvi_loader_credit').hide();
                        });
                    });

                    $('#muvi_page-selection-debit').bootpag({
                        total: Math.ceil(debit_total),
                        page: 1,
                        maxVisible: Math.round(debit_maxVisible)
                    }).on('page', function (event, num) {
                        $('#muvi_loader_debit').show();
                        $.post(debit_url, {'page': num}, function (res) {
                            $('#muvi_debitlist').html(res);
                            $('#muvi_loader_debit').hide();
                        });
                    });

                }

                function getAllList() {
                    $('#muvi_loader_credit').show();
                    $.post(all_url, {}, function (res) {
                        $('#muvi_allcreditlist').html(res);
                        $('#muvi_loader_credit').hide();
                        if (parseInt(all_count) <= parseInt(page_size)) {
                            $('#page-selection-all').parent().hide();
                        } else {
                            $('#page-selection-all').parent().show();
                        }
                    });

                    $('#page-selection-all').bootpag({
                        total: Math.ceil(all_total),
                        page: 1,
                        maxVisible: Math.round(maxVisible_all)
                    }).on('page', function (event, num) {
                        $('#muvi_loader_credit').show();
                        $.post(all_url, {'page': num}, function (res) {
                            $('#muvi_allcreditlist').html(res);
                            $('#muvi_loader_credit').hide();
                        });
                    });
                }

                function getCreditList() {
                    $('#muvi_loader_credit').show();
                    $.post(url, {}, function (res) {
                        $('#muvi_creditlist').html(res);
                        $('#muvi_loader_credit').hide();
                        if (parseInt(count) <= parseInt(page_size)) {
                            $('#page-selection').parent().hide();
                        } else {
                            $('#page-selection').parent().show();
                        }
                    });

                    $('#page-selection').bootpag({
                        total: Math.ceil(total),
                        page: 1,
                        maxVisible: Math.round(maxVisible)
                    }).on('page', function (event, num) {
                        $('#muvi_loader_credit').show();
                        $.post(url, {'page': num}, function (res) {
                            $('#muvi_creditlist').html(res);
                            $('#muvi_loader_credit').hide();
                        });
                    });
                }

                function getDebitList() {
                    $('#muvi_loader_debit').show();
                    $.post(debit_url, {}, function (res) {
                        $('#muvi_debitlist').html(res);
                        $('#muvi_loader_debit').hide();
                        if (parseInt(debit_count) <= parseInt(page_size)) {
                            $('#muvi_page-selection-debit').parent().hide();
                        } else {
                            $('#muvi_page-selection-debit').parent().show();
                        }
                    });

                    $('#muvi_page-selection-debit').bootpag({
                        total: Math.ceil(debit_total),
                        page: 1,
                        maxVisible: Math.round(debit_maxVisible)
                    }).on('page', function (event, num) {
                        $('#muvi_loader_debit').show();
                        $.post(debit_url, {'page': num}, function (res) {
                            $('#muvi_debitlist').html(res);
                            $('#muvi_loader_debit').hide();
                        });
                    });
                }



//    user -> device.html

                function openDeleteDevicePopup(obj) {
                    $("#muvi_DeviceModal").modal('show');
                    var id = $(obj).attr('data-id');
                    var url = HTTP_ROOT + '/user/DeleteDevice';
                    $('#muvi_devicebtn').click(function () {
                        $('.loader').show();
                        $.post(url, {id: id}, function (res) {
                            if (res) {
                                $(obj).removeAttr('data-id');
                                $(obj).attr('disabled', true);
                                $(obj).removeAttr('onClick');
                                $('#muvi_DeviceModal').modal('hide');
                            }
                            $('.loader').hide();
                        });
                    });
                }

//user -> mylibrary.html

                function showSeason(movie_id, title, permalink) {
                    $('#muvi_headertitel').html(title);
                    $('#permalink').val(permalink);
                    $('#content_id').val(movie_id);
                    var url = HTTP_ROOT + "/rest/fetchSeasons?authToken=" + STORE_AUTH_TOKEN + "&user_id=" + user_id + "&movie_id=" + movie_id;
                    $.post(url, function (res) {
                        res = JSON.stringify(res);
                        res = JSON.parse(res);
                        var htmlval = "";
                        htmlval += '<select id="season" name="season" onchange="showeposide(this.value)" class="form-control form-control-border">';
                        for (var j = 0; j < res.seasons.length; j++) {
                            htmlval += '<option value="' + res.seasons[j].series_number + '">Season ' + res.seasons[j].series_number + '</option>';
                        }
                        htmlval += '</select>';
                        $('#muvi_seasons').html(htmlval);
                        showeposide(res.seasons[0].series_number)
                    });

                    $("#muvi_seasonModal").modal('show');
                }

                function showeposide(series) {
                    var permalink = $('#permalink').val();
                    var url = HTTP_ROOT + "/rest/episodeDetails?authToken=" + STORE_AUTH_TOKEN + "&user_id=" + user_id + "&lang_code=en&only_purchased=1&permalink=" + permalink;
                    $.post(url, function (data) {

                        var limit = 100;
                        var findEpisodesURL = HTTP_ROOT + "/content/FetchLibraryepisodes";
                        xhr = $.ajax({
                            method: "POST",
                            url: findEpisodesURL,
                            dataType: "json",
                            data: {'movie_id': $('#content_id').val(), 'series': series, 'limit': limit, 'userid': $('#userid').val(), 'viewlist': data.episode}
                        }).done(function (res) {
                            $("#episodes").html(res.msg);
                        });
                    });
                }


//                user -> myplaylists.html
                //#20401: Playlist and Queue Feature for REVO and Modern Template- R1
                function myPlayLists(type) {
                    var user_id = $('#playlist-form').find('#user_id').val();
                    var offset_value = $('#offset_value').val();
                    $.ajax({
                        url: HTTP_ROOT + "/user/countplaylist",
                        data: {'user_id': user_id, 'type': type}, //#20401: Playlist and Queue Feature for REVO and Modern Template- R1
                        type: 'POST',
                        success: function (res) {
                            $('#total_value').val(parseInt(res));
                            allPlaylist(user_id, offset_value, type);
                        }
                    });
                }
                //#20401: Playlist and Queue Feature for REVO and Modern Template- R1

// user -> orderdetails.html

                function printDiv(divName) {
                    var printContents = document.getElementById(divName).innerHTML;
                    var originalContents = document.body.innerHTML;
                    document.body.innerHTML = printContents;
                    window.print();
                    document.body.innerHTML = originalContents;
                }

//    user -> purchasehistory.html

                function cancelitem(order_item_id, ordernumber) {
                    $('.loader_cart').show();
                    var url = HTTP_ROOT + '/shop/CancelItem';
                    $.post(url, {'ordernumber': ordernumber, 'order_item_id': order_item_id}, function (res) {
                        if (res.isSuccess) {
                            $('.loader_cart').hide();
                            $("#successPopup").modal('show');
                            setTimeout(function () {
                                window.location.href = HTTP_ROOT + '/user/purchaseHistory';
                                return false;
                            }, 5000);
                        } else {
                            $('.loader_cart').hide();
                            $("#successPopupn").modal('show');
                            setTimeout(function () {
                                window.location.href = HTTP_ROOT + '/user/purchaseHistory';
                                return false;
                            }, 5000);
                        }

                    }, 'json');
                }
                function viewInvoice(obj) {
                    var link = $(obj).attr('data-href');
                    var win = window.open(link, '_blank');
                    win.focus();
                }

//user -> rgister.html

                function registerPageLoad() {
                    $('.plan-box').matchHeight();
                    $('#main').addClass('c-layout-page');
                }

//user -> reset.html

                //same as shop -> success.html

                //user -> singlepage_cardinformationpage.html

                function scardinformationPage() {
                    $('input').attr('autocomplete', 'false');
                    $('form').attr('autocomplete', 'false');

                    $("#security_code").keydown(function (e) {
                        // Allow: backspace, delete, tab, escape, enter and .
                        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                                // Allow: Ctrl+A
                                        (e.keyCode == 65 && e.ctrlKey === true) ||
                                        // Allow: Ctrl+C
                                                (e.keyCode == 67 && e.ctrlKey === true) ||
                                                // Allow: Ctrl+X
                                                        (e.keyCode == 88 && e.ctrlKey === true) ||
                                                        // Allow: home, end, left, right
                                                                (e.keyCode >= 35 && e.keyCode <= 39)) {
                                                    // let it happen, don't do anything
                                                    return;
                                                }
                                                // Ensure that it is a number and stop the keypress
                                                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                                                    e.preventDefault();
                                                }
                                            });
                                }
                                
 
// user -> singlepage_profile.html

function singlepageProfile(){
    $(document).on('pjax:end', function() {
            if(window.location.hash == '#purchase_history') {
                $('.nav-tabs li').removeClass("active");
                $('#muvi_purchase_tab').addClass("active");
                $('#profile').addClass("fade");
                $('#profile').removeClass("active in");
                $('#purchase_history').addClass("active in");
            }
        });
        $(".muvi_tab-click").click(function () {
            positionFooter();
        });
        // Confirm Popup for clear hisyory
        $("#showModal").click(function () {
            $("#muvi_watchModal").modal('show');
        });
        // Call clear history API
        $("#muvi_clear_watch_history").click(function () { 
           var url = HTTP_ROOT + "/rest/clearWatchHistory?authToken=" + STORE_AUTH_TOKEN + "&user_id="+user_id;
            $.post(url, function (res) {
                $("#muvi_watchModal").modal('hide');
                $('#muvi_watch_success_message').show();
                $('#showModal').attr("disabled", "disabled");
                $("#watch_history_pagination_result").html(no_record_found);
                $(".alert-msg").fadeTo(5000, 0).slideUp("slow", function(){
                    $('#muvi_watch_success_message').css({ opacity: 1 });
                });
                
                //location.reload(res);
            });
        });
}

// Pagination for Clear History and Purchase History
    function getresult(url,destID){
        $.ajax({
            url: url,
            type: "GET",
            success: function(data){
            //$("#watch_history_pagination_result").html(data);
            $('#'+destID).html(data);
            //setInterval(function() {$("#overlay").hide(); },500);
            },
            error: function() 
            {} 	        
        });
    }
    
    function transactiondetails(obj){
        var transaction_id = 0;
        var voucher_id = 0; 
        if($(obj).attr('data-voiucher') != undefined){
            voucher_id = $(obj).attr('data-voiucher');
        }
         if($(obj).attr('data-id') != undefined){
            transaction_id = $(obj).attr('data-id');
        } 
        var url = HTTP_ROOT + '/user/transactionDetails';
        $.post(url, {'transaction_id': transaction_id,'voucher_id': voucher_id}, function (res) {
            $("#transaction_data").html(res);
            $("#transaction-details").modal('show');
    });
}

//user -> watchhistory.html
function watchHistoryLoad(){
     $("#showModal").click(function () {
            $("#muvi_watchModal").modal('show');
        });
        $("#muvi_clear_watch_history").click(function () { 
           var url = HTTP_ROOT + "/rest/clearWatchHistory?authToken=" + STORE_AUTH_TOKEN + "&user_id="+user_id;
            $.post(url, function (res) {
                $("#muvi_watchModal").modal('hide');
                $('#watchhistory-container').html('');
                $('#showModal').attr("disabled", "disabled");
                $('#muvi_watch_success_message').show();
                $(".alert-msg").fadeTo(5000, 0).slideUp("slow", function(){
                    $('#muvi_watch_success_message').css({ opacity: 1 });
                });
                //location.reload(res);
            });
        });
}

function showSeasonWatch(movie_id,title){
            //var movie_id=$(this).val();
            var url = HTTP_ROOT + "/rest/fetchSeasons?authToken=" + STORE_AUTH_TOKEN + "&user_id="+user_id+"&movie_id="+movie_id;
            $.post(url, function (res) {
                res = JSON.stringify(res);
                res = JSON.parse(res);
                var htmlval="";
                htmlval +='<select id="season" name="season" onchange="showeposideWatch(this.value)" class="form-control form-control-border">';
                for(var j = 0; j < res.seasons.length; j++){
                     htmlval +='<option value="'+res.seasons[j].series_number+'">Season '+res.seasons[j].series_number+'</option>';               
                } 
                htmlval +='</select>';
                $('#muvi_seasons').html(htmlval);
                $('#muvi_headertitel').html(title);
                $('#content_id').val(movie_id);
                showeposideWatch(res.seasons[0].series_number)
            });
            $("#muvi_seasonModal").modal('show');
        }
    
    function showeposideWatch(series){
            var pageNumber = 1, scrollAmountTrigger = 400, offset = 0, limit = 100;
            var findEpisodesURL = HTTP_ROOT + "/content/fetchepisodes";
            xhr=$.ajax({
            method: "POST",
            url: findEpisodesURL,
            dataType: "json",
            data: {'movie_id': $('#content_id').val(), 'series': series, 'limit': limit,'userid':$('#userid').val()}
        }).done(function(res) {
           $("#episodes").html(res.msg);
        });
    }
    
    //14252: The login popup is not getting removed.
//    function modelClose() {
//        $('#loginModal').modal('hide');
//    }
    //14252: The login popup is not getting removed.
 /* 21178: Advance Player| Support "Related Audios" and "Related Products" in Advance Player page similar to Content Details. */
 function displayPopup(obj){
    $("#selected_content_permalink").val($(obj).attr("data-permalink"));
    $("#audioConfirmPopup").modal('show');
 }
 /* 21178: Advance Player| Support "Related Audios" and "Related Products" in Advance Player page similar to Content Details. */
 
 /* #12347 Guest user */
var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute = 60000

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 44) { // 45 minutes
        $.ajax({
            method: 'post',
            url:HTTP_ROOT + '/user/systemidle',
            dataType:'json',
            success:function(response){
                
            }
        });
    }
}
/* #12347 Guest user */