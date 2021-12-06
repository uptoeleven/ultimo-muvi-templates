$(function(){
//    ER-24621-Starts here
   if(MAKE_ASYNC_CALL_FOR_NOTIFICATION===true){  
        checkSubscriptionExpiry();
        setInterval(function () {
        checkSubscriptionExpiry();
    }, 1000000);   
   }      
    //    ER-24621-ends here
    var $winWidth = $(window).width(); 
    //   @20432:Generic | Revo template | The Footer of the login page not sticked in bottom.
        if ($winWidth > 767) {
        stickyFooter(document.getElementById('footer'));
        } else {
            document.getElementById('footer').removeAttribute('style');
        }
    //   @20432:Generic | Revo template | The Footer of the login page not sticked in bottom.
    
    $('.menu-toggle-butn').click(function(){
        $('body').toggleClass('_nav-on');
    });
    $('body').css('paddingTop', $('header').outerHeight());
    $('body.style_3._home').css('paddingTop', 0);

    $(window).scroll(function(){
        if($(window).scrollTop() > $('header').height()){
            $('header').addClass('_scrolled');
        }else{
            $('header').removeClass('_scrolled');
            setTimeout(function(){     $('body').css('paddingTop', $('header').outerHeight()); }, 300);}
    }
    )
    
    $('header .srch-butn').click(function(){
        $('header').addClass('_search-on');
        $('header .sitesearch').focus();
    })
    $('header .search-bar .close-search').click(function(){
        $('header').removeClass('_search-on');
        $('header .sitesearch').val('');
    })
    
    if (is_audio_enable == 1){
        $('a').attr('data-pjax', '#main');
        $('.playbtn').removeAttr('data-pjax');
        $('a[target="_blank"]').removeAttr('data-pjax');
        $('.logout').removeAttr('data-pjax');
        $('.language-list').removeAttr('data-pjax');
        $('a.mydonations').removeAttr('data-pjax');
        $('a.managecontent').removeAttr('data-pjax');
        $('a.mycredits').removeAttr('data-pjax');
        $('a.cardinformation').removeAttr('data-pjax');//@47107
        //getPlaylistName(sdk_user_id);     //#20401: Playlist and Queue Feature for REVO and Modern Template- R1
    }
    
    $('.qty-spinner button._btn').click(function(){
        var qtyFld = $(this).siblings('._fld');
        var qtyFldVal = parseInt(qtyFld.val());
        var itemID = qtyFld.data('itemid');
        if($(this).data('action') == "plus"){
            qtyFld.val(qtyFldVal+1);
            updatecart(itemID);
        }
        if($(this).data('action') == "minus"){
            if(qtyFldVal > 1){
                qtyFld.val(qtyFldVal-1);
                updatecart(itemID);
            }
        }
    });
    var currentQty = 0;
    $('.qty-spinner input._fld').focus(function(){
        currentQty =  $(this).val();
    });
    $('.qty-spinner input._fld').blur(function(){
        if(parseInt($(this).val()) <= 0){
            $(this).val(1);
        }
        if(parseInt($(this).val()) != currentQty){
            updatecart($(this).data('itemid'));
        }
    });
    
    $('#lang-popover-butn[rel="popover"]').popover({
    container: 'body',
        html: true,
        content: function () {
        var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
    
    /* #19398 - Follow/Unfollow Feature - By Chinu */
    $(document).on('click', '.muvi-follow', function () {
        var obj = $(this);
        var follow = obj.data("is-follow");
        var type = obj.data("type");
        var request_id = obj.data("request-id");
        obj.attr('disabled', 'disabled');
        $.ajax({
            method: 'post',
            url: HTTP_ROOT + '/followUnfollow/addFollow',
            data: {follow: follow, type: type, request_id: request_id},
            dataType: 'json',
            success: function (res) {
                if(res.status==='login'){
                    $('#loginModal .modal-title').html(JSLANGUAGE.registered_user_can_follow || 'Oops! Only registered users can follow!');
                    $('#loginModal').modal('show');
                } else if (res.is_success === 1) {
                    var count_follow_txt = res.count_follow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " follower(s) ";
                    $('#count-followers'+request_id).html(count_follow_txt);
                    obj.html(JSLANGUAGE.following || 'Following');
                    obj.removeClass('muvi-follow').addClass('muvi-unfollow');
                    obj.attr('data-is-follow', 0);
                }
                obj.removeAttr('disabled');
            }
        });
    });
    var BstrapModal = function (title, body, buttons) {
        var title = title || "Lorem Ipsum History", body = body || "If you change mind, you'll have to request to follow again.", buttons = buttons || [{Value: JSLANGUAGE.cancel || "Cancel", Css: "btn-danger", Callback: function (event) {
                            BstrapModal.Close();
                        }}, {Value: JSLANGUAGE.unfollow || "Unfollow", Css: "btn-primary", Callback: function (event) {
                            //return unFollow(follow_obj);
                            return BstrapModal.Unfollow(follow_obj);
                        }}];
        var GetModalStructure = function () {
            var that = this;
            that.Id = BstrapModal.Id = Math.random();
            var buttonshtml = "";
            for (var i = 0; i < buttons.length; i++) {
                buttonshtml += "<button type='button' class='btn " +
                        (buttons[i].Css || "") + "' name='btn" + that.Id +
                        "'>" + (buttons[i].Value || "Cancel") +
                        "</button>";
            }
            return "<div class='modal fade' name='dynamiccustommodal' id='" + that.Id + "' tabindex='-1' role='dialog' data-backdrop='static' data-keyboard='false' aria-labelledby='" +
                    that.Id + "Label'><div class='modal-dialog'><div class='modal-content'><!--<div class='modal-header'><button type='button' class='close modal-white-close' onclick='BstrapModal.Close()'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>" + title + "</h4></div>--><div class='modal-body'><p>&nbsp;</p><div class='row'><div class='col-xs-12 col-md-12 col-sm-12 col-lg-12 text-center'>" + body + "</div><p>&nbsp;</p></div></div><div class='modal-footer bg-default'><div class='col-xs-12 col-sm-12 col-lg-12 text-center'>" + buttonshtml + "</div></div></div></div></div>";
        }();
        BstrapModal.Delete = function () {
            var modals = document.getElementsByName("dynamiccustommodal");
            if (modals.length > 0)
                document.body.removeChild(modals[0]);
        };
        BstrapModal.Close = function () {
            $(document.getElementById(BstrapModal.Id)).modal('hide');
            $('.modal-backdrop').remove();
            BstrapModal.Delete();
        };
        this.Show = function () {
            BstrapModal.Delete();
            document.body.appendChild($(GetModalStructure)[0]);
            var btns = document.querySelectorAll("button[name='btn" + BstrapModal.Id + "']");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", buttons[i].Callback || BstrapModal.Close);
            }
            $(document.getElementById(BstrapModal.Id)).modal('show');
        };
        var unfollow_xhr;
        BstrapModal.Unfollow = function (follow_obj) {
            follow = follow_obj.data("is-follow");
            type = follow_obj.data("type");
            request_id = follow_obj.data("request-id");
            user_id = follow_obj.data("user");
            follow_obj.attr('disabled', 'disabled');
            if(unfollow_xhr != null){
                follow_obj.removeAttr('disabled');
                unfollow_xhr.abort();
            }
            unfollow_xhr = $.ajax({
                method: 'post',
                url: HTTP_ROOT + '/followUnfollow/removeFollow',
                data: {follow: follow, type: type, request_id: request_id},
                dataType: 'json',
                success: function (res) {
                    if(res.status==='login'){
                        location.reload(true);
                    } else if (res.is_success === 1) {
                        var count_follow_txt = res.count_follow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " follower(s) ";
                        $('#count-followers'+request_id).html(count_follow_txt);
                        follow_obj.html(JSLANGUAGE.follow || 'Follow');
                        follow_obj.removeClass('muvi-unfollow').addClass('muvi-follow');
                        follow_obj.attr('data-is-follow', 1);
                        if($("#" + request_id + type + user_id).length != 0) {
                            $("#" + request_id + type + user_id).fadeOut();
                        }
                    }
                    follow_obj.removeAttr('disabled');
                    BstrapModal.Close();
                }
            });
        };
    };
    var follow_obj, follow, type, request_id;
    $(document).on('click', '.muvi-unfollow', function () {
        follow_obj = $(this);
        var title = JSLANGUAGE.unfollow || 'Unfollow';
        var message = JSLANGUAGE.unfollow_confirmation || "Are you sure you want to unfollow $textName?";
        var convert_message = message.replace("$textName", follow_obj.data('name'));
        new BstrapModal(title, convert_message).Show(); return false;
    });
    /* Follow Unfollow - By Chinu */
    /* show/hide password icon start */
    $("input[type='password']").each(function(){
        var id = $(this).attr('id');
        $('<span toggle="#'+id+'" class="fa fa-fw eye-icon toggle-password fa-eye"></span>').insertBefore(this);
    });
    $(".toggle-password").on('click',function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password"){
            input.attr("type", "text");
        } 
        else {
            input.attr("type", "password");
        }
    });
    /* show/hide password icon end */
});

$(window).on('resize', function(){
    $('body').css('paddingTop', $('header').outerHeight());
    $('body.style_3._home').css('paddingTop', 0);
})


$(window).on('scroll', function(){
    $('.popover').remove();
    $('#lang-popover-butn').removeAttr('aria-describedby');
})

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
//   @20432:Generic | Revo template | The Footer of the login page not sticked in bottom.
var $elementHeight = 0;
var $footerPosition = 0;
$(window).bind("load", function () {
    var $winWidth = $(window).width();
    if ($winWidth > 767) {
        setInterval(function () {
            stickyFooter(document.getElementById('footer'));
        }, 3000);
    } else {
        document.getElementById('footer').removeAttribute('style');
    }
});
$(window).bind("scroll", function () {
    var $winWidth = $(window).width();
    if ($winWidth > 767) {
        stickyFooter(document.getElementById('footer'));
    } else {
        document.getElementById('footer').removeAttribute('style');
    }

});
$(window).bind("resize", function () {
    var $winWidth = $(window).width();

    if ($winWidth > 767) {
        stickyFooter(document.getElementById('footer'));
    } else {
        document.getElementById('footer').removeAttribute('style');
    }
});

var stickyFooter = function ($element) {
     var $windowHeight = $(window).height();
    $elementHeight = $($element).height();
    $headerHeight = $('header').outerHeight();
    var $chkHeight;
        $($element).css({
        position: 'absolute',
        top: $footerPosition,
        left: 0,
        right: 0
       });
     if ($($element).css('position') === 'absolute') {
        $chkHeight = $(document.body).height() + $elementHeight + $headerHeight;
    } else {
        $chkHeight = $(document.body).height();
    }

    if ($chkHeight < $windowHeight) {
        $footerPosition = $windowHeight - $elementHeight;
        $($element).css({
            position: "absolute",
            width: "100%",
            top: $footerPosition - 40
        });
    } else {
        $footerPosition = ($(window).scrollTop() + $windowHeight - $elementHeight);
        $($element).css({
            position: "static"
        });
    }
 };
 //   @20432:Generic | Revo template | The Footer of the login page not sticked in bottom.

function initSlickSlider(currentObj, columnCount){ //currently using for featured section
    if(columnCount == "2"){
        $(currentObj).not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            customPadding: '80px',
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
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
    if(columnCount == "4"){
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
                        slidesToShow: 2,
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
    if(columnCount == "6"){
        $(currentObj).not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            customPadding: '80px',
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
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
}
function initSlickSliderSingle(currentObj){ 
    $(currentObj).not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        customPadding: '80px',
        autoplay: false,
        autoplaySpeed: 3000
    });
}


function episodeContent() {
    var movie_id = $('#content_id').val();
    var movie_type = $('#episode_type').val();
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
            $(".tracklist-episode").html('<ul class="item-list">'+res.msg+'</ul>');
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
			if(total_track == 1){
				trackLang = track;
			}else{
				trackLang = tracks;
			}
            if (total_track != '') {
                $('.symbol-release').addClass('hide');
                $('.tracks').html(cast_symbol + total_track + '&nbsp;' + trackLang + release_symbol);
            }
        });
    }
}


function showcart(id, flag,checkquant){        
    var url = HTTP_ROOT+'/shop/addtocart';
    if(typeof checkquant !== typeof undefined){
       var qnt = eval($('#product_qnt').val());
    }else{
       var qnt = 1;
    }
    var reloadUrl = HTTP_ROOT +'/shop/cart';
    if(qnt>0){
        if(flag == 2){
            $('.loader._full-page').show();
        }else{
            $('.loader._item-'+id).show();
        }
        $.post(url, {'quantity':qnt, 'id':id}, function(res){
            if(flag == 2){	
                $('.loader_cart').hide();
                $('#cart-popup-counter').html(eval($('#cart-popup-counter').html()) + 1);
                $('#cartpopup').html(res);
                window.location.href = reloadUrl;
            }else{
				if(res=='currencyerror'){
                $('.loader_cart').hide();
					$('.loader._item-'+id).hide();
					$("#addtocarterror").modal("show");
				}else{
					$('.loader_cart').hide();
                $('html,body').animate({scrollTop:0}, 500);
                $('#cart-popup-counter').html(eval($('#cart-popup-counter').html()) + qnt);
                $('#cartpopup').html(res);
                
                $('.loader._item-'+id).hide();
            }
            }
        })
    }else{
        alert(JSLANGUAGE.enter_quantity);
    }        
}

function removefromcart(id, cartid, qnty) {
    $('#'+cartid+' .loader').show();
    var url = HTTP_ROOT+'/shop/RemoveCart';
    $.post(url, {'id': id,'cartpopup':1}, function (res) {
        $('#'+cartid+' .loader').hide();
        $('#cart-popup-counter').html(eval($('#cart-popup-counter').html()) - eval(qnty));
        $('#cartpopup').html(res);
		if(window.location.href == HTTP_ROOT+"/shop/cart"){
			goKart();
		}
    });

}

function goKart(){
   window.location.href=HTTP_ROOT+"/shop/cart";
}
function soundOn(){
    $(".bar1").animate({height:'15px'}, 80, soundOn);
    $(".bar2").animate({height:'15px'}, 100);
    $(".bar3").animate({height:'15px'}, 100);
    $(".bar1").animate({height:'1px'}, 100);
    $(".bar2").animate({height:'15px'}, 100);
    $(".bar3").animate({height:'2px'}, 100);
    $(".bar1").animate({height:'3px'}, 100);
    $(".bar2").animate({height:'2px'}, 100);
    $(".bar3").animate({height:'1px'}, 100);
    $(".bar1").animate({height:'15px'}, 100);
    $(".bar2").animate({height:'2px'}, 100);
    $(".bar3").animate({height:'10px'}, 100);
    $(".bar1").animate({height:'12px'}, 100);
    $(".bar2").animate({height:'8px'}, 100);
    $(".bar3").animate({height:'12px'}, 100);
    $(".bar1").animate({height:'9px'}, 100);
    $(".bar2").animate({height:'12.5px'}, 100);
    $(".bar3").animate({height:'3px'}, 100);
}

function ConfirmFavPopup(obj) {
    $("#deleteFav").modal('show');
    var header = $(obj).attr('data-header');
    var action_btn = $(obj).attr('data-button');
    $("#deleteFav").find("#Favbodymodal").text(header);
    $("#deleteFav").find('.action_btn').addClass(action_btn);
    $("." + action_btn).attr('data-content_id', $(obj).attr('data-content_id'));
    $("." + action_btn).attr('data-content_type', $(obj).attr('data-content_type'));
    $("#deleteFav").find('.action_btn').attr('onclick','deleteFavContent(this)');
}
function deleteFavContent(obj) {
    var content_id = $(obj).attr('data-content_id');
    var content_type = $(obj).attr('data-content_type');
    var url = HTTP_ROOT + "/user/deletefromfavlist/";
    $('#favlist_loading').show();
    $('#deleteFav').modal('hide');
    var action = 0;
    if ($.trim(content_type) == "") {
         content_type = 0;
    }
    $.post(url, {'content_id': content_id, 'content_type': content_type, 'login_status': true, 'action': action}, function (res) {
        location.reload();
    });
}

function addFav(obj){
    var login_status  = $(obj).attr('data-login_status'); 
    var content_id    = $(obj).attr('data-content_id'); 
    var content_type  = $(obj).attr('data-content_type'); 
    var fav_status    = $(obj).attr('data-fav_status'); 
    if(login_status == 1){
         $('#loader_fav').show();
        if($(obj).find('.fa').hasClass('fa-heart-o')){
            $(obj).find('.fa').removeClass('fa-heart-o');
            $(obj).find('.fa').addClass('fa-heart');
            $(obj).attr('data-fav_status',0);
            $('.favourite__content').html(added_fav);
        }else{
            $(obj).find('.fa').removeClass('fa-heart');
            $(obj).find('.fa').addClass('fa-heart-o');
            $(obj).attr('data-fav_status',1);
            $('.favourite__content').html(add_fav);
        } 
        addFavContent(content_id,content_type,true, fav_status);
    }else{
        $("#loginModal").modal('show');
        var input_field = '<div id="fav_input"><input type="hidden" name="add_to_fav" id="add_to_fav" value="1" /><input type="hidden" name="content_type"  id="content_type" value="'+content_type+'" /></div>';
        $("#loginModal .popup_bottom").append(input_field);
        if(content_type == 1){
            $("#stream_id").val(content_id);
        }else{
            $("#movie_id").val(content_id);
        }
    }
}
function addFavContent(content_id,content_type,login_status,action){
    var url = HTTP_ROOT+"/user/addtofavlist/";
    $.ajax({
        url: url,
        data: {'content_id': content_id, 'content_type': content_type,'login_status':login_status,'action':action},
        type: 'POST',
        headers: {"X-PJAX":"true","X-PJAX-Container":"#main"},
        success: function (res) {
                $('#loader_fav').hide();
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

    //14252: The login popup is not getting removed.
    function modelClose() {
        $('#loginModal').modal('hide');
    }
    //14252: The login popup is not getting removed.
    
// user -> myplaylists.html
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
/* ER- 20654 by Pritam start*/
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
                                if(response.cocreators_html){
                                    $('.cocreators_div').html(response.cocreators_html);
                                    $('.cocreators_div').show();
                                    cocreatorready();
                                }
                                
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
    var count = 1;
    var maxscrollcount = 16;
    var tempScrollTop, currentScrollTop = 0;
    $('.loader._full-page').hide();
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
/* ER- 20654 by Pritam end*/
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
function cocreatorready(){
    $('#creator_username').autocomplete({
        source : function (request, response) {
            $.ajax({
                    url: HTTP_ROOT+'/ugc/userAutocomp?term='+$('#creator_username').val(),
                    dataType: "json",
                    success: function( data ) {
                            response( $.map( data.user, function( item ) {
                                    return {
                                            label: item.display_name,
                                            value: item.user_group_type,
                                            id: item.id
                                    }
                            }));
                    }

            });
        },
        select: function( event, ui ) {
            $.ajax({
                    url: HTTP_ROOT+'/ugc/usersubgroup?term='+$('#creator_user_type').val(),
                    dataType: "json",
                    success: function( data ) {
                        $(".multiselect-selected-text").html("select type");
                          $(".multiselect-container").html(data.html);  
                    }

            });
                event.preventDefault();
                $("#creator_username").val(ui.item.label);
        },
        focus: function (event, ui) {
                $("#creator_username").val(ui.item.label);
                $("#creator_user_type").val(ui.item.value);
                $("#creator_user_id").val(ui.item.id);
                event.preventDefault(); 
        }
    });
}                