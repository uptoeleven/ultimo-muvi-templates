var typingTimer;
    var doneTypingInterval = 1000;
    $(document).ready(function(){
        $('.muvi_search-faq').keyup(function(){
            $('#loader').show();
            clearTimeout(typingTimer);
            if ($('.muvi_search-faq').val) {
               doneTyping();
            }
        }); 
        $('.faq_data').on('click','.showmore',function(){
            $('#loader').show();
            var faq_id = $(this).data('id');
            var url = "/faqs/search";
            $.ajax({
                url: url,
                data:{"faq_id":faq_id},
                method: "post",
                success: function (result) {
                   $('.faq_data').html(result);
                   $('#loader').hide();
                }
            });
        });
    });
    function doneTyping () {
        var searchtext = $('.muvi_search-faq').val();
        var url = "/faqs/search";
        $.ajax({
            url: url,
            data:{"searchtext":searchtext},
            method: "post",
            success: function (result) {
               $('.faq_data').html(result);
               $('#loader').hide();
            }
        });
    }

