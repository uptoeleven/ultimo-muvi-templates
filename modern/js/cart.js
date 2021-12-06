if (is_audio_enable == 1){
$('a.view_cart').attr('data-pjax', '#main');
        }

function showcart(id, flag){
	var variant = $.trim($(".variants_div").find("select, textarea, input").serialize());
        if (variant){
$('.loader_cart').show();
        $("#variable_error").hide();
        var checkvarianturl = HTTP_ROOT + '/shop/CheckVariantSku';
        $.post(checkvarianturl, {'variants':variant, 'id':id}, function(res){
        if (res == 'success'){
        newshowcart(id, flag);
        } else{
        $('.loader_cart').hide();
                $("#variable_error").show().html(JSLANGUAGE.variant_mismatch);
        }
        });
} else{
newshowcart(id, flag);
}
}
function newshowcart(id, flag){
var url = HTTP_ROOT + '/shop/addtocart';
        var qnt = eval($('#muvi_product_qnt').val());
        var reloadUrl = HTTP_ROOT + '/shop/cart';
        if (qnt == undefined){
var qnt = 1;
}
if (qnt > 0){
$('.loader_cart').show();
        $.post(url, {'quantity':qnt, 'id':id}, function(res){
        if (flag == 2){
        window.location.href = reloadUrl;
        } else{
        if (res == 'currencyerror'){
        $('.loader_cart').hide();
                $("#addtocarterror").modal("show");
        } else{
        $('.loader_cart').hide();
                $('html,body').animate({scrollTop:0}, 500);
                $('.muvi_round-cart').html(eval($('.muvi_round-cart').html()) + qnt);
                $('#cartpopup').html(res);
        }
        }
        })
} else{
alert(JSLANGUAGE.enter_quantity);
        $('.loader_cart').hide();
}
}
function isNumberKey(evt){
var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        return true;
        }
/*$(document).ready(function(){
 $( 'a.muvi_btn_view_trailer_inside' ).fancybox({
 'type' : 'iframe',
 'padding' : 0,
 'closeBtn': true,
 'width'  : 640,
 'height' : 360,
 'scrolling': false,
 'titleShow': false
 });
 
 });*/
function updatequan(inc_desc){
var val = $('.muvi_c-item-1').val();
        if (parseInt(inc_desc) == 1){
var sum = parseInt(val)++;
} else{
var sum = parseInt(val)--;
}
if (parseInt(sum) >= 0){
$('#muvi_product_qnt').val(sum);
}
}
