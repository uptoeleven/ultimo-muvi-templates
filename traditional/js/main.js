jQuery(document).ready(function($) {
    $('.muvi_popup-data').hide();
    $('.muvi_play-box').on("mouseenter", function() {
        $(this).find(".muvi_popup-data").show();
    })
    .on("mouseleave", function() {
        $(this).find(".muvi_popup-data").hide();
    });
    
    if ($(window).width() > 991)
    {
        $('<div class="clearfix"></div>').insertAfter(".muvi_list_page .col-md-5ths:nth-child(5n)");
        $('<div class="clearfix"></div>').insertAfter(".muvi_blogcontent:nth-child(3n)");
    }
    else
    {
        $('<div class="clearfix"></div>').insertAfter(".muvi_list_page .col-xs-6:nth-child(even)");
        $('<div class="clearfix"></div>').insertAfter(".muvi_bottom_pages .col-xs-6:nth-child(4n)");

    }

    $('.ps-caption').addClass('text-left');

    $('.muvi_review_form').find('h2').addClass('muvi_title1');
    $('.ps-list li').find("span").remove();
    $('.close').click(function() {
        $('.avatar-wrapper').html("");
        $('.avatar-input').val("");
    });
    $('#avatar-modal').on('hidden.bs.modal', function() {
        $('.avatar-wrapper').html("");
        $('#avatarInput').val("");

    });

    $('.dropdown').hover(function() {
        $('.dropdown-toggle', this).trigger('click');
    });
    if ($(window).width() > 1023) {
        $('.muvi_searchSec .input-group-addon').click(function() {

            if ($("#siteSearch").val() == "") {
                $('.muvi_searchSec input').toggleClass('muvi_input-width');
            } else {
                $("#search-form").submit();
            }
        });
    } else {
        $('.muvi_searchSec input').addClass('muvi_input-width');
    }

    $("#card-section").find('.form-group').each(function(i) {
        if($('#payment_gateway').val()=='stripe' && parseInt($('#is_sca').val())===1){
            if (i == 0) {
                $(this).html('<div class="col-md-6 muvi_bottom20"><div class="muvi_icon-addon muvi_addon-lg"><input type="text" required="" name="data[card_name]" id="card_name" title="' +field_name+ '" placeholder="' + card_name + '" autocomplete="off" class="form-control" value="" autofocus=""><label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-user"></i></label></div></div><div class="col-md-6 muvi_bottom20"><div class="muvi_icon-addon muvi_addon-lg"><input type="text" name="data[card_name_optional]" id="card_name_optional" placeholder="' + JSLANGUAGE.card_nick_name + '" autocomplete="false" class="form-control"><label data-original-title="" title="" rel="tooltip" for="email"><i class="fa fa-user"></i></label></div></div>');
            }
            if (i == 1){
                $(this).find('label').remove();
                $(this).find('div').first().removeClass().addClass('col-sm-12');
            }
        } else {
            if (i == 0)
            {
                $(this).html('<div class="col-md-6 muvi_bottom20"><div class="muvi_icon-addon muvi_addon-lg"><input type="text" required="" name="data[card_name]" id="card_name" title="' +field_name+ '" placeholder="' + card_name + '" autocomplete="off" class="form-control" value="" autofocus=""><label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-user"></i></label></div></div><div class="col-md-6 muvi_bottom20"><div class="muvi_icon-addon muvi_addon-lg"><input type="text" required="" name="data[card_number]" id="card_number" placeholder="' + card_number + '" autocomplete="false" class="form-control"><label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-credit-card"></i></label></div></div>');
            }
            if (i == 1)
            {
                $(this).find('label').hide();
                $(this).find('div').each(function(i) {

                    if (i == 0)
                    {
                        $(this).addClass('muvi_icon-addon muvi_addon-lg col-sm-4');
                        $(this).removeClass('col-sm-2');
                        $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-calendar fa-left-10"></i></label>').insertAfter("#exp_month");
                        $('#exp_month').addClass('muvi_select-hack-safari');
                    }
                    if (i == 1)
                    {
                        $(this).html();
                    }
                    if (i == 2)
                    {
                        $(this).addClass('muvi_icon-addon muvi_addon-lg col-sm-4');
                        $(this).removeClass('col-sm-2');
                        $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-calendar fa-left-10"></i></label>').insertAfter("#exp_year");
                        $('#exp_year').addClass('muvi_select-hack-safari');

                    }
                    if (i == 4) {
                        $(this).addClass('muvi_icon-addon muvi_addon-lg');
                        $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-lock fa-left-10"></i></label>').insertAfter("#security_code");
                    }
                });

            }
        }
        
    });
    $("#muvi_sepa").find('.form-group').each(function(i) {
        if (i == 0)
        {
            $(this).find('label').remove();
            $(this).find('div').addClass('muvi_icon-addon muvi_addon-lg col-md-6');
            $(this).find('div').removeClass('col-sm-4');
            $(this).find('div').each(function(i) {
                if (i == 0) {
                    $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-user fa-left-10"></i></label>').insertAfter("#account_name");
                }
                if (i == 1) {
                    $('<label data-original-title="name" title="" rel="tooltip for ="email"><i class="fa fa-university fa-left-10" aria-hidden="true"></i></label>').insertAfter("#iban");
                }
            });
        }
        if (i == 1)
        {
            $(this).find('label').remove();
            $(this).find('div').each(function(i) {
                if (i == 0) {
                    $(this).addClass('muvi_icon-addon muvi_addon-lg col-md-8');
                    $(this).removeClass('col-sm-4');
                    $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-map-marker fa-left-10" aria-hidden="true"></i></label>').insertAfter("#street");
                }
                if (i == 1) {
                    $(this).addClass(' muvi_icon-addon muvi_addon-lg col-md-4');
                    $(this).removeClass('col-sm-4');
                    $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-building-o fa-left-10" aria-hidden="true"></i></label>').insertAfter("#city");
                }
            });
        }
        if (i == 2) {
            $(this).find('label').remove();
            $(this).find('div').addClass('muvi_icon-addon muvi_addon-lg col-md-6');
            $(this).find('div').removeClass('col-sm-4');
            $(this).find('div').each(function(i) {
                if (i == 0) {
                    $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-envelope-o fa-left-10" aria-hidden="true"></i></label>').insertAfter("#postalcode");
                }
                if (i == 1) {
                    $('<label data-original-title="name" title="" rel="tooltip" for="email"><i class="fa fa-globe fa-left-10" aria-hidden="true"></i></label>').insertAfter("#country");
                }
            });
        }
    });
    $("div.payment_form").find('h3').addClass('muvi_title1');
    $('#muvi_cancel_now').prepend('<i class="fa fa-times muvi_padding-right-10" aria-hidden="true"></i>');
    $(".play-btn")
            .on("mouseenter", function() {
                $(".playbtn").show();
            })
            .on("mouseleave", function() {
                $(".playbtn").hide();
            });

    // jQuery sticky Menu

    $(".muvi_mainmenu-area").sticky({topSpacing: 0});

    $('.muvi_product-carousel').owlCarousel({
        loop: true,
        navigation: true,
        navigationText: ['<i class="fa fa-3x fa-chevron-left"></i>', '<i class="fa fa-3x fa-chevron-right"></i>'],
        margin: 20,
        responsiveClass: true,
        rewindNav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });

    $('.muvi_related-products-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    $('.muvi_brand-list').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });


    // Bootstrap Mobile Menu fix


    // jQuery Scroll effect
    /*   $('.navbar-nav li a, .scroll-to-up').bind('click', function(event) {
     var $anchor = $(this);
     var headerH = $('.header-area').outerHeight();
     $('html, body').stop().animate({
     scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
     }, 1200, 'easeInOutExpo');
     
     event.preventDefault();
     }); */
    // Bootstrap ScrollPSY
    /* $('body').scrollspy({ 
     target: '.navbar-collapse',
     offset: 95
     })*/


});

function showcart(id, flag){
    $('.loader_cart').show();
    var url = HTTP_ROOT+'/shop/addtocart';
    $.post(url, {'quantity':1, 'id':id}, function(res){
        if (flag == 2){
            window.location.href = '/shop/cart';
        } else{
			if(res=='currencyerror'){
				$('.loader_cart').hide();
				$("#muvi_addtocarterror").modal("show");
			}else{
				$('.loader_cart').hide();
				$('html,body').animate({scrollTop:0}, 500);
				$('#round-cart').html(eval($('#round-cart').html()) + 1);
			}
        }
    });
}

function initSlickSlider(currentObj){
    $(currentObj).not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
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

//views/blog/view.html  (start)
function blogViewLoad(postID){
    $('#muvi_loader_comment').show();
    $.ajax({
        url: "/blog/LoadCommentForm",
        data: "post_id="+postID,
        type: 'POST',
        success: function (data) {
            $('#muvi_loader_comment').hide();
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
//views/blog/view.html  (end)

//views/layouts/cookie_msg.html  (start)
function layoutsCookiemsgLoad(){
  var isshow = localStorage.getItem('isshow');
        if (isshow == null) {
            $("#muvi_cookieModal").show(); //ER-36352: Change position of cookie message in Frontend website
        }
        $(".muvi_accept_cookie").on("click", function(){
            $.post(setCookieUrl, {"cookieName": "showMessageForCookies", "cookieValue": 1}, function(res) {
                console.log("Cookie set successfully");
                localStorage.setItem('isshow', 1);
                $("#muvi_cookieModal").hide(); //ER-36352: Change position of cookie message in Frontend website
            });
        });   
        //ER-36352: Change position of cookie message in Frontend website
        $(".close_cookie").on("click", function(){
            $("#muvi_cookieModal").hide();
        });
        //ER-36352: Change position of cookie message in Frontend website
}

//views/layouts/cookie_msg.html  (end)

//views/layouts/mainmenu.html  (start)
function layoutsMainmenuLoad(){
   
     $('[rel="popover"]').popover({
    container: 'body',
        html: true,
        content: function () {
        var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
}
//views/layouts/mainmenu.html  (end)

//views/media/list.html  (start)
function mediaListload(){
    $("img.muvi_play_box_img").matchHeight();
    $(".muvi_play-box").matchHeight();
    $(".movie_name_title").matchHeight();
    $(".movie_genre_title").matchHeight();
    $(".caption").matchHeight();
    $.fn.matchHeight._update();
}
function mediaListDropdown(){
    $('.nav .dropdown').hover(function () {
      $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
       });
}
//views/media/list.html  (end)

//views/movie/show.html  (start)
function movieShowVideoContent(){
     $('.videocontent').hide();
     $('.playbtn').prepend('<i class="fa fa-play muvi_padding-right-10" aria-hidden="true"></i>');
}
//views/movie/show.html  (end)

//views/movie/showparent.html  (start)
function movieShowparentVideocontent(){
        $('.videocontent').hide();
        $("#episodes").on("click", ".muvi_multipart_child", function () {
            var title = $(this).parent().parent().find('.episode_title').html();
            // 22902: Generic|WE-Stream : story doesn't show in modal popup when click "more" (Jitendra K Sahoo) start
            var story = $(this).parent().parent().parent().find('.muvi_c-full-desc').html();
            // 22902: Generic|WE-Stream : story doesn't show in modal popup when click "more" (Jitendra K Sahoo) end
            $('#muvi_multipart_child_title').html($.trim(title));
            $('#muvi_multipart_child_story').html($.trim(story));
        });
}
//views/movie/showparent.html  (end)

//views/seasondata/index.html  (start)
     function seasondataIndexLoad(){
         $("img.muvi_play_box_img").matchHeight();
       $(".muvi_play-box").matchHeight();
       $(".movie_name_title").matchHeight();
       $(".movie_genre_title").matchHeight();
       $(".caption").matchHeight();
       $.fn.matchHeight._update();    
     }
//views/seasondata/index.html  (end)

//views/shop/cartpopup.html  (start)
    function removecart(id, cartid) {
        $('.loader_cart').show();
        var url = SITE_URL + '/shop/RemoveCart';
        $.post(url, {'id': id,'cartpopup':1}, function (res) {
            $('.loader_cart').hide();
            $('#round-cart').html(eval($('#round-cart').html()) - 1);
            $('#cartpopup').html(res);
        })
    }
//views/shop/cartpopup.html  (end)


//views/shop/itemlist.html  (start)

    function showcartItemlist(id, flag){
        $('.loader_cart').show();
        var url = SITE_URL + '/shop/addtocart';
        $.post(url, {'quantity':1, 'id':id}, function(res){
            if (flag == 2){
                window.location.href = BASE_URL + '/shop/cart';
            } else{
				if(res=='currencyerror'){
					$('.loader_cart').hide();
					$("#muvi_addtocarterror").modal("show");
				}else{
					$('.loader_cart').hide();
					$('html,body').animate({scrollTop:0}, 500);
					$('#round-cart').html(eval($('#round-cart').html()) + 1);
					$('#cartpopup').html(res);
				}
            }
        })
    }
    
//views/shop/itemlist.html  (end)


//views/shop/list.html  (start)

    function showcartLIst(id,flag){
        $('.loader_cart').show();
        var url = '/shop/addtocart';
        $.post(url,{'quantity':1,'id':id},function(res){
            if(flag==2){
                 window.location.href = BASE_URL + '/shop/cart';
            }else{
				if(res=='currencyerror'){
					$('.loader_cart').hide();
					$("#muvi_addtocarterror").modal("show");
				}else{
					$('.loader_cart').hide();
					$('html,body').animate({scrollTop:0}, 500);
					$('#round-cart').html(eval($('#round-cart').html())+1);
				}
            }    
        })
    }

//views/shop/itemlist.html  (end)

//views/shop/product_details.html  (start)

  function showcartProductDetails(id, flag){        
        var url = SITE_URL + '/shop/addtocart';
        var qnt = eval($('#muvi_product_qnt').val());
        if(qnt>0){
            $('.loader_cart').show();
            $.post(url, {'quantity':qnt, 'id':id}, function(res){
				if (flag == 2){
					window.location.href = BASE_URL +'/shop/cart';
				} else{
					if(res=='currencyerror'){
						$('.loader_cart').hide();
						$("#muvi_addtocarterror").modal("show");
					}else{
						$('.loader_cart').hide();
						$('html,body').animate({scrollTop:0}, 500);
						$('#round-cart').html(eval($('#round-cart').html()) + qnt);
						$('#cartpopup').html(res);
					}
                }
            })
        }else{
            alert('Enter Quantity');
        }        
    }
       function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
//views/shop/product_details.html  (end)

//views/tvguide/index.html  (end)

//views/user/cardinformation.html  (end)
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
            month_opt += '<option value="' + i + '" ' + selected + '>' + months[i-1] + '</option>';
        }
        $('#exp_month').html(month_opt);
    }
        function validateUserForm(is_redirect) {
        $('#card-info-error').hide();
        if(parseInt(is_redirect)) {
            var x = 1;
        }else{
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
      function showConfirmPopup(obj) {
        $("#paymentModal").modal('show');
        var header = $(obj).attr('data-header');
        var type = $(obj).attr('data-type');
        var header_lower = header.toLowerCase();
        $("#headermodal").text(header.charAt(0).toUpperCase() + header.slice(1) + " " + JSLANGUAGE.card + "?");
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

function userCardinformationLoad(){
    if ($('#bill_fname').length) {        
            $('#card_name').on('change', function () {
                var card_name_arr = $('#card_name').val().split(' ');
                var first_name = '';
                var last_name = '';
                if (card_name_arr.length >= 1) {
                    first_name = card_name_arr[0];
                    last_name = card_name_arr[card_name_arr.length-1];
                    console.log(first_name);
                    console.log(last_name);
                    $('#bill_fname').val(first_name);
                    $('#bill_lname').val(last_name);
                }
            });
        }
        $('input').attr('autocomplete', 'false');
        $('form').attr('autocomplete', 'false');

        $("#security_code").keydown(function(e) {
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
    //views/user/cardinformation.html  (end)
    
//views/user/ccavenue_payment_redirect.html  (start)
function userCcavenue_payment_redirect(){
    $('#loadingPopup').modal('toggle');
    $('#loadingPopup').modal('show');
    $("#muvi_redirect_ccavenue").submit();  
}

//views/user/ccavenue_payment_redirect.html  (end)

//views/user/corvus_payment_redirect.html  (start)
  
    function userCorvus_payment_redirect(){
        $('#loadingPopup').modal('toggle');
        $('#loadingPopup').modal('show');
        $("#muvi_redirect_corvus").submit(); 
    }
//views/user/corvus_payment_redirect.html  (end)

//views/user/mylibrary.html  (start)
function showSeason(movie_id,title,permalink){
            $('#muvi_headertitel').html(title);
            $('#permalink').val(permalink);
            $('#content_id').val(movie_id);
            var url = HTTP_ROOT + "/rest/fetchSeasons?authToken=" + STORE_AUTH_TOKEN + "&user_id=" + USER_ID +"&movie_id="+movie_id;
            $.post(url, function (res) {
                res = JSON.stringify(res);
                res = JSON.parse(res);
                var htmlval="";
                htmlval +='<select id="season" name="season" onchange="showeposide(this.value)" class="form-control form-control-border">';
                for(var j = 0; j < res.seasons.length; j++){
                     htmlval +='<option value="'+res.seasons[j].series_number+'">Season '+res.seasons[j].series_number+'</option>';               
                } 
                htmlval +='</select>';
                $('#seasons').html(htmlval);
                showeposide(res.seasons[0].series_number)
            });
            $("#muvi_seasonModal").modal('show');
        }
    
    function showeposide(series){
        var permalink= $('#permalink').val();
        var url = HTTP_ROOT + "/rest/episodeDetails?authToken=" + STORE_AUTH_TOKEN + "&user_id=" + USER_ID +"&lang_code=en&only_purchased=1&permalink="+permalink;
            $.post(url, function (data) {
                
            var limit = 100;
            var findEpisodesURL = HTTP_ROOT + "/content/FetchLibraryepisodes";
            xhr=$.ajax({
            method: "POST",
            url: findEpisodesURL,
            dataType: "json",
            data: {'movie_id': $('#content_id').val(), 'series': series, 'limit': limit,'userid':$('#userid').val(), 'viewlist': data.episode}
        }).done(function(res) {
           $("#episodes").html(res.msg);
        });
        });
    }
    //views/user/mylibrary.html  (end)
    
    //views/user/orderdetails.html  (start)
     function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    }
     //views/user/orderdetails.html  (end)
     
      //views/user/watchhistory.html  (start)
      function showSeason(movie_id,title){
            //var movie_id=$(this).val();
            var url = HTTP_ROOT + "/rest/fetchSeasons?authToken=" + STORE_AUTH_TOKEN + "&user_id=" + USER_ID +"&movie_id="+movie_id;
            $.post(url, function (res) {
                res = JSON.stringify(res);
                res = JSON.parse(res);
                var htmlval="";
                htmlval +='<select id="season" name="season" onchange="showeposide(this.value)" class="form-control form-control-border">';
                for(var j = 0; j < res.seasons.length; j++){
                     htmlval +='<option value="'+res.seasons[j].series_number+'">Season '+res.seasons[j].series_number+'</option>';               
                } 
                htmlval +='</select>';
                $('#seasons').html(htmlval);
                $('#muvi_headertitel').html(title);
                $('#content_id').val(movie_id);
                showeposide(res.seasons[0].series_number)
            });
            $("#muvi_seasonModal").modal('show');
        }
    
       function showeposide(series){
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
    //views/user/watchhistory.html  (end)
    
    //views/shop/cart.html  (start)
        function shopCartvalidator(){
           $.validator.addMethod('ph', function (value) {
                return /[0-9+()-]\d*$/.test(value);
            }, 'Use only numbers, +, -, (, )');
         
        }
       function removecart(id, cartid) {
        $('.loader_cart').show();
         var url = SITE_URL + '/shop/RemoveCart';
        $.post(url, {'id': id}, function (res) {
            //$('.loader_cart').hide();
            window.location.reload();
        })
    }
    
      function updatecart(id) {
        var qnt = $('#qnt_' + id).val();
        if (qnt > 0) {
            $('.loader_cart').show();
            var url = SITE_URL + '/shop/updateCart';
            $.post(url, {'id': id, 'update': 1, 'quantity': qnt}, function (res) {
                //$('.loader_cart').hide();
                window.location.reload();
            })
        } else {
            alert('Enter Quantity');
        }
    }
    
        function showpgdiv(divid) {
        $('#' + divid).show('slow');
        if (divid == 'payment_details') {
            if ($('#card_options').val() == '') {
                $('#cardinfo').show('slow');
            }
        }
        $('html, body').animate({'scrollTop': $('#' + divid).position().top});
    }
    
        function showcarddiv(carddiv, obj) {
        if ($(obj).val() == '') {
            $('#' + carddiv).show('slow');
        } else {
            $('#' + carddiv).hide('slow');
        }
    }
    
     function validateshiping(flag) {
        var validate = $("#shipingform").validate({
            rules: {
                'ship[address_name]': {
                    required: true
                },
                'ship[address]': {
                    required: true
                },
                'ship[phone_number]': {
                    required: true,
                    ph: true
                }
            }
        });
        var x = validate.form();
        if (x) {
            $('.loader_cart').show();
            $.ajax({
                url: SITE_URL + "/shop/saveaddrsession/flag/" + flag,
                data: $('#shipingform').serialize(),
                type: 'POST',
                success: function (data) {
                    if (data != '1') {
                        $('#parentaddress').html(data);
                    }
                    var divid = 'payment_details';
                    showpgdiv(divid);
                },
                complete: function () {
                    $('.loader_cart').hide();
                }
            });
        } else {
            $('.loader_cart').hide();
        }
    }
    
    function saveorder(browserreloadflag) {
        var validate = $("#payform").validate({
            rules: {
                "pay[card_name]": "required",
                "pay[card_number]": {
                    required: true,
                    number: true
                },
                "pay[exp_month]": "required",
                "pay[exp_year]": "required",
                "pay[security]": {
                    required: true,
                    minlength: 3
                }
            },
            messages: {
                "pay[card_name]": JSLANGUAGE.card_name_required,
                "pay[card_number]": {
                    required: JSLANGUAGE.card_number_required,
                    number: JSLANGUAGE.card_number_required
                },
                "pay[exp_month]": JSLANGUAGE.expiry_month_required,
                "pay[exp_year]": JSLANGUAGE.expiry_year_required,
                "pay[security]": {
                    required: JSLANGUAGE.security_code_required,
                    minlength: 'minimum 3 characters required'
                }
            },
            errorPlacement: function (error, element) {
                error.addClass('red');
                error.insertAfter(element);
            }
        });
        var x = validate.form();
        if (x) {
            browserreloadflag = 1;
            $.cookie("showshipingaddr", 0);
            $("#loadingPopup").modal('show');
            var url = SITE_URL + '/shop/saveorder';
            var data = $('#payform').serialize();
            $.post(url, {'data': data}, function (res) { 
                browserreloadflag = 0;
                $("#loadingPopup").modal('hide');
                if (res.isSuccess) {
                    $("#successPopup").modal('show');
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/shop/success';
                        return false;
                    }, 5000);
                } else {
                    if (typeof res.Message != 'undefined') {
                        $('#card-error').html(res.Message);
                    } else if (typeof res.response_text != 'undefined') {
                        var msg = JSLANGUAGE.transaction_not_processed + ' ' + JSLANGUAGE.valid_credit_card_number;
                        $('#card-error').html(msg);
                    }
                }
            }, 'json');
        } else {
            return false;
        }
    }
    
     function getMonthList(months) {
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
    
    
    function shopCartPayform(){
          /*$('#payform input:radio').click(function(){
         if($(this).val()==1){*/
        $('#payformdiv').show('slow');
        /*}else{
         $('#payformdiv').hide('slow');
         }
         });*/
        var user_id = USER_ID;
        if (user_id != '') {
            if ($.cookie('showshipingaddr') == 1) {
                $('#address_details').show('slow');
            }
            addressclick();
        }
    }
    
      function addressclick() {
        $('.plan-box').click(function () {
            $('.plan-box').removeClass('choosen');
            $(this).addClass('choosen');
            $('.tick-icon').hide();
            $(this).find('.tick-icon').show();
           $(this).find('.plan-box').addClass('choosen');
            $('#plan_id').val($(this).attr('data-id'));
        });
    }


 function post_comment(productstatus_errorflag) {
        var is_login = check_login();
        if (is_login) {
			if(productstatus_errorflag==1){
				$("#productstatuserror").modal("show");
				return false;
			}
            $.cookie("showshipingaddr", 0);
            showpgdiv('address_details');
        } else {
            $.cookie("showshipingaddr", 1);
        }
    }
    
    
    function check_login() {
        var user_id = USER_ID ;
        if (user_id != '') {
            return true;
        } else {
            $('#loginModal h4.modal-title').html(JSLANGUAGE.only_register_checkout);
            $("#login_link").click();
            return false;
        }
    }
    
     function deliveraddress(addressid, obj) {
        //if($(obj).find(".tick-icon").css('display')=='none'){
        $('.loader_cart').show();
        var url = SITE_URL + '/shop/DeliverAddress';
        $.post(url, {'data': addressid}, function (res) {
            $('.loader_cart').hide();
                   if(res==2){
                    alert("Shipping is not allowed to this country.");
                }else{
                    var divid = 'payment_details';
                    showpgdiv(divid);
                }  
          
        });
        //}        
    }
    
    
    function editaddress(addressid) {
        $('.loader_cart').show();
        $('#payment_details').hide();
        var url = SITE_URL + '/shop/EditAddress';
        $.post(url, {'data': addressid}, function (res) {
            $('.loader_cart').hide();
            $('#parentaddress').html(res);
            addressclick();
        });
    }
    
     
    function deleteaddress(addressid) {
        var x = confirm(JSLANGUAGE.delete_address);
        if (x) {
            $('.loader_cart').show();
            $('#payment_details').hide();
            var url = SITE_URL + '/shop/DeleteAddress';
            $.post(url, {'data': addressid}, function (res) {
                $('.loader_cart').hide();
                $('#parentaddress').html(res);
                addressclick();
            });
        }
    }
    
    function shownew() {
        $('#savedaddress').hide('slow');
        $('#address_div').show('slow');
    }
    
    
    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    
    function shopCartbeforeOnload(){
        window.addEventListener("beforeunload", function (e) {
            if (browserreloadflag) {

                var confirmationMessage = "Performing any action while payment is in progress will interrupt the payment. Please wait for order to complete.";
                //console.log(confirmationMessage);
                (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                return confirmationMessage;                            //Webkit, Safari, Chrome
            }
        }); 
    }
  
         //views/shop/cart.html  (end)
         
        //views/user/device.html  (start) 
         function openDeleteDevicePopup(obj) {
        $("#muvi_DeviceModal").modal('show');
        var id = $(obj).attr('data-id');
        var url = HTTP_ROOT + '/user/DeleteDevice';
        $('#muvi_devicebtn').click(function () {
            $('#muvi_device-loading').show();
            $.post(url, {id: id}, function (res) {
                if (res) {
                    $(obj).removeAttr('data-id');
                    $(obj).removeAttr('onClick');
                    $(obj).addClass('muvi_not-active');
                    $('#muvi_DeviceModal').modal('hide');
                }
                $('#muvi_device-loading').hide();
            });
        });
    }
    
    function userDeviceAddRemove(){
        $('.menu_item a').removeClass('active');
        $('.wrapper').addClass('muvi_has-not-sidebar');
        
    }
//views/user/device.html  (end)


//views/user/purchasehistory.html  (start) 
         
    function cancelitem(order_item_id,ordernumber){
        $('.loader_cart').show();
        var url = SITE_URL + '/shop/CancelItem';
            $.post(url, {'ordernumber': ordernumber,'order_item_id': order_item_id}, function (res) {                             
                if(res.isSuccess){
                    $('.loader_cart').hide();
                    $("#successPopup").modal('show');
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/user/purchaseHistory';
                        return false;
                    }, 5000);
                }else{
                    $('.loader_cart').hide();
                    $("#successPopupn").modal('show');
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/user/purchaseHistory';
                        return false;
                    }, 5000);
                }
                
            }, 'json');
    }      
 //views/user/purchasehistory.html  (end) 


 
         