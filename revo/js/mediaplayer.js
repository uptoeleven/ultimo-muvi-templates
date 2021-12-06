$(document).ready(function(){
    //29923[One Player Close Button start]
    document.getElementById('player_close').onclick = function(){
        $('.butn-mode-toggle').trigger('click');       
        globalAudio.currentTime =0;
        globalAudio.pause();
        $('#ap .play-section .ap__controls._play').removeClass("is-playing");
    };
    //29923[One Player Close Button end]
    document.getElementById("vdo-ifraim").onload = function() {
        var DRMresolution= document.getElementById("vdo-ifraim").contentWindow.DRMresolution;//28617[rasmi]
        if(this.contentWindow.error_flag==0){/*//29976 [start][rasmiranjan]*/
            return false;
        }
        if(this.contentWindow.player){//28617[rasmi]
            //29923[One Player Close Button start]
            var myPlayerDOM = document.getElementById("vdo-ifraim");            
            if(!$("#ap").hasClass("_vdo-on")){//29976
                var restrictDeviceval= document.getElementById("vdo-ifraim").contentWindow.restrictDeviceId;
                removeRestrictDevice(restrictDeviceval);
            } //29976     
             if($("#ap").hasClass("_mplay-on")){//29976 
                $(myPlayerDOM).contents().find('#video-player .common-css').addClass('hide');
                $(myPlayerDOM).contents().find('#closeButton').addClass('hide');
            } //29976 
            $(myPlayerDOM).contents().find('.close-style').on('click',function(){
                $('.butn-mode-toggle').trigger('click');        
                globalAudio.currentTime =0;
                globalAudio.pause(); 
                var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;
                $('#ap .play-section .ap__controls._play').removeClass("is-playing");
                if(!myPlayer.paused()){               
                         globalAudio.pause(); 
                         myPlayer.pause();   
                         $('#ap .play-section .ap__controls._play').removeClass("is-playing");
                     }
             });//29923[One Player Close Button end]
        if (typeof DRMresolution !== "undefined" && DRMresolution==0) {
          $('#musicQualityID').hide();
        }//28617[rasmi]
            this.contentWindow.player.ready(function() {
                if(!$("#ap").hasClass("_vdo-on")){//29976  
                    document.getElementById("vdo-ifraim").contentWindow.second_media_audio_play =1;//29976 
                    var restrictDeviceval= document.getElementById("vdo-ifraim").contentWindow.restrictDeviceId;
                    removeRestrictDevice(restrictDeviceval);
                } //29976  
                var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;
                if($('#ap').hasClass('_vdo-on')){
                    initVolumeCtrl();
                }
                myPlayer.currentTime(0);
                if($('#ap').hasClass('_vdo-on')){
                    myPlayer.play();
                $('#ap .play-section .ap__controls._play').addClass("is-playing");//28617[rasmi]
                 if (typeof DRMresolution !== "undefined" && DRMresolution==0) {
                    $('#musicQualityID').hide();
                 }//28617[rasmi]
                }else{
                    myPlayer.pause();
                $('#musicQualityID').show();//28617[rasmi]
                }
                myPlayer.on("play", function(){
                    if($('#ap').hasClass('_vdo-on')){
                        $('#ap .play-section .ap__controls._play').addClass("is-playing");
                    }else{
                        myPlayer.pause();
                    }
                })
                myPlayer.on("pause", function(){
                    if($('#ap').hasClass('_vdo-on'))
                        $('#ap .play-section .ap__controls._play').removeClass("is-playing");
                })
                myPlayer.on("ended", function(){
                    if($('#ap').hasClass('_vdo-on')){
                        if(globalAudio.loop){
                            globalAudio.currentTime = 0;
                            globalAudio.pause();
                            myPlayer.play()
                        }else{
                            globalAudio.currentTime = myPlayer.currentTime();
                            globalAudio.play();
                        }
                    }
                })
                myPlayer.on("timeupdate", function(){
                    //28617[rasmi]
                    var currentTime = myPlayer.currentTime().toFixed(0);
                    var remainingTime = myPlayer.remainingTime();
                    remainingTime = remainingTime.toFixed(0);
                    if((remainingTime == 0) && currentTime >= 4 ){
                    if($('#ap').hasClass('_vdo-on')){
                                if(globalAudio.loop){
                                    globalAudio.currentTime = 0;
                                    globalAudio.pause();
                                    myPlayer.play()
                                }else{
                        globalAudio.currentTime = myPlayer.currentTime();
                                    globalAudio.play();
                    }
                            }
                    }
                    //28617[rasmi]
                })
           });
       }
    };

    $('.butn-mini-play').on('click', function(){
        var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;
        $('#ap').addClass("_mplay-on");
        myPlayer.controls(false);
        var myPlayerDOM = document.getElementById("vdo-ifraim");
        //29923[One Player Close Button start]
        $(myPlayerDOM).contents().find('#video-player .common-css').addClass('hide');
        $(myPlayerDOM).contents().find('#closeButton').addClass('hide');
        //29923[One Player Close Button end]
    });
   
    $('#ap .vdo-frm').on('click', function(){
       if($('#ap').hasClass("_mplay-on")){
           var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;
           $('#ap').removeClass("_mplay-on");
           myPlayer.controls(true);
           var myPlayerDOM = document.getElementById("vdo-ifraim");
           //29923[One Player Close Button end]
           $(myPlayerDOM).contents().find('#video-player .common-css').removeClass('hide');
           $(myPlayerDOM).contents().find('#closeButton').removeClass('hide');
           //29923[One Player Close Button end]
       }
    });
   
    $('.butn-mode-toggle').on('click', function(){
        
        var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;
        var DRMresolution= document.getElementById("vdo-ifraim").contentWindow.DRMresolution;//28617[rasmi]
        $('#ap').toggleClass("_vdo-on");
        if(myPlayer){/*//29976 [start][rasmiranjan]*/
              var restrictDeviceval= document.getElementById("vdo-ifraim").contentWindow.restrictDeviceId;
              var restrictStream_id= document.getElementById("vdo-ifraim").contentWindow.stream_id;             
            if($('#ap').hasClass('_vdo-on')){
                document.getElementById("vdo-ifraim").contentWindow.second_media_audio_play =0;//29976  
                checkStreamingRestriction(restrictDeviceval,restrictStream_id);
                myPlayer.currentTime(globalAudio.currentTime);
                if(globalAudio.paused){
                   myPlayer.pause();
                }else{
                   myPlayer.play();
                   globalAudio.pause();
                }
                if (typeof DRMresolution !== "undefined" && DRMresolution==0) {//28617[rasmi]
                    $('#musicQualityID').hide();
                 }//28617[rasmi]
                initVolumeCtrl();
            }else{
                document.getElementById("vdo-ifraim").contentWindow.second_media_audio_play =1;//29976  
                removeRestrictDevice(restrictDeviceval);/*//29976 [start][rasmiranjan]*/
                globalAudio.currentTime = myPlayer.currentTime();
                if(!myPlayer.paused()){
                   myPlayer.pause();
                   $('#ap .play-section .ap__controls.ap__controls--toggle').trigger('click');
                   $('#musicQualityID').show();//28617[rasmi]
                }else{
                   globalAudio.pause();
                }
                if (typeof DRMresolution !== "undefined" && DRMresolution==0) {//28617[rasmi]
                    $('#musicQualityID').hide();
                 }
                 
            }
        }
   })
   
   $('#ap .play-section .ap__controls._play').on('click', function(e){
       
        $(this).toggleClass("is-playing");

        var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;

        if($(this).hasClass('is-playing')){
            if(myPlayer && $('#ap').hasClass('_vdo-on'))
               myPlayer.play();
            else{
               $('#ap .play-section .ap__controls.ap__controls--toggle').trigger('click');
            }
        }else{
            if(myPlayer){
                myPlayer.pause(); 
            }
            globalAudio.pause();                   
       }
   });

});
function adjustVDOVolume(cVolume){
   var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;
   myPlayer.volume(cVolume);
}
function adjustVDOTime(cTime){
   var myPlayer = document.getElementById("vdo-ifraim").contentWindow.player;
   myPlayer.currentTime(cTime);
}
function triggetVdoResolution(cObj){
    var myPlayerDOM = document.getElementById("vdo-ifraim");
    cIndex = $(cObj).prevAll('li').size(); 
    $(myPlayerDOM).contents().find('.vjs-resolution-button ul li').eq(cIndex).trigger("click");
}
function initVolumeCtrl(){
    var myPlayerDOM = document.getElementById("vdo-ifraim");
    if($(myPlayerDOM).contents().find('.vjs-resolution-button').length){
        $("#videoResolutionOpt ul").html("");
        $(myPlayerDOM).contents().find('.vjs-resolution-button ul li').each(function(){
            var optValue = $(this).html().replace('<span class="vjs-control-text">Full Screen</span>', '');
            $("#videoResolutionOpt ul").append('<li onclick="triggetVdoResolution(this)"><strong class="c-font-white">'+optValue+'</strong></li>');
        });
        $('#ap').addClass("isVdoResolution");
    } 
}
/*Function to remove Restrict Device //29976 [start][rasmiranjan]*/
function removeRestrictDevice(device_id){
    var deleteRestrictDeviceUrl = HTTP_ROOT + "/videoLogs/deleteDataFromRestrictDevice/";
    $.ajax({
        type: "POST",
        url: deleteRestrictDeviceUrl,
        async:false,
        data: {'id':device_id},
        success: function (res) {
        }
        });
    }
/*Function to add Restrict Device //29976 [start][rasmiranjan]*/
function addRestrictDevice(device_id,stream_id){
    var addRestrictDeviceUrl = HTTP_ROOT + "/videoLogs/addDataToRestrictDevice/";
    $.ajax({
        type: "POST",
        url: addRestrictDeviceUrl,
        async:false,
        data: {'id':0,'movie_stream_id':stream_id},
        success: function (res) {
            if(res != ''){
               document.getElementById("vdo-ifraim").contentWindow.restrictDeviceId = res;               
            }
        }
        });
    }
/*Function to check Restrict Device //29976 [start][rasmiranjan]*/
function checkStreamingRestriction(restrictDeviceval,stream_id){
    var restrictDeviceUrl = HTTP_ROOT + "/site/streamingRestrictionStatus/";
    $.post(restrictDeviceUrl,{'movie_stream_id':stream_id},function(res){
            if(res==1){             
             var currentURL=document.getElementById("vdo-ifraim").contentWindow.location.href;
              $('.vdo-frm #vdo-ifraim').prop('src',currentURL);
            }else{
                 addRestrictDevice(restrictDeviceval,stream_id);
            }
            
        });
}