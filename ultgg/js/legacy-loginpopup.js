var reload = 0;
var login_object = '';
var isGuestUser = 0;
var guestDownloadType = 0;
function loader(selector, status) {
    if ($(selector).length > 0) {
        if (status == true)
            $(selector).show();
        else
            $(selector).hide();
    }
}
function playMovie(obj) {
    if (typeof (obj) == "undefined") {
        var permalink = $('#content-permalink').val();
        var stream_id = $('#stream_id').val();
        if (stream_id !== '') {
            permalink = permalink + '/stream/' + stream_id;
        }
    } else {
        var permalink = $(obj).attr("data-content-permalink");
    }
    var url = HTTP_ROOT + "/" + Player_Page + "/" + permalink;

    var tmedia = 2;
    var datatargetmedia = $(obj).attr('data-targetmedia');
    if (typeof datatargetmedia !== typeof undefined && datatargetmedia !== false) {
        tmedia = datatargetmedia;
    }

    if (supportOptionalContent) {
        playVideoNew(permalink, tmedia);
    } else {
        window.location.href = url;
    }
}
function download_content(obj) {
    var ctype = $(obj).attr("data-ctype");
    if (typeof (obj) == "undefined") {
        var permalink = $('#content-permalink').val();
    } else {
        var permalink = $(obj).attr("data-content-permalink");
    }
    if (parseInt(ctype) == 6) {
        var purl = HTTP_ROOT + "/user/DownloadMultipartContent/vlink/" + permalink;
        $.post(purl, function (downloadarray) {
            var jsonarray = jQuery.parseJSON(downloadarray);
            if (jsonarray.error) {
                if (jsonarray.errorType !== typeof undefined && jsonarray.errorType == 'guestuser') {
                    location.reload();
                } else {
                    alert("Download not accomplished!!");
                    window.setTimeout(function () {
                        location.reload()
                    }, 2000);
                }
            } else {
                $('.loader_download').show().delay(15000).fadeOut();    // ER: 21403
                $.each(jsonarray, function (key, value) {
                    download_files([{download: value}]);
                });
            }
        });
    } else {
        var url = HTTP_ROOT + "/user/DownloadContent/vlink/" + permalink;
//        window.location.href = url;
        window.open(url, '_blank');
    }
}
function showPpvPlans(obj, onCloseNotRefresh) {
    if (typeof (onCloseNotRefresh) === "undefined") {
        onCloseNotRefresh = 0;
    } else {
        onCloseNotRefresh = 1;
    }
    var purchase_type = "show";
    var movie_id = $(obj).attr("data-movie_id");
    var isppv = 0;
    var is_ppv_bundle = 0;
    var isadv = 0;

    isadv = $(obj).attr('data-isadv');
    if (typeof isadv !== typeof undefined && isadv !== false) {

    } else {
        isppv = $(obj).attr('data-isppv');
        is_ppv_bundle = $(obj).attr('data-is_ppv_bundle');
        isadv = 0;
    }

    var url = HTTP_ROOT + "/userMonetizationPlans/getMonetizationMethods";
    $.post(url, {'movie_id': movie_id, 'purchase_type': purchase_type, 'isppv': isppv, 'is_ppv_bundle': is_ppv_bundle, 'isadv': isadv, 'onCloseNotRefresh': onCloseNotRefresh}, function (res) {
        if (parseInt(res) === 1) {
            var permalink = $(obj).attr("data-content-permalink");
            var purl = HTTP_ROOT + "/" + Player_Page + "/" + permalink;
            if (supportOptionalContent) {
                playVideoNew(permalink, 2);
            } else {
                window.location.href = purl;
            }
        } else {
            reload = 1;
            $("#ppvModal").html(res).modal('hide');
            $('#loader').hide();
            if (parseInt(is_plan_error)) {
                $("#ppvModal").html(res).modal('show');
                $('#loader-ppv').hide();
            }
        }
    });
}

function getVoucherGeneralInfoGuest(obj, onCloseNotRefresh) {
    if (typeof (onCloseNotRefresh) === "undefined") {
        onCloseNotRefresh = 0;
    } else {
        onCloseNotRefresh = 1;
    }
    $('#loader').show();
    var purchase_type = "show";
    var isppv = 0;
    var is_ppv_bundle = 0;
    var isadv = 0;
    var movie_id;
    var season;
    var permalink;
    var url = HTTP_ROOT + "/userVoucher/GetVoucherDownloadContentGuest";

    movie_id = $(obj).attr("data-movie_id");
    permalink = $(obj).attr("data-content-permalink");
    isadv = $(obj).attr('data-isadv');
    isppv = $(obj).attr('data-isppv');
    is_ppv_bundle = $(obj).attr('data-is_ppv_bundle');
    purchase_type = $(obj).attr('data-purchase_type');
    if (typeof purchase_type !== typeof undefined && purchase_type !== false) {
        if (purchase_type === "season" && $("#series").length) {
            season = $("#series").val();
            if (parseInt(season)) {
                permalink += "/season/" + season;
            }
        }
    }
    var purl = HTTP_ROOT + "/user/DownloadContent/vlink/" + permalink;
    $.post(url, {'movie_id': movie_id, 'season': season, 'purchase_type': purchase_type, 'isppv': isppv, 'is_ppv_bundle': is_ppv_bundle, 'isadv': isadv, 'onCloseNotRefresh': 1}, function (res) {
        if (parseInt(res) === 1) {
            if ($("#generalInfoModal").length > 0) {
                $("#generalInfoModal").modal('hide');
                $('#loader').hide();
            }
            window.location.href = purl;
        } else {
            if ($("#generalInfoModal").length > 0) {
                $("#generalInfoModal").modal('hide');
                $('#loader').hide();
            }
            $("#ppvModal").html(res).modal('show');
            $('#loader').hide();
        }
    });
}

function getVoucherGeneralInfo(guest_id) {
    if (typeof (onCloseNotRefresh) === "undefined") {
        onCloseNotRefresh = 0;
    } else {
        onCloseNotRefresh = 1;
    }
    $('#loader').show();
    var purchase_type = "show";
    var isppv = 0;
    var is_ppv_bundle = 0;
    var isadv = 0;
    var movie_id;
    var season;
    var permalink;
    var url = HTTP_ROOT + "/userVoucher/GetVoucherDownloadContent";
    var movie_id = $('#movie_id').val();
    var permalink = $('#content-permalink').val();
    if ($('#season_id').length) {
        purchase_type = "season";
        season = $('#season_id').val();
        if (parseInt(season)) {
            permalink += "/season/" + season;
        }
    }
    if ($("#isadv").length) {
        isadv = $("#isadv").val();
    }
    if ($("#is_ppv_bundle").length) {
        is_ppv_bundle = $("#is_ppv_bundle").val();
    }
    var purl = HTTP_ROOT + "/user/DownloadContent/vlink/" + permalink;
    $.post(url, {'guest_id': guest_id, 'movie_id': movie_id, 'season': season, 'purchase_type': purchase_type, 'isppv': isppv, 'is_ppv_bundle': is_ppv_bundle, 'isadv': isadv, 'onCloseNotRefresh': 1}, function (res) {
        if (parseInt(res) === 1) {
            if ($("#generalInfoModal").length > 0) {
                $("#generalInfoModal").modal('hide');
                $('#loader').hide();
            }
            window.location.href = purl;
        } else {
            if ($("#generalInfoModal").length > 0) {
                $("#generalInfoModal").modal('hide');
                $('#loader').hide();
            }
            $("#ppvModal").html(res).modal('show');
            $('#loader').hide();
        }
    });
}

//Play Library User Content without any Monetisation Check
function libraryUserPricing(obj) {
    console.log('libraryUserPricing');
    var permalink = '';
    if (typeof (obj) === "undefined") {
        var id = $('#movie_stream_id').val();
        var movie_id = $('#movie_id').val();
        var content_type = $('#content-type').val();
        var permalink = $('#content-permalink').val();

        if ($('#stream_id').length && $('#stream_id').val()) {
            var stream_id = $('#stream_id').val();
            permalink += '/stream/' + $('#stream_id').val();
        }
    } else {
        var movie_id = $(obj).attr("data-movie_id");
        var permalink = $(obj).attr("data-content-permalink");
        var stream_id = $.trim($(obj).attr("data-stream_id"));/*42536*/
        var content_type = $(obj).attr('data-ctype');
        if (stream_id) {
            permalink += '/stream/' + stream_id;
        }
    }
    var url = HTTP_ROOT + "/userMonetizationPlans/getLibraryUserPrice";
    $.ajax({
        url: url,
        data: {'movie_id': movie_id, 'stream_id': stream_id, 'permalink': permalink, 'content_type': content_type},
        method: "post",
        dataType: "json",
        async: false,
        success: function (res) {
            console.log('priceAjax', res);
            if (res.status == 'success') {
                $.ajax({
                    url: HTTP_ROOT + "/userMonetizationPlans/libraryPrecheckout",
                    method: "post",
                    dataType: "json",
                    async: true,
                    beforeSend: function () {
                        $('#loader').show();
                    },
                    success: function (ress) {
                        $('#loader').hide();
                        if (ress.status == 'success') {
                            $(".precheckout_response_price").html(ress.response_price);
                            $(".precheckout_response_price_value").val(ress.response_price);/*42536*/
                            $(".precheckout_response_feedback").html(ress.response_feedback);
                            if(ress.response_url){/*44062*/
                                $(".precheckout_response_url").attr("href", ress.response_url);
                            } else {
                                $('.precheckout_response_url').contents().unwrap();
                            }/*44062*/
                            $('#hidden_librarypermalink').val(permalink);
                            $('#precheckout-success-modal').modal('show');
                        } else {
                            $(".precheckout_response_feedback").html(ress.response_feedback);
                            if(ress.response_url){/*44062*/
                                $(".precheckout_response_url").attr("href", ress.response_url);
                            } else {
                                $('.precheckout_response_url').contents().unwrap();
                            }/*44062*/
                            $('#precheckout-failure-modal').modal('show');
                        }
                    }
                });
                //window.location.href = HTTP_ROOT + "/" + Player_Page + "/" + permalink;
            } else {
                if (res.status == 'play') { /*42536*/
                    window.location.href = HTTP_ROOT + "/" + Player_Page + "/" + permalink;
                } else {
                    window.location = HTTP_ROOT + '/';
                }/*42536*/
            }
        }
    });
}

function getPpvPlans(obj, onCloseNotRefresh) {
    if (typeof (onCloseNotRefresh) === "undefined") {
        onCloseNotRefresh = 0;
    } else {
        onCloseNotRefresh = 1;
    }
    $('#loader').show();
    var purchase_type = "show";
    var id;
    var isppv = 0;
    var is_ppv_bundle = 0;
    var isadv = 0;
    var movie_id;
    var season;
    var permalink;
    var download_type = guestDownloadType;
    var content_type;
    if (typeof (isGuestUser) === "undefined") {
        var isGuestUser = window.isGuestUser;
    }

    var can_download = $(obj).attr("data-download");
    if (can_download != 0){
        $('<input type="hidden" id="downloadVal" value="'+$.trim($("#isDownload").val())+'">').insertAfter(".playbtn");
    }

    var url = HTTP_ROOT + "/userMonetizationPlans/getMonetizationMethods";
    if (typeof (obj) === "undefined") {
        var id = $('#movie_stream_id').val();
        var movie_id = $('#movie_id').val();
        content_type = $('#content-type').val();
        var permalink = $('#content-permalink').val();
        if ($('#stream_id').length && $('#stream_id').val()) {
            permalink += '/stream/' + $('#stream_id').val();
        }
        if ($('#season_id').length && $('#season_id').val()) {
            purchase_type = "season";
            season = $('#season_id').val();
            if (parseInt(season)) {
                permalink += "/season/" + season;
            }
        }
        /*if(typeof isGuestUser !== typeof undefined && isGuestUser===1){
         permalink += "/is_guest_user/" + isGuestUser;
         }*/
        if ($("#isppv").length && $.trim($("#isppv").val())) {
            isppv = $("#isppv").val();
        }
        if ($("#isadv").length) {
            isadv = $("#isadv").val();
        }
        if ($("#is_ppv_bundle").length) {
            is_ppv_bundle = $("#is_ppv_bundle").val();
        }
    } else {
        id = $(obj).attr("data-id");
        movie_id = $(obj).attr("data-movie_id");
        permalink = $(obj).attr("data-content-permalink");
        var stream_id = $.trim($(obj).attr("data-stream_id"));
        isadv = $(obj).attr('data-isadv');
        isppv = $(obj).attr('data-isppv');
        content_type = $(obj).attr('data-ctype');
        is_ppv_bundle = $(obj).attr('data-is_ppv_bundle');
        purchase_type = $(obj).attr('data-purchase_type');
        if (typeof purchase_type !== typeof undefined && purchase_type !== false) {
            if (purchase_type === "season" && $("#series").length) {
                season = $("#series").val();
                if (parseInt(season)) {
                    permalink += "/season/" + season;
                }
            }
            if (stream_id) {
                permalink += '/stream/' + stream_id;
            }
        }
        if ($(obj).attr("data-is_guest_user")) {
            var isGuestUser = $(obj).attr("data-is_guest_user");
        }
    }

    var is_instafeez = 0;

    if (PAYMENT_GATEWAY === 'instafeez' && parseInt(content_type) !== 3) {
        is_instafeez = 1;
    }

    if ((typeof ($(obj).attr('data-download')) !== typeof undefined && ($(obj).attr('data-download')) !== false) || (isGuestUser === 1 && download_type != 0) || $.trim($("#isDownload").val())) {
        if (isGuestUser) {
            permalink += "/is_guest_user/" + isGuestUser;
        }
        if ($(obj).attr('data-download')) {
            download_type = $(obj).attr('data-download');
        }
        if (parseInt(content_type) == 6) {
            var purl = HTTP_ROOT + "/user/DownloadMultipartContent/vlink/" + permalink;
        } else {
            var purl = HTTP_ROOT + "/user/DownloadContent/vlink/" + permalink;
        }
    } else {
        var purl = HTTP_ROOT + "/" + Player_Page + "/" + permalink;
    }
    var datatargetmedia = $(obj).attr('data-targetmedia');
    var tmedia = ((parseInt(content_type) == 1) || (parseInt(content_type) == 3)) ? 2 : 0;
    if (typeof datatargetmedia !== typeof undefined && datatargetmedia !== false) {
        tmedia = datatargetmedia;
    }
    // console.log('getPpvPlans---' + purl);
    //ER 27707 Start . Only set async value false for Mac and Iphone Safari browser
    /*
    $.post(url, {'download_type': download_type, 'movie_id': movie_id, 'season': season, 'purchase_type': purchase_type, 'instafeez': is_instafeez, 'isppv': isppv, 'is_ppv_bundle': is_ppv_bundle, 'isadv': isadv, isGuestUser: isGuestUser, 'onCloseNotRefresh': 1}, function (res) {
        if (parseInt(res) === 1) {
            if (parseInt(content_type) == 5 && parseInt(download_type) == 0) {
                playAudioNew(id, tmedia);
            } else if (parseInt(content_type) == 6 && parseInt(download_type) == 0) {
                playMultipartAudio(id, 0);
            } else {
                if (parseInt(content_type) == 6) {
                    $.post(purl, function (downloadarray) {
                        var jsonarray = jQuery.parseJSON(downloadarray);
                        if (jsonarray.error) {
                            if (jsonarray.errorType !== typeof undefined && jsonarray.errorType == 'guestuser') {
                                location.reload();
                            } else {
                                alert("Download not accomplished!!");
                                window.setTimeout(function () {
                                    location.reload()
                                }, 2000);
                            }
                        } else {
                            $('.loader_download').show().delay(15000).fadeOut(); // ER: 21403
                            $.each(jsonarray, function (key, value) {
                                download_files([{download: value}]);
                            });
                        }
                    });
                } else {
                    if (supportOptionalContent) {
                        playVideoNew(permalink, tmedia);
                    } else {
                        window.location.href = purl;
                    }
                }
            }
        } else {
            if ($("#loginModal").length > 0) {
                $("#loginModal").modal('hide');
                $('#loader').hide();
            }
            if (PAYMENT_GATEWAY === 'instafeez' && parseInt(content_type) !== 3) {
                var obj = new instafeez();
                obj.processCard(res);
            } else {
                reload = 1;
                $("#ppvModal").html(res).modal('hide');
                $('#loader').hide();

                if (parseInt(is_plan_error)) {
                    $("#ppvModal").html(res).modal('show');
                    $('#loader-ppv').hide();
                }
            }
        }
     });*/
    $.ajax({
        url: url,
        data: {'download_type': download_type, 'movie_id': movie_id, 'season': season, 'purchase_type': purchase_type, 'instafeez': is_instafeez, 'isppv': isppv, 'is_ppv_bundle': is_ppv_bundle, 'isadv': isadv, isGuestUser: isGuestUser, 'onCloseNotRefresh': 1, 'onMonetizationCheck': 1,'download_data': $("#downloadVal").val()},
        method: "post",
        async: false,
        success: function (res) {

            console.log("Test ..");

            console.log(res);

            if(parseInt(res) === 10) {
                window.location.href = HTTP_ROOT+'/user/activate';
            }
            if (parseInt(res) === 1) {
                if (parseInt(content_type) == 5 && parseInt(download_type) == 0) {
                    playAudioNew(id, tmedia);
                } else if (parseInt(content_type) == 6 && parseInt(download_type) == 0) {
                    playMultipartAudio(id, 0);
                } else {
                    if (parseInt(content_type) == 6) {
                        $.post(purl, function (downloadarray) {
                            var jsonarray = jQuery.parseJSON(downloadarray);
                            if (jsonarray.error) {
                                if (jsonarray.errorType !== typeof undefined && jsonarray.errorType == 'guestuser') {
                                    location.reload();
                                } else {
                                    alert("Download not accomplished!!");
                                    window.setTimeout(function () {
                                        location.reload()
                                    }, 2000);
                                }
                            } else {
                                $('.loader_download').show().delay(15000).fadeOut(); // ER: 21403
                                $.each(jsonarray, function (key, value) {
                                    download_files([{download: value}]);
                                });
                            }
                        });
                    } else {
                        if (supportOptionalContent) {
                            playVideoNew(permalink, tmedia);
                        } else {
                            if(download_type || $("#downloadVal").val()){ //39375
                                window.open(purl, '_blank');
                            }else{
                                //49098 starts
                                //console.log('redirect: '+purl);
                                //window.location.href = purl;
                                //return false;
                                //46095 starts
                                setTimeout(function () {
                                    window.location.href = purl;
                                }, 500);
                                return false;
                                //46095 ends
                                //49098 ends
                            }
                            if($('#content-permalink').val() != undefined){
                                window.location = HTTP_ROOT + '/' + $('#content-permalink').val();
                            }
                        }
                    }
                }
            } else {
                //52108
                if ($('#sso_with_miniorange_shopify_recharge').val() !== typeof undefined && $('#sso_with_miniorange_shopify_recharge').val() == 1) {
                    $("#recharge-subscribe-modal").modal('show');
                } else { //52108
                    if ($("#loginModal").length > 0) {
                        $("#loginModal").modal('hide');
                        $('#loader').hide();
                    }
                    if (PAYMENT_GATEWAY === 'instafeez' && parseInt(content_type) !== 3) {
                        var obj = new instafeez();
                        obj.processCard(res);
                    } else {
                        reload = 1;
                        $("#ppvModal").html(res).modal('hide');
                        $('#loader').hide();

                        if (parseInt(is_plan_error)) {
                            $("#ppvModal").html(res).modal('show');
                            $('#loader-ppv').hide();
                        }
                    }
                }//52108
            }
        }
    });
    //ER 27707 End
}

function download_files(files) {
    function download_next(i) {
        if (i >= files.length) {
            return;
        }
        var url = files[i].download;
        var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xhr.response);
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            delete a;
        };
        xhr.send();
        setTimeout(function () {
            window.URL.revokeObjectURL(xhr.response);
        }, 100); // cleanup
        setTimeout(function () {
            download_next(i + 1);
        }, 500);
    }
    // Initiate the first download.
    download_next(0);
}

function episodeplayMovie(obj) {
    $('#loader').hide();
    if (typeof (obj) == "undefined") {
        var movie_id = $('#movie_id').val();
        var stream_id = $('#stream_id').val();
        var permalink = $('#content-permalink').val();
    } else {
        var movie_id = $(obj).attr("data-movie_id");
        var stream_id = $.trim($(obj).attr("data-stream_id"));
        var permalink = $(obj).attr("data-content-permalink");
    }
    var fseasonID = $(obj).attr("data-season_id");
    var SeasonID = '';
    var sId = '';
    if ($("#series").val()) {
        var season = $("#series").val();
        SeasonID = '/season/' + season;
        sId = season;
    } else {
        SeasonID = '/season/' + fseasonID;
        sId = fseasonID;
    }
    if (stream_id !== '') {
        if (supportOptionalContent) {
            if(content_type==3){//32446
                playAllVideoAuto(permalink, 2, stream_id,0,index_val);
            }else{
                playVideoNew(permalink, 2, stream_id, sId);
            }

        } else {
            window.location.href = HTTP_ROOT + "/" + Player_Page + "/" + permalink + '/stream/' + stream_id + SeasonID;
        }
    } else {
        if (supportOptionalContent) {
            if(content_type==3){//32446
                playAllVideoAuto(permalink, 2, stream_id,0,index_val);
            } else {
                playVideoNew(permalink, 2, stream_id, sId);
            }
        } else {
            window.location.href = HTTP_ROOT + '/Player_Page/' + permalink;
        }
    }
}

function episodegetPpvPlans(obj, onCloseNotRefresh) {
    if (typeof (onCloseNotRefresh) === "undefined") {
        onCloseNotRefresh = 0;
    } else {
        onCloseNotRefresh = 1;
    }
    $('#loader').show();
    var purchase_type = "episode";
    var url = HTTP_ROOT + "/userMonetizationPlans/getMonetizationMethods";
    var isppv = 0;
    var is_ppv_bundle = 0;
    var movie_id;
    var stream_id;
    var permalink;
    var isadv = 0;
    var audio_id;
    var content_type;
    var is_obj;
    var index_val = 0;//ER :: 25423
    if (typeof (isGuestUser) === "undefined") {
        var isGuestUser = window.isGuestUser;
    }
    if (typeof (obj) === "undefined") {
        audio_id = $('#movie_stream_id').val();
        content_type = $('#content-type').val();
        movie_id = $('#movie_id').val();
        stream_id = $('#stream_id').val();
        permalink = $('#content-permalink').val();
        if($('#indexval').val()!="" && typeof ($('#indexval').val()) !== "undefined"){
            index_val = $('#indexval').val();
        }

        if ($("#is_ppv_bundle").length) {
            is_ppv_bundle = $("#is_ppv_bundle").val();
        }
        if ($("#isadv").length) {
            isadv = $("#isadv").val();
        }
        is_obj = 1;
    } else {
        audio_id = $(obj).attr("data-id");
        movie_id = $(obj).attr("data-movie_id");
        stream_id = $(obj).attr("data-stream_id");
        permalink = $(obj).attr("data-content-permalink");
        isppv = $(obj).attr('data-isppv');
        is_ppv_bundle = $(obj).attr('data-is_ppv_bundle');
        isadv = $(obj).attr('data-isadv');
        content_type = $(obj).attr('data-ctype');
        is_obj = 0;
        index_val = $(obj).attr('data-indexval');//ER :: 25423
        if ($(obj).attr("data-is_guest_user")) {
            var isGuestUser = $(obj).attr("data-is_guest_user");
        }
    }
    //ER 27707 Start . Only set async value false for Mac and Iphone Safari browser
    /*$.post(url, {'movie_id': movie_id, 'stream_id': stream_id, 'purchase_type': purchase_type, 'isppv': isppv, 'is_ppv_bundle': is_ppv_bundle, 'isadv': isadv, isGuestUser: isGuestUser, 'onCloseNotRefresh': onCloseNotRefresh}, function (res) {
        $('#loader').show();
        if (parseInt(res) === 1) {
            if (audio_id) {
                if (is_obj == 1) {
                    setSessionForAODContent(content_type, audio_id);
                    location.reload();
                } else {
                    if (parseInt(content_type) == 5) {
                        playAudioNew(audio_id);
                    } else if (parseInt(content_type) == 6) {
                        playMultipartAudio(audio_id, index_val); //ER :: 25423
                    }
                }
            } else {
                if (stream_id !== '') {
                    if (supportOptionalContent) {
                        playVideoNew(permalink, 2, stream_id);
                    } else {
                        window.location.href = HTTP_ROOT + "/" + Player_Page + "/" + permalink + '/stream/' + stream_id;
                    }
                } else {
                    if (supportOptionalContent) {
                        playVideoNew(permalink, 2);
                    } else {
                        window.location.href = HTTP_ROOT + "/" + Player_Page + "/" + permalink;
                    }
                }
            }
        } else {
            reload = 1;
            $("#ppvModal").html(res).modal('hide');
            $('#loader').hide();

            if (parseInt(is_plan_error)) {
                $("#ppvModal").html(res).modal('show');
                $('#loader-ppv').hide();
            }
        }
     });*/
    $.ajax({
        url: url,
        data: {'movie_id': movie_id, 'stream_id': stream_id, 'purchase_type': purchase_type, 'isppv': isppv, 'is_ppv_bundle': is_ppv_bundle, 'isadv': isadv, isGuestUser: isGuestUser, 'onCloseNotRefresh': onCloseNotRefresh, 'onMonetizationCheck': 1},
        method: "post",
        async: false,
        success: function (res) {
            if(parseInt(res) === 10) {
                window.location.href = HTTP_ROOT+'/user/activate';
            }
            $('#loader').show();
            if (parseInt(res) === 1) {
                if (audio_id) {
                    if (is_obj == 1) {
                        setSessionForAODContent(content_type, audio_id);
                        location.reload();
                    } else {
                        if (parseInt(content_type) == 5) {
                            playAudioNew(audio_id);
                        } else if (parseInt(content_type) == 6) {
                            playMultipartAudio(audio_id, index_val); //ER :: 25423
                        }
                    }
                } else {
                    if (stream_id !== '') {
                        if (supportOptionalContent) {
                            if(content_type==3){//32446
                                playAllVideoAuto(permalink, 2, stream_id,0,index_val);
                            }else{
                                playVideoNew(permalink, 2, stream_id);
                            }

                        } else {
                            window.location.href = HTTP_ROOT + "/" + Player_Page + "/" + permalink + '/stream/' + stream_id;
                        }
                    } else {
                        if (supportOptionalContent) {
                            if(content_type==3){//32446
                                playAllVideoAuto(permalink, 2, stream_id,0,index_val);
                            }else{
                                playVideoNew(permalink, 2);
                            }
                        } else {
                            window.location.href = HTTP_ROOT + '/Player_Page/' + permalink;
                        }
                    }
                }
            } else {
                //52108
                if ($('#sso_with_miniorange_shopify_recharge').val() !== typeof undefined && $('#sso_with_miniorange_shopify_recharge').val() == 1) {
                    $("#recharge-subscribe-modal").modal('show');
                } else { //52108
                    reload = 1;
                    $("#ppvModal").html(res).modal('hide');
                    $('#loader').hide();

                    if (parseInt(is_plan_error)) {
                        $("#ppvModal").html(res).modal('show');
                        $('#loader-ppv').hide();
                    }
                }//52108
            }
        }});
    //ER 27707 End
}
$(document).ready(function () {

//    18112 [Sweta M]
    if (content_type == 5 && (dl_type == 0)) {
        playAudioNew(audio_id);
    } else if (content_type == 6 && (dl_type == 0)) {
        playMultipartAudio(audio_id, 0);
    } else {
        if (typeof (guest_user_id) !== "undefined" && parseInt(guest_user_id) > 0 && dl_permalink) {
            dl_permalink += '/is_guest_user/1';
        }
        if (content_type == 6 && dl_type != 0) {
            var purl = HTTP_ROOT + "/user/DownloadMultipartContent/vlink/" + dl_permalink;
        } else if (dl_type != 0) {
            var purl = HTTP_ROOT + "/user/DownloadContent/vlink/" + dl_permalink;
            var downloadCount = 1;
            if (downloadCount == 1 && dl_type != 0) {
                dl_type = 0;
                content_type = false;
                audio_id = false;
                downloadCount++;
                window.location.href = purl;
                return false;
            }
        }
        console.log(purl);
        if (content_type == 6 && dl_type !== typeof undefined && dl_type == 2) {
            $.post(purl, function (downloadarray) {
                var jsonarray = jQuery.parseJSON(downloadarray);
                if (jsonarray.error) {
                    if (jsonarray.errorType !== typeof undefined && jsonarray.errorType == 'guestuser') {
                        //alert(jsonarray.msg);
                    } else {
                        alert("Download not accomplished!!");
                        window.setTimeout(function () {
                            location.reload()
                        }, 2000);
                    }
                } else {
                    $('.loader_download').hide();
                    $('.download_loader').show().delay(15000).fadeOut();
                    $.each(jsonarray, function (key, value) {
                        download_files([{download: value}]);
                    });
                }
            });
        }
    }

    if ((parseInt(login_field) == 1)) {
        $("#username").attr('type', 'text');
        $('<input type="hidden" class="login_field" value="1" />').insertAfter("#login_form");
    }
    var showconfirm = '';
    var showconfirmsessionid = '';
    var showconfirm = $('#show_season_confirm').val();
    var showconfirmsessionid = $('#show_season_confirm_sessionid').val();
    var seasonId = $('#seasonId').val();
    var episodeId = $('#episodeId').val();
    var embedId = $('#embedId').val();
    var episode = $('#episode').val();
    var permalink = $('#permalink').val();
    var ppv_watchpopup_time = $('#ppv_watchpopup_time').val();
    console.log(ppv_watchpopup_time);

    if (ppv_watchpopup_time > 0){
        var timeInterval = ppv_watchpopup_time;
    }
    else{
        var timeInterval = '5000';
    }

    if ($('#time_interval_set').length > 0) {
        timeInterval = $('#time_interval_set').val();
    }
    var content_name = $('#content_name').val();
    if (showconfirm != '' && showconfirmsessionid != '' && typeof (showconfirm) != 'undefined' && typeof (showconfirmsessionid) != 'undefined' && showconfirm === showconfirmsessionid) {
        var contName = content_name;
        if (parseInt(seasonId)) {
            contName = contName + '-' + JSLANGUAGE.season + seasonId;
        }
        if (parseInt(episodeId)) {
            contName = contName + '-' + episode;
        }

        $('#modalmsg').html(contName);

        $("#showseasonconfirmpopup").modal('show');
        var initial;
        initial = window.setTimeout(function () {
            uri = '';
            var streamid = '';
            var sId = '';
            if (parseInt(seasonId)) {
                uri = permalink + '/season/' + seasonId;
                sId = seasonId;
            }

            if (parseInt(episodeId)) {
                uri = uri + '/stream/' + embedId;
                streamid = embedId;
            }
            var content_id = $('#content_id').val();

            var url = HTTP_ROOT + "/user/SeasonShowConfirm/";
            $('.loader_confirm').show();
            $.post(url, {'showconfirmsessionid': showconfirmsessionid}, function (res) {
                if (res) {
                    $('.loader_confirm').hide();
                    if (uri !== "") {
                        if (supportOptionalContent) {
                            playVideoNew(permalink, 2, streamid, sId);
                        } else {
                            window.location.href = HTTP_ROOT + '/' + Player_Page + '/' + uri;
                        }
                    } else {
                        if (supportOptionalContent) {
                            playVideoNew(permalink, 2);
                        } else {
                            window.location.href = HTTP_ROOT + '/' + Player_Page + '/' + permalink;
                        }
                    }
                }
            });
        }, timeInterval);

        /* ER 44327 */
        if($('#meeting_type').length && $('#meeting_type').val()==1){
            $('#auto_play_msg').html('');
            /* ER 45357 */
            $('#watchnowShowseasonconfirm').hide();
            /* ER 45357 */
            clearTimeout(initial);
        }
        /* ER 44327 */

    }
    $("#dismisShowseasonconfirm, #closeShowseasonconfirm").click(function () {
        clearTimeout(initial);
        var url = HTTP_ROOT + "/user/SeasonShowConfirm/";
        $('.loader_confirm').show();
        $.post(url, {'showconfirmsessionid': showconfirmsessionid}, function (res) {
            if (res == 1) {
                $('.loader_confirm').hide();
                $("#showseasonconfirmpopup").modal('hide');
            }
        });
    });
    $("#watchnowShowseasonconfirm").click(function () {
        uri = '';
        var streamid = '';
        var sId = '';
        if (parseInt(seasonId)) {
            uri = permalink + '/season/' + seasonId;
            sId = seasonId;
        }

        if (parseInt(episodeId)) {
            uri = uri + '/stream/' + embedId;
            streamid = embedId;
        }
        var content_id = $('#content_id').val();

        var url = HTTP_ROOT + "/user/SeasonShowConfirm/";
        $('.loader_confirm').show();
        $.post(url, {'showconfirmsessionid': showconfirmsessionid}, function (res) {
            if (res) {
                $('.loader_confirm').hide();
                if (uri !== "") {
                    if (supportOptionalContent) {
                        playVideoNew(permalink, 2, streamid, sId);
                    } else {
                        window.location.href = HTTP_ROOT + '/' + Player_Page + '/' + uri;
                    }
                } else {
                    if (supportOptionalContent) {
                        playVideoNew(permalink, 2);
                    } else {
                        window.location.href = HTTP_ROOT + '/' + Player_Page + '/' + permalink;
                    }
                }
            }
        });
    });
    //#Mantis : 18523 [SwetaM]
    $('body').on('click', '.playbtn, .playnowbtn, .playAudioContent, .btn.btn-lg.btn-primary, .btn.as-btn-accent.as-btn-md, .play_audio_episodes', function (e) {
        $('#loader').show();
        let chk_login = $(this).attr('data-api_available');
        let chk_registeration = $(this).attr('data-chk_register');
        let content_title = $(this).attr('data-content_title');
        let movie_id = $(this).attr('data-movie_id');
        let permalink = $(this).attr("data-content-permalink");
        let stream_id = $(this).attr('data-stream_id');
        let indexval = $(this).attr('data-indexval');
        let season_id;
        login_object = $(this);
        let purchase_type = $(this).attr('data-purchase_type');
        if (typeof purchase_type !== typeof undefined && purchase_type !== false) {
            if (purchase_type === 'season' && $("#series").length) {
                season_id = $("#series").val();
                if (parseInt(season_id)) {
                    permalink += "/season/" + season_id;
                }
            }
        } else if (parseInt(stream_id)) {
            permalink += '/stream/' + stream_id;
        }
        let isppv = $(this).attr('data-isppv');
        let is_ppv_bundle = $(this).attr('data-is_ppv_bundle');
        let isadv = $(this).attr('data-isadv');
        $.cookie("movie_id", movie_id, {path: '/'});
        $.cookie("is_ppv", isppv, {path: '/'});
        $.cookie("permalink", permalink, {path: '/'});
        if (typeof isadv !== typeof undefined && isadv !== false) {

        } else {
            isadv = 0;
        }

        permalink = $(this).attr("data-content-permalink");
        let contentTypePermalink = $(this).attr("data-content-type-permalink");
        let isDownload = $(this).attr("data-download");
        let data_audio_id = $(this).attr("data-id");
        let data_content_type = $(this).attr("data-ctype");

        $('#loginModal').on('show.bs.modal', function (e) {
            $('#loader').hide();
            $('#chk_register').val(chk_registeration);
            $("#movie_id").val(movie_id);
            $("#content_title").val(content_title);
            if ($("#season_id").length) {
                $("#season_id").val(season_id);
            }
            $("#stream_id").val(stream_id);
            $("#movie_stream_id").val(data_audio_id);
            $("#content-type").val(data_content_type);
            $("#isppv").val(isppv);
            $("#is_ppv_bundle").val(is_ppv_bundle);
            $("#isadv").val(isadv);
            $('#content-permalink').val(permalink);
            $('#content-type-permalink').val(contentTypePermalink);
            $('#indexval').val(indexval);
            if (typeof isDownload !== typeof undefined && isDownload !== false) {
                if ($('#isDownload').length == 0) {
                    $(".popup_bottom").append('<input type="hidden" id="isDownload" value="">');
                }
                $('#isDownload').val(isDownload);
            } else {
                $('#isDownload').val('');
            }
        });

        $('#generalInfoModal').on('show.bs.modal', function (e) {
            $('#loader').hide();
            $('#chk_register').val(chk_registeration);
            $("#movie_id").val(movie_id);
            $("#content_title").val(content_title);
            if ($("#season_id").length) {
                $("#season_id").val(season_id);
            }
            $("#stream_id").val(stream_id);
            $("#isppv").val(isppv);
            $("#is_ppv_bundle").val(is_ppv_bundle);
            $("#isadv").val(isadv);
            $("#general_info").val(1);
            $('#content-permalink').val(permalink);
            $('#content-type-permalink').val(contentTypePermalink);
            if (typeof isDownload !== typeof undefined && isDownload !== false) {
                $('#isDownload').val(isDownload);
            } else {
                $('#isDownload').val('');
            }
        });
    });

    $('#login_form').validate({
        rules: {
            "LoginForm[email]": {
                required: true,
                email: $(".login_field").length <= 0
            },
            "LoginForm[password]": {
                required: true,
            },
            "LoginForm[mobile_number]": {
                required: true,
                number: true
            }
        },
        messages: {
            "LoginForm[email]": {
                required: JSLANGUAGE.email_required,
                email: JSLANGUAGE.valid_email
            },
            "LoginForm[mobile_number]": {
                required: JSLANGUAGE.mobile_number_required,/*28147*/
            },
            "LoginForm[password]": {
                required: JSLANGUAGE.password_required,
            },
        },
        submitHandler: function (form) {
            window.isGuestUser = 0;
            $.ajax({
                url: HTTP_ROOT + "/user/ajaxlogin",
                data: $('#login_form').serialize(),
                type: 'POST',
                dataType: "json",
                beforeSend: function () {
                    $('#login_loading').show();
                    $('#loader_login').show();
                },
                success: function (data) {
                    $('input[name=csrfToken]').val(data.csrfToken);
                    $('#login_loading').hide();
                    $('#loader_login').hide();
                    $('#login_errors').hide();
                    if(data.login == 'invalid_token'){
                        $('#login_errors').html('');
                        $('#login_errors').show();
                    }else if (data.login == 'success') {
                        if ($.trim($("#add_to_fav").val())) {
                            $('#login_loading').show();
                            $('#loader_login').show();
                            var content_type = $.trim($("#content_type").val());
                            if (content_type == 1) {
                                var content_id = $.trim($("#stream_id").val());
                            } else {
                                var content_id = $.trim($("#movie_id").val());
                            }
                            addToFavList(content_id, content_type, false, 1);
                        } else {
                            $('#login_errors').html("");
                            if ($.trim($("#movie_id").val())) {
                                $('#loginModal').modal('hide');
                                if ($.trim($("#isDownload").val())) {
                                    //getVoucherGeneralInfoGuest(login_object);
                                    if(parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val()) || parseInt($("#isadv").val())){
                                        getPpvPlans();
                                    } else {
                                        download_content(login_object);
                                        window.location = HTTP_ROOT + '/' + $('#content-permalink').val();
                                    }
                                } else {
                                    if ($("#chkPlay").val()) {
                                        chkPlayPerimission();
                                    } else if (parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val()) || parseInt($("#isadv").val())) {
                                        if ($.trim($("#stream_id").val()) === 0) {
                                            getPpvPlans();
                                        } else {
                                            episodegetPpvPlans();
                                        }
                                    } else {
                                        /* ER 24063 [Abhinandan] : Start*/
                                        var ctype = $.trim($("#stream_id").val());
                                        if ($.trim(ctype) == 0 || $.trim(ctype) == '0') {
                                            var audio_url = $('#content-permalink').val();
                                            window.location = HTTP_ROOT + '/' + audio_url;
                                        } else {
                                            playMovie();
                                        }
                                        /* ER 24063 [Abhinandan] : End*/
                                    }
                                }
                            } else {
                                var redirectUrl = decodeURIComponent(getCookie('redirectToPreviousPage'));
                                if ($('#loginModal').length && $('#loginModal').css('display') == 'block') {
                                    location.reload();
                                } else {
                                    if ($.trim(data.action) != '') {
                                        window.location = data.action;
                                    } else if (redirectUrl) {
                                        window.location = redirectUrl
                                    } else {
                                        window.location = HTTP_ROOT + '/';
                                    }
                                }
                            }
                        }
                    } else if ($.trim(data.login) == 'error_limit_login') {
                        $('#login_errors').html(data.msg);
                        $('#login_errors').show();
                        $("#logout_all").modal('show');
                    } else if ($.trim(data.login) == 'account_not_activated') {
                        $('#login_errors').html(data.msg);
                        $('#login_errors').show();
                    } else {
                        if( $('#sms_otp_enabled').val()==1){ /*28147*/
                            $('#login_errors').html(JSLANGUAGE.incorrect_phone_or_password);
                        } else {
                            $('#login_errors').html(JSLANGUAGE.incorrect_email_or_password); } /*28147*/
                        $('#login_errors').show();
                    }
                },
                complete: function () {
                    $('#loader_login').hide();
                    $('#login_loading').hide();
                }
            });
        }
    });

    $('#lib_login_form').validate({
        rules: {
            "LibraryLoginForm[username]": {
                required: true,
            },
            "LibraryLoginForm[password]": {
                required: true,
            }
        },
        messages: {
            "LibraryLoginForm[username]": {
                required: JSLANGUAGE.username_required,
            },
            "LibraryLoginForm[password]": {
                required: JSLANGUAGE.password_required,
            },
        },
        submitHandler: function (form) {
            $.ajax({
                url: HTTP_ROOT + "/login/libraryAuth",
                data: $('#lib_login_form').serialize(),
                type: 'POST',
                dataType: "json",
                beforeSend: function () {
                    $('#lib_login_loading').show();
                    $('#loader_login').show();
                },
                success: function (data) {
                    $('input[name=csrfToken]').val(data.csrfToken);
                    $('#lib_login_loading').hide();
                    $('#loader_login').hide();
                    if (data.status == 'success') { //39145
                        $('#loginModal').modal('hide');
                        $(".response_username").html(data.response_username);
                        $(".response_feedback").html(data.response_feedback);
                        if(data.response_url){/*44062*/
                            $(".success_response_url").attr("href", data.response_url);
                        } else {
                            $('.success_response_url').contents().unwrap();
                        }/*44062*/
                        $("#hidden_redirecturl").val(data.redirect_url);
                        $("#libraryselected").text($('#lib-name').html());
                        $('#success-modal').modal('show');
                    } else {
                        $('#loginModal').modal('hide');
                        $(".response_username").html(data.response_username);
                        $(".response_feedback").html(data.response_feedback);
                        if(data.response_url){/*44062*/
                            $(".response_url").attr("href", data.response_url);
                        } else {
                            $('.response_url').contents().unwrap();
                        }/*44062*/
                        $('#failure-modal').modal('show');
                    }//39145
                },
                complete: function () {
                    $('#loader_login').hide();
                    $('#lib_login_loading').hide();
                }
            });
        }
    });

    $("#login_errors").on('click', '#session_reset', function () {
        var user_id = $("#session_reset_user_id").val();
        var studio_id = $("#session_reset_studio_id").val();
        $.ajax({
            url: HTTP_ROOT + "/user/logoutAll",
            data: {user_id: user_id, studio_id: studio_id},
            type: 'POST',
            beforeSend: function () {
                $("#reset_session_loader").show();
            },
            success: function () {
                $("#reset_session_loader").hide();
                $("#login_errors #logout_all").modal('hide');
                $("#login_errors").html(JSLANGUAGE.logged_out_from_all_devices);
            },
            complete: function () {
                window.location.href = window.location.href;
            }
        });
    });

    $('#generalinfo_form').validate({
        rules: {
            "data[name]": {
                required: true,
                minlength: 1
            },
            "data[email]": {
                required: true,
                email: true
            }
        },
        messages: {
            "data[name]": {
                required: JSLANGUAGE.full_name_required,
                minlength: JSLANGUAGE.name_minlength
            },
            "data[email]": {
                required: JSLANGUAGE.email_required,
                email: JSLANGUAGE.valid_email
            },
        },
        submitHandler: function (form) {
            $.ajax({
                url: HTTP_ROOT + "/user/SaveGeneralInfoUser",
                data: $('#generalinfo_form').serialize(),
                type: 'POST',
                dataType: "json",
                beforeSend: function () {
                    $('#loader_general').show();
                },
                success: function (data) {
                    $('#loader_general').hide();
                    if ($.trim(data.login) == 'success') {
                        if ($.trim($("#movie_id").val())) {
                            if (parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val())) {
                                var guest_id = $.trim(data.guest_id);
                                getVoucherGeneralInfo(guest_id);
                                $('#loader_general').hide();
                            } else {
                                playMovie();
                                $('#loader_general').hide();
                            }
                        } else {
                            location.reload();
                        }

                    }
                },
                complete: function () {
                    $('#loader_general').hide();
                    $('#loader_general').hide();
                }
            });
        }
    });
    var nospecialchar = /^[~@$^"'(),!<>().+=[\]{}|\\,.:-]|(?:[~@$^"'(),!<>().+=[\]{}|\\,.:-])/;
    $.validator.addMethod("letterOnly", function (value, element) {
        return this.optional(element) || !nospecialchar.test(value);

    }, JSLANGUAGE.valid_text);
    $('#register_form').validate({
        rules: {
            "data[name]": {
                required: true,
                letterOnly: false,
                minlength: 1
            },
            "data[email]": {
                required: true,
                email: true
            },
            "data[mobile_number]": {
                required: true,
                number: true,
                minlength:7,//48366
                maxlength : 17//48366
            },
            "data[password]": {
                required: true,
                minlength: 6
            },
            "data[confirm_password]": {
                required: true,
                equalTo: "#join_password"
            },
            //37432 starts
            "data[contact_number]": {
                required: true,
                digits: true
            }
            //37432 ends

        },
        messages: {
            "data[name]": {
                required: JSLANGUAGE.full_name_required,
                minlength: JSLANGUAGE.name_minlength
            },
            "data[email]": {
                required: JSLANGUAGE.email_required,
                email: JSLANGUAGE.valid_email
            },
            "data[mobile_number]": {
                required: JSLANGUAGE.mobile_number_required
            },
            "data[password]": {
                required: JSLANGUAGE.password_required,
                minlength: JSLANGUAGE.password_minlength
            },
            "data[confirm_password]": {
                required: JSLANGUAGE.valid_confirm_password,
                equalTo: JSLANGUAGE.password_donot_match,
            },
            //37432 starts
            "data[contact_number]": {
                required: JSLANGUAGE.valid_phone_number,
                digits: JSLANGUAGE.enter_correct_phone
            }
            //37432 ends
        },
        submitHandler: function (form) {
            $('#register_loading').show();
            $('#loader_register').show();
            var email = $.trim($('#register_form').find("input[type='email']").val());
            login_fields = [];
            $('#register_form .login_field').each(function () {
                pushToArray(this.id, this.value);
            });
            $.post(HTTP_ROOT + "/user/checkemail", {'email': email, 'formdata': login_fields}, function (res) {
                res = JSON.parse(res);
                if (parseInt(res.isExists) === 1) {
                    $('#register_loading').hide();
                    $('#loader_register').hide();
                    if ($.trim(res.field_name) == 'email_address') {
                        if($.trim(res.field_specific) == 'not_domain_email') {
                            msg = JSLANGUAGE.allowed_domain_email;
                        } else {
                            msg = JSLANGUAGE.email_exists_us;
                        }
                    } else if ($.trim(res.field_name) == 'email') { //48366
                        msg = JSLANGUAGE.email_exists_us;
                    } else  {
                        msg = JSLANGUAGE.value_exists;
                    }
                    $('<label id="' + res.field_name + '-error" class="error" for="' + res.field_name + '">' + msg + '</label>').insertAfter("#" + $.trim(res.field_name));
                    return false;
                } else {
                    //37432 starts
                    if($("#contact_number").length > 0){
                        var is_contact_exist=false;
                        $.ajax({
                            url: HTTP_ROOT + "/user/checkMobile?mobile_number="+$("#contact_number").val(),
                            success: function (res) {
                                if (res == 1) {
                                    var msg = JSLANGUAGE.mobile_number_exists_us;
                                    $('<label id="contact-number-error" class="error" for="contact_number">'+msg+'</label>').insertAfter("#"+$.trim("contact_number"));
                                    $('#register_loading').hide();
                                    $('#loader_register').hide();
                                    is_contact_exist = true;
                                }
                            },
                            async: false
                        });
                        if(is_contact_exist)
                            return false;
                    }
                    //37432 ends
                    if($("#mobile_number").length > 0){//48366
                        var is_contact_exist=false;
                        $.ajax({
                            url: HTTP_ROOT + "/user/checkMobile?mobile_number="+$("#mobile_number").val(),
                            success: function (res) {
                                if (res == 1) {
                                    var msg = JSLANGUAGE.mobile_number_exists_us;
                                    $('<label id="mobile_number-error" class="error" for="mobile_number">'+msg+'</label>').insertAfter("#"+$.trim("mobile_number"));
                                    $('#register_loading').hide();
                                    $('#loader_register').hide();
                                    is_contact_exist = true;
                                }
                            },
                            async: false
                        });
                        if(is_contact_exist)
                            return false;
                    }
                    if( $('#enabled_otp').val()==1){
                        var sendotp=ValidatePopOtp();
                        if(sendotp){
                            $.ajax({
                                url: HTTP_ROOT + "/user/ajaxregister",
                                data: $('#register_form').serialize(),
                                type: 'POST',
                                dataType: "json",
                                success: function (data) {
                                    $('#register_loading').hide();
                                    $('#loader_register').hide();
                                    if ($.trim(data.login) == 'success') {
                                        if ($.trim($("#add_to_fav").val())) {
                                            $('#login_loading').show();
                                            $('#loader_login').show();
                                            var content_type = $.trim($("#content_type").val());
                                            if (content_type == 1) {
                                                var content_id = $.trim($("#stream_id").val());
                                            } else {
                                                var content_id = $.trim($("#movie_id").val());
                                            }
                                            addToFavList(content_id, content_type, false, 1);
                                        } else {
                                            $('#register-btn').attr("disabled", "disabled");
                                            if ($.trim($("#movie_id").val())) {
                                                if ($.trim($("#isDownload").val())) {
                                                    if(parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val()) || parseInt($("#isadv").val())){
                                                        getPpvPlans();
                                                    } else {
                                                        download_content(login_object);
                                                        window.location = HTTP_ROOT + '/' + $('#content-permalink').val();
                                                    }
                                                    //getVoucherGeneralInfoGuest(login_object);
                                                    //download_content();
                                                } else {
                                                    if (parseInt($("#isadv").val()) || parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val())) {
                                                        if ($.trim($("#stream_id").val()) === 0) {
                                                            getPpvPlans();
                                                        } else {
                                                            episodegetPpvPlans();
                                                        }
                                                        $('#loader_register').hide();
                                                        $('#register_loading').hide();
                                                    } else {
                                                        playMovie();
                                                        $('#register_loading').hide();
                                                    }
                                                }
                                            } else {
                                                location.reload();
                                            }
                                        }
                                    } else if ($.trim(data.register) == 'success') {
                                        if (data.code != 202) {
                                            $('#register_errors').show();
                                            $('#register_errors').html(JSLANGUAGE.api_subscribe_failed);
                                        } else {
                                            var url = HTTP_ROOT + "/user/register";
                                            window.location.href = url;
                                        }
                                    } else if ($.trim(data.register) == 'error') {
                                        $('#register_errors').show();
                                        $('#register_errors').html(data.message);
                                    } else if ($.trim(data.login) == 'error') {
                                        $('#register_errors').show();
                                        $('#register_errors').html(JSLANGUAGE.email_exists_us);
                                    } else if ($.trim(data.login) == 'account_not_activated') {
                                        $('#register_errors').html(data.msg);
                                        $('#register_errors').show();
                                    } else {
                                        $('#register_errors').show();
                                        $('#register_errors').html(JSLANGUAGE.saving_error);
                                    }
                                },
                                complete: function () {
                                    $('#loader_register').hide();
                                    $('#register_loading').hide();
                                }
                            });
                        }
                    } else {
                        //48366
                        $.ajax({
                            url: HTTP_ROOT + "/user/ajaxregister",
                            data: $('#register_form').serialize(),
                            type: 'POST',
                            dataType: "json",
                            success: function (data) {
                                $('#register_loading').hide();
                                $('#loader_register').hide();
                                if ($.trim(data.login) == 'success') {
                                    if ($.trim($("#add_to_fav").val())) {
                                        $('#login_loading').show();
                                        $('#loader_login').show();
                                        var content_type = $.trim($("#content_type").val());
                                        if (content_type == 1) {
                                            var content_id = $.trim($("#stream_id").val());
                                        } else {
                                            var content_id = $.trim($("#movie_id").val());
                                        }
                                        addToFavList(content_id, content_type, false, 1);
                                    } else {
                                        $('#register-btn').attr("disabled", "disabled");
                                        if ($.trim($("#movie_id").val())) {
                                            if ($.trim($("#isDownload").val())) {
                                                if(parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val()) || parseInt($("#isadv").val())){
                                                    getPpvPlans();
                                                } else {
                                                    download_content(login_object);
                                                    window.location = HTTP_ROOT + '/' + $('#content-permalink').val();
                                                }
                                                //getVoucherGeneralInfoGuest(login_object);
                                                //download_content();
                                            } else {
                                                if (parseInt($("#isadv").val()) || parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val())) {
                                                    if ($.trim($("#stream_id").val()) === 0) {
                                                        getPpvPlans();
                                                    } else {
                                                        episodegetPpvPlans();
                                                    }
                                                    $('#loader_register').hide();
                                                    $('#register_loading').hide();
                                                } else {
                                                    playMovie();
                                                    $('#register_loading').hide();
                                                }
                                            }
                                        } else {
                                            location.reload();
                                        }
                                    }
                                } else if ($.trim(data.register) == 'success') {
                                    if (data.code != 202) {
                                        $('#register_errors').show();
                                        $('#register_errors').html(JSLANGUAGE.api_subscribe_failed);
                                    } else {
                                        var url = HTTP_ROOT + "/user/register";
                                        window.location.href = url;
                                    }
                                } else if ($.trim(data.register) == 'error') {
                                    $('#register_errors').show();
                                    $('#register_errors').html(data.message);
                                } else if ($.trim(data.login) == 'error') {
                                    $('#register_errors').show();
                                    $('#register_errors').html(JSLANGUAGE.email_exists_us);
                                } else if ($.trim(data.login) == 'account_not_activated') {
                                    $('#register_errors').html(data.msg);
                                    $('#register_errors').show();
                                } else {
                                    $('#register_errors').show();
                                    $('#register_errors').html(JSLANGUAGE.saving_error);
                                }
                            },
                            complete: function () {
                                $('#loader_register').hide();
                                $('#register_loading').hide();
                            }
                        });
                    }
                }
            });
        }
    });

    $('#login-loading').hide();
    $('.loginbtn').click(function () {
        var frm = $(this).closest('form');
        frm.validate({
            rules: {
                "LoginForm[email]": {
                    required: true,
                    email: true
                },
                "LoginForm[mobile_number]": {
                    required: true,
                    number: true,
                },
                "LoginForm[password]": {
                    required: true,
                },
            },
            messages: {
                "LoginForm[email]": {
                    required: JSLANGUAGE.email_required,
                    email: JSLANGUAGE.valid_email
                },
                "LoginForm[mobile_number]": {
                    required: JSLANGUAGE.mobile_number_required,
                },
                "LoginForm[password]": {
                    required: JSLANGUAGE.password_required,
                },
            },
            submitHandler: function (form) {
                $.ajax({
                    url: HTTP_ROOT + "/user/ajaxlogin",
                    data: frm.serialize(),
                    type: 'POST',
                    dataType: "json",
                    beforeSend: function () {
                        $('#login-loading').show();
                        $('#loader_login').show();
                    },
                    success: function (data) {
                        $('#login-loading').hide();
                        $('#loader').hide();
                        $('#login_errors').hide();
                        if(data.login == 'invalid_token'){
                            $('#login_errors').html('');
                            $('#login_errors').show();
                        }else if (data.login == 'success') {
                            var redirectUrl = decodeURIComponent(getCookie('redirectToPreviousPage'));
                            if ($.trim(data.action) != '') {
                                window.location = data.action;
                            } else if (redirectUrl) {
                                window.location = redirectUrl
                            } else {
                                location.reload();
                            }
                        } else {
                            frm.find('.loginerror').html(JSLANGUAGE.incorrect_email_or_password).show();
                            frm.find('.loginerror').show();
                        }
                    },
                    complete: function () {
                        $('#login-loading').hide();

                    }
                });
            }
        });
    });

    $('.registerbtn').click(function () {
        var frm = $(this).closest('form');
        frm.validate({
            rules: {
                "data[name]": {
                    required: true,
                    letterOnly: false,
                    minlength: 1
                },
                "data[email]": {
                    required: true,
                    email: true
                },
                "data[password]": {
                    required: true,
                    minlength: 6
                },
            },
            messages: {
                "data[name]": {
                    required: JSLANGUAGE.full_name_required,
                    minlength: JSLANGUAGE.name_minlength
                },
                "data[email]": {
                    required: JSLANGUAGE.email_required,
                    email: JSLANGUAGE.valid_email
                },
                "data[password]": {
                    required: JSLANGUAGE.password_required,
                    minlength: JSLANGUAGE.password_minlength
                },
            },
            submitHandler: function (form) {
                $('#register-loading').show();
                $('#loader_register').show();
                var email = $.trim($('.registerbtn').find("input[type='email']").val());
                login_fields = [];
                $('.registerbtn .login_field').each(function () {
                    pushToArray(this.id, this.value);
                });
                $.post(HTTP_ROOT + "/user/checkemail", {'email': email, 'formdata': login_fields}, function (res) {
                    res = JSON.parse(res);
                    if (parseInt(res.isExists) === 1) {
                        $('#register-loading').hide();
                        $('#loader_register').hide();
                        if ($.trim(res.field_name) == 'email_address') {
                            msg = JSLANGUAGE.email_exists_us;
                        } else {
                            msg = JSLANGUAGE.value_exists;
                        }
                        $('<label id="' + res.field_name + '-error" class="error" for="' + res.field_name + '">' + msg + '</label>').insertAfter("#" + $.trim(res.field_name));
                        return false;
                    } else {
                        $.ajax({
                            url: HTTP_ROOT + "/user/ajaxregister",
                            data: frm.serialize(),
                            type: 'POST',
                            dataType: "json",
                            success: function (data) {
                                $('#register-loading').hide();
                                $('#loader_register').hide();
                                if (data.login == 'success') {
                                    if ($.trim($("#movie_id").val())) {
                                        if ($.trim($("#isDownload").val())) {
                                            window.location = HTTP_ROOT + '/' + $('#content-permalink').val();
                                            //getVoucherGeneralInfoGuest(login_object);
                                            download_content();
                                        } else {
                                            if (parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val())) {
                                                $('#loader_register').hide();
                                                if ($.trim($("#stream_id").val()) === 0) {
                                                    getPpvPlans();
                                                } else {
                                                    episodegetPpvPlans();
                                                }
                                            } else {
                                                $('#loader_register').hide();
                                                playMovie();
                                            }
                                        }
                                    } else {
                                        location.reload();
                                    }
                                } else {
                                    frm.find('.registererror').html(data.message);
                                    frm.find('.registererror').show();
                                }
                            },
                            complete: function () {
                                $('#loader_register').hide();
                                $('#register-loading').hide();
                            }
                        });
                    }
                });
            }
        });
    });
    //for register popup
    $('#register_step').validate({
        rules: {
            "data[name]": {
                required: true,
                minlength: 1
            },
            "data[email]": {
                required: true,
                email: true
            },
            "data[password]": {
                required: true,
                minlength: 6
            },
            "data[confirm_password]": {
                required: true,
                equalTo: "#join_passwords"
            }
        },
        messages: {
            "data[name]": {
                required: JSLANGUAGE.full_name_required,
                minlength: JSLANGUAGE.name_minlength
            },
            "data[email]": {
                required: JSLANGUAGE.email_required,
                email: JSLANGUAGE.valid_email
            },
            "data[password]": {
                required: JSLANGUAGE.password_required,
                minlength: JSLANGUAGE.password_minlength
            },
            "data[confirm_password]": {
                required: JSLANGUAGE.valid_confirm_password,
                equalTo: JSLANGUAGE.password_donot_match,
            },
        },
        submitHandler: function (form) {
            $('#register_loading').show();
            $('#loader_register').show();
            var email = $.trim($('#register_step').find("input[type='email']").val());
            login_fields = [];
            $('#register_step .login_field').each(function () {
                pushToArray(this.id, this.value);
            });
            $.post(HTTP_ROOT + "/user/checkemail", {'email': email, 'formdata': login_fields}, function (res) {
                res = JSON.parse(res);
                if (parseInt(res.isExists) === 1) {
                    $('#register_loading').hide();
                    $('#loader_register').hide();
                    if ($.trim(res.field_name) == 'email_address') {
                        msg = JSLANGUAGE.email_exists_us;
                    } else {
                        msg = JSLANGUAGE.value_exists;
                    }
                    $('<label id="' + res.field_name + '-error" class="error" for="' + res.field_name + '">' + msg + '</label>').insertAfter("#" + $.trim(res.field_name));
                    return false;
                } else {
                    $.ajax({
                        url: HTTP_ROOT + "/user/ajaxregister",
                        data: $('#register_step').serialize(),
                        type: 'POST',
                        dataType: "json",
                        success: function (data) {
                            $('#register_loading').hide();
                            $('#loader_register').hide();
                            if ($.trim(data.login) == 'success') {
                                if ($.trim(data.action) != '') {
                                    window.location = data.action;
                                }
                            } else if ($.trim(data.login) == 'account_not_activated') {
                                $('#register_error').show();
                                $('#register_error').html(data.msg);

                            } else if ($.trim(data.login) == 'error') {
                                $('#register_error').show();
                                $('#register_error').html(JSLANGUAGE.email_exists_us);
                            } else {
                                $('#register_error').show();
                                $('#register_error').html(JSLANGUAGE.saving_error);
                            }
                        },
                        complete: function () {
                            $('#loader_register').hide();
                            $('#register_loading').hide();
                        }
                    });
                }
            });
        }
    });
    $(".close").click(function () {
        $("#movie_id").val('');
        $("#stream_id").val('');
        $("#add_to_fav").val('');
        $("#content_type").val('');
        $("#fav_input").remove();
        $(".modal-backdrop").remove();
        showLogin();
    });
    $('body').on('click', '.addtofav', function (e) {
        var fav_status = $(this).attr('data-fav_status');
        var login_status = $(this).attr('data-login_status');
        var content_id = $(this).attr('data-content_id');
        var content_type = $(this).attr('data-content_type');
        var action = 1;
        if (login_status == 1) {
            if ($(this).find('.fa').hasClass('fa-heart-o')) {
                $(this).find('.fa').removeClass('fa-heart-o');
                $(this).find('.fa').addClass('fa-heart');
                $(this).find('#favtext').html(JSLANGUAGE.added_to_fav);
            } else {
                $(this).find('.fa').removeClass('fa-heart');
                $(this).find('.fa').addClass('fa-heart-o');
                $(this).find('#favtext').html(JSLANGUAGE.add_to_fav);
            }
            addToFavList(content_id, content_type, true, fav_status);
        } else {
            $("#loginModal").modal('show');
            var input_field = '<div id="fav_input"><input type="hidden" name="add_to_fav" id="add_to_fav" value="1" /><input type="hidden" name="content_type" id="content_type" value="' + content_type + '" /></div>';
            $("#loginModal .popup_bottom").append(input_field);
            if (content_type == 1) {
                $("#stream_id").val(content_id);
            } else {
                $("#movie_id").val(content_id);
            }
        }
    });
    $('body').on('click', '.delete-fab', function (e) {
        var url = HTTP_ROOT + "/user/deletefromfavlist/";
        var content_id = $(this).attr('data-content_id');
        var content_type = $(this).attr('data-content_type');
        var action = 0;
        if ($.trim(content_type) == "") {
            content_type = 0;
        }
        $.post(url, {'content_id': content_id, 'content_type': content_type, 'login_status': true, 'action': action}, function (res) {
            location.reload();
        });
        $(this).parent().parent().remove();
    });
    $('body').on('click', '.facebook_login', function (e) {
        var w_left = (screen.width / 4);
        var w_top = (screen.height / 4);
        var url = $(this).attr('data-url');
        var is_popup = $(this).attr('data-login');
        $.cookie("is_popup", is_popup, {path: '/'});
        $.cookie("current_url", '' + window.location, {path: '/'});
        window.open('' + url + '', 'targetWindow', 'toolbar=no,titlebar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=900,height=500,top=' + w_top + ',left=' + w_left + '');
    });

    $('#otp_form').validate({
        rules: {
            "LoginForm[email]": {
                required: true,
                email: true
            },
            "LoginForm[password]": {
                required: true,
            },
            "LoginForm[mobile_number]": {
                required: true,
                number: true
            }
        },
        messages: {
            "LoginForm[email]": {
                required: JSLANGUAGE.email_required,
                email: JSLANGUAGE.valid_email
            },
            "LoginForm[mobile_number]": {
                required: JSLANGUAGE.mobile_number_required,
            },
            "LoginForm[password]": {
                required: JSLANGUAGE.password_required,
            }
        },
        submitHandler: function (form) {
            var url = "/user/ajaxlogin";
            $.ajax({
                url: HTTP_ROOT + url,
                data: $('#otp_form').serialize(),
                type: 'POST',
                dataType: "json",
                beforeSend: function () {
                    $('#login_loading').show();
                    $('#loader_login').show();
                },
                success: function (data) {
                    $('input[name=csrfToken]').val(data.csrfToken);
                    $('#login_loading').hide();
                    $('#loader_login').hide();
                    $('#login_errors').hide();
                    if(data.login == 'invalid_token'){
                        $('#login_errors').html('');
                        $('#login_errors').show();
                    }else if (data.login == 'success') {
                        if ($.trim($("#add_to_fav").val())) {
                            $('#login_loading').show();
                            $('#loader_login').show();
                            var content_type = $.trim($("#content_type").val());
                            if (content_type == 1) {
                                var content_id = $.trim($("#stream_id").val());
                            } else {
                                var content_id = $.trim($("#movie_id").val());
                            }
                            addToFavList(content_id, content_type, false, 1);
                        } else {
                            $('#login_errors').html("");
                            if ($.trim($("#movie_id").val())) {
                                $('#loginModal').hide();
                                if ($("#chkPlay").val()) {
                                    chkPlayPerimission();
                                } else if (parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val()) || parseInt($("#isadv").val())) {
                                    if ($.trim($("#stream_id").val()) === 0) {
                                        getPpvPlans();
                                    } else {
                                        episodegetPpvPlans();
                                    }
                                } else {
                                    playMovie();
                                }
                            } else {
                                var redirectUrl = decodeURIComponent(getCookie('redirectToPreviousPage'));
                                if ($('#loginModal').length && $('#loginModal').css('display') == 'block') {
                                    location.reload();
                                } else {
                                    if ($.trim(data.action) != '') {
                                        window.location = data.action;
                                    } else if (redirectUrl) {
                                        window.location = redirectUrl
                                    } else {
                                        window.location = HTTP_ROOT + '/';
                                    }
                                }
                            }
                        }
                    } else if ($.trim(data.login) == 'error_limit_login') {
                        $('#login_errors').html(data.msg);
                        $('#login_errors').show();
                        $("#logout_all").modal('show');
                    } else if ($.trim(data.LoginForm_OTP) == 3) {
                        $('#login_success').hide();
                        $('#login_errors').html(JSLANGUAGE.otp_expired);
                        $('#login_errors').show();
                    } else if ($.trim(data.LoginForm_OTP) == 4) {
                        $('#login_success').hide();
                        $('#login_errors').html(JSLANGUAGE.incorrect_login_credential);
                        $('#login_errors').show();
                    } else if ($.trim(data.LoginForm_OTP) == 5) {
                        $('#login_success').hide();
                        $('#login_errors').html(JSLANGUAGE.generate_otp_msg);
                        $('#login_errors').show();
                    } else if ($.trim(data.LoginForm_OTP) == 6) {
                        $('.sub_title').html(JSLANGUAGE.subscribe_login_msg);
                        $('#playchkModal').modal('show');
                    } else if ($.trim(data.LoginForm_OTP) == 7) {
                        $('#login_success').hide();
                        $('#login_errors').html(JSLANGUAGE.subscribe_null);
                        $('#login_errors').show();
                    } else {
                        alert(data.LoginForm_OTP);
                        $('#login_errors').html(JSLANGUAGE.incorrect_email_or_password);
                        $('#login_errors').show();
                    }
                },
                complete: function () {
                    $('#loader_login').hide();
                    $('#login_loading').hide();
                }
            });
        }
    });

    $(".sub-popup-close").click(function () {
        if (parseInt(reload)) {
            location.reload();
        }
        reload = 0;
        $(".modal-backdrop").remove();
    });
    $('#resend_otp').attr("disabled", true);/*28147*/
    if( $('#sms_otp_enabled').val()==1){
        $('#email').removeAttr('name');
        $('#email').removeAttr('required');
    }/*28147*/
});
function addToFavList(content_id, content_type, login_status, action) {
    var url = HTTP_ROOT + "/user/addtofavlist/";
    $.post(url, {'content_id': content_id, 'content_type': content_type, 'login_status': login_status, 'action': action}, function (res) {
        if ($.trim(res) == "success") {
            if (login_status) {
                location.reload();
                return res;
            } else {
                window.location.href = window.location.href;
            }
        }
    });
}
function showLogin() {
    $("#register_form_div").hide();
    $("#library_login_form_div").hide();
    $("#login_form_div").show();
}

function showRegister() {
    if( $('#sms_otp_enabled').val()==1){/*28147*/
        $("input#email_address").after(' <input class="form-control" placeholder="Enter your email id" type="email" title="Please fill out this field.">');
        $('#email_address').remove();
    }/*28147*/
    $("#login_form_div").hide();
    $("#library_login_form_div").hide();
    $("#register_form_div").show();
}

function showLibrary(id,name,from='') {
    $("#lib-name").text(name);
    $("#hidden_library_id").val(id);
    $("#register_form_div").hide();
    $("#login_form_div").hide();
    $("#library_login_form_div").show();
}
function callshowLibrary(id) {
    if(id){
        showLibrary(id,$( "#selectlibrary option:selected" ).text());
    }
}
function chkPlayPerimission(obj) {
    $('#subscribe_success').hide();
    if (typeof (obj) == "undefined") {
        var movie_id = $('#movie_id').val();
        var stream_id = $('#stream_id').val();
        var permalink = $('#content-permalink').val();
        var content_title = $('#content_title').val();
    } else {
        var movie_id = $(obj).attr("data-movie_id");
        var stream_id = $.trim($(obj).attr("data-stream_id"));
        var permalink = $(obj).attr("data-content-permalink");
        var purchase_type = $(obj).attr("data-purchase_type");
        var content_title = $(obj).attr("data-content_title");
        var content_type = $(obj).attr("data-ctype");
    }
    $('#play_loading').show();
    $('#playchk_div').hide();
    var url = HTTP_ROOT + "/user/chkPemission/";
    $.post(url, {'movie_id': movie_id, 'purchase_type': purchase_type, 'stream_id': stream_id, 'content_title': content_title, 'content_type': content_type}, function (response) {
        $('#play_loading').hide();
        if ($.trim(response) === 'noaccess') {
            $('#playchkModal').modal('show');
            $('#playchk_div').show();
            return false;
        } else {
            $("#playchkModal").modal('hide');
            if (stream_id !== '') {
                permalink = permalink + '/stream/' + stream_id;
            }
            var url = HTTP_ROOT + "/" + Player_Page + "/" + permalink;
            if (supportOptionalContent) {
                playVideoNew(permalink, 2);
            } else {
                window.location.href = url;
            }
        }
    });

}

function subscribe() {
    var mob = $("#username").val();
    $('#subscribe_loading').show();
    $("#sub_btn").attr("disabled", "disabled");
    $("#cancel_btn").attr("disabled", "disabled");
    var url = HTTP_ROOT + "/user/subscribe/";
    $.post(url, {'mobile_number': mob}, function (response) {
        $('#subscribe_loading').hide();
        $("#sub_btn").removeAttr("disabled");
        $("#cancel_btn").removeAttr("disabled");
        reload = 1;
        if ($.trim(response.code) == '202') {
            $('#subscribe_errors').hide();
            $('#subscribe_success').show();
            $('#subscribe_success').html(JSLANGUAGE.api_subscribe_msg);
        } else {
            $('#subscribe_success').hide();
            $('#subscribe_errors').show();
            $('#subscribe_errors').html(JSLANGUAGE.api_subscribe_failed);
        }

        setTimeout(function () {
            $('#playchkModal').modal('hide');
            location.reload();
            $(".modal-backdrop").remove();
        }, 5000);
    }, 'json');
}
function generateOtp() {
    $('[name="LoginForm[otp]"]').rules('remove');
    $('#new_otp').val('');
    var x = $("#otp_form").valid();
    if (x) {
        var otp = $('#otp').val();
        if (otp) {
            var url = '/user/generatOtp';
            $.ajax({
                url: url,
                data: $('#otp_form').serialize(),
                type: 'POST',
                dataType: "json",
                beforeSend: function () {
                    $('#login_loading').show();
                },
                success: function (data) {
                    if (data.otp == 'success') {
                        $('#login_errors').hide();
                        $('#login_success').html(data.msg);
                        $('#login_success').show();
                        $('#is_generateotp').val(1);
                        $('#otp_btn').html(JSLANGUAGE.resend_otp);
                    } else if (data.otp == 'failed') {
                        $('#login_errors').html(data.msg);
                        $('#login_errors').show();
                        $('#login_success').hide();
                        $('#is_generateotp').val('');
                    } else {
                        $('#login_errors').html(data.msg);
                        $('#login_errors').show();
                        $('#login_success').hide();
                    }
                },
                complete: function () {
                    $('#login_loading').hide();
                }
            });
        }
    }

}

function validateOTPLogin() {
    $('[name="LoginForm[otp]"]').rules('add', {
        required: true,
        number: true,
        messages: {
            required: JSLANGUAGE.otp_required
        }
    });
    $("#otp_form").submit();
}
/**
 * @method openid_connect_login is used for openid_connect_login
 * @author prakash
 * @return {undefined}
 */
function openid_connect_login(obj) {
    var w_width = 0;
    var w_height = 0;
    if (screen.width >= 1280) {
        w_width = (screen.width / 3);
    } else if (screen.width >= 768) {
        w_width = (screen.width / 2);
    } else {
        w_width = 400;
    }
    if (screen.height > 1200) {
        w_height = (screen.height / 2);
    } else if (screen.height > 700) {
        w_height = 500;
    } else {
        w_height = 400;
    }
    var w_left = (screen.width - w_width) / 2;
    var w_top = (screen.height - w_height) / 2;
    var is_popup = $(obj).attr('data-login');
    $.cookie("is_popup", is_popup);
    $.cookie("current_url", '' + window.location);
    var url = HTTP_ROOT + "/openidConnect/OpenidConnectlogin";
    window.open(url, 'targetWindow', 'toolbar=no,titlebar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' + w_width + ',height=' + w_height + ',top=' + w_top + ',left=' + w_left + '');
}
/**
 * @method openid_connect_signup is used for openid_connect_signup
 * @author prakash
 * @return {undefined}
 */
function openid_connect_signup(obj) {
    var w_width = 0;
    var w_height = 0;
    if (screen.width >= 1280) {
        w_width = (screen.width / 3);
    } else if (screen.width >= 768) {
        w_width = (screen.width / 2);
    } else {
        w_width = screen.width;
    }
    if (screen.height > 1200) {
        w_height = (screen.height / 2);
    } else if (screen.height > 700) {
        w_height = 500;
    } else {
        w_height = screen.height;
    }
    var w_left = (screen.width - w_width) / 2;
    var w_top = (screen.height - w_height) / 2;
    var is_popup = $(obj).attr('data-login');
    $.cookie("is_popup", is_popup);
    $.cookie("current_url", '' + window.location);
    var url = HTTP_ROOT + "/openidConnect/OpenidConnectSignup";
    window.open(url, 'targetWindow', 'toolbar=no,titlebar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' + w_width + ',height=' + w_height + ',top=' + w_top + ',left=' + w_left + '');
}
/**
 * @method oauth_signup is used for sso with OAuth 2.0
 * @author ashis.sahu@muvi.com
 * @return {undefined}
 */
function oauth_signup(type) {
    let divisor = (screen.width >= 1280) ? 3 :
        (screen.width >= 768) ? 2 : 1;
    let w_width = screen.width / divisor;

    let w_height = (screen.height > 1200) ? (screen.height / 2) :
        (screen.height > 700) ? 500 : screen.height;

    let w_left = (screen.width - w_width) / 2;
    let w_top = (screen.height - w_height) / 2;
    $.cookie("current_url", '' + window.location);
    var url = HTTP_ROOT + "/oauthSso/OauthSignup/sso_identity_provider/"+type;
    window.open(url, 'targetWindow', 'toolbar=no,titlebar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' + w_width + ',height=' + w_height + ',top=' + w_top + ',left=' + w_left + '');
}
function fun_logout(permalink, logout_url) {
    if (logout_url) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            window.location.href = permalink;
        };
        xhr.open('GET', logout_url, true);
        xhr.withCredentials = true;
        xhr.send(null);
    } else {
        window.location.href = permalink;
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

//For Single part content audio
function playAudioNew(id, targetMedia) {
    $('.load-container').show();
    var action_url = HTTP_ROOT + "/site/getaudiofile/";
    $.ajax({
        url: action_url,
        data: {"audio_id": id},
        method: "post",
        async: false,
        dataType: "json",
        success: function (res) {
            AP.destroy();
            //res = JSON.parse(res);
            res = res;
            var resdata = new Array();
            resdata = res.data;
            var action = 'add';
            var index = 0;
            var title = resdata[index].title;
            muviAudioMusicPlayerObj = [];
            updateQueueList(resdata, action, index, '');
            $('.art-desc h6').html(title);
            $('.load-container').hide();
            if (supportOptionalContent == 1) {
                $('.vdo-frm .poster-cover img').attr("src", resdata[index].audio_poster);
                if (resdata[index].video_url && resdata[index].video_url.length) {
                    $('.vdo-frm #vdo-ifraim').prop('src', resdata[index].video_url + '/mediaPlayer/1/targetMedia/'+targetMedia);
                    $('.vdo-frm').removeClass("_no-vdo");
                } else {
                    $('.vdo-frm').addClass("_no-vdo");
                }
                if (targetMedia == 2) {
                    $('#ap').addClass("_vdo-on");
                    globalAudio.pause();
                    globalAudio.currentTime = 0;
                }
            }
        }
    });
}
//For Multipart audio play
function playMultipartAudio(audio_id, index) {
    //ER 26822 [Abhinandan] : If condition were added
    if ($('#ap:visible').length != 0 && muviAudioMusicPlayerObj[index] != undefined && muviAudioMusicPlayerObj[index].movie_id != undefined && muviAudioMusicPlayerObj[index].movie_id == audio_id) {
        window.AP.play(index);
    } else {
        $('.load-container').show();
        var action_url = HTTP_ROOT + "/site/GetAllAudioFile/";
        //ER 27707 Start.Only set async value false for Mac and Iphone Safari browser
        /*$.post(action_url, {"audio_id": audio_id}, function (res) {
            var is_content = 1;
            audioPlay(res, index, is_content);
         });*/
        $.ajax({
            url: action_url,
            data: {"audio_id": audio_id},
            method: "post",
            async: false,
            dataType: "json",
            success: function (res) {
                var is_content = 1;
                audioPlay(res, index, is_content,1);//29976
            }
        });
    }
    //ER 27707 End
}
function setSessionForAODContent(content_type, audio_id) {
    var action_url = HTTP_ROOT + "/site/setSessionForAODContent/";
    $.post(action_url, {"content_type": content_type, "audio_id": audio_id}, function (res) {
//        Not required any response as we are only setting session.
    });
}
function loginGuestUser() {
    if ($.trim($("#movie_id").val())) {
        if (parseInt($("#isadv").val())) {
            $('#login_errors').html("You need to register in the system to access a Pre-Order content.");
        } else {
            $('#loginModal').hide();
            window.isGuestUser = 1;
            if ($.trim($("#isDownload").val())) {
                window.guestDownloadType = $.trim($("#isDownload").val());
                getPpvPlans();
                //window.location = HTTP_ROOT + '/' + $('#content-permalink').val();
                //console.log($('#content-permalink').val());
                //getVoucherGeneralInfoGuest(login_object);
                //download_content();
            } else {
                if ($("#chkPlay").length && $("#chkPlay").val()) {
                    chkPlayPerimission();
                } else if (parseInt($("#isppv").val()) || parseInt($("#is_ppv_bundle").val())) {
                    if ($.trim($("#stream_id").val()) === 0) {
                        getPpvPlans();
                    } else {
                        episodegetPpvPlans();
                    }
                } else if (parseInt($("#isadv").val())) {
                    $('#login_errors').html("You need to register in the system to access a Pre-Order content.");
                } else {
                    playMovie();
                }
            }
        }
    } else {
        var redirectUrl = decodeURIComponent(getCookie('redirectToPreviousPage'));
        if ($('#loginModal').length && $('#loginModal').css('display') == 'block') {
            location.reload();
        } else {
            if ($.trim(data.action) != '') {
                window.location = data.action;
            } else if (redirectUrl) {
                window.location = redirectUrl
            } else {
                window.location = HTTP_ROOT + '/';
            }
        }
    }
}
//23619:Generic|Forgot password section: Login popup is displaying after clicking the forgot password link from login popup page[Start]
function modelClose() {
    $('#loginModal').modal('hide');
}
//23619:Generic|Forgot password section: Login popup is displaying after clicking the forgot password link from login popup page[End]
/*39145 :To include three processes for third party users */
function precheckoutLibrary() {
    $('#success-modal').modal('hide');
    if ($.trim($("#add_to_fav").val())) {
        var content_type = $.trim($("#content_type").val());
        if (content_type == 1) {
            var content_id = $.trim($("#stream_id").val());
        } else {
            var content_id = $.trim($("#movie_id").val());
        }
        addToFavList(content_id, content_type, false, 1);
    } else {
        $('#lib_login_errors').html("");
        if ($.trim($("#movie_id").val())) {
            libraryUserPricing();
        } else {
            var redirectUrl = decodeURIComponent(getCookie('redirectToPreviousPage'));
            if ($('#loginModal').length && $('#loginModal').css('display') == 'block') {
                location.reload();
            } else {
                window.location = HTTP_ROOT + '/';
            }
        }
    }
}

function proceedtoLibraryCheckout() {
    $('#precheckout-success-modal').modal('hide');
    var precheckout_response_price=$(".precheckout_response_price_value").val();/*42536*/
    $(".proceedcheckout_price").html(precheckout_response_price);
    $('#proceedcheckout-modal').modal('show');
}

function checkoutLibrary(obj) {
    $('#proceedcheckout-modal').modal('hide');
    $.ajax({
        url: HTTP_ROOT + "/userMonetizationPlans/libraryCheckout",
        method: "post",
        dataType: "json",
        async: true,
        success: function (ress) {
            $('#loader_login').hide();
            if (ress.status == 'success') {
                $(".checkout_response_price").html(ress.response_price);
                $(".checkout_response_feedback").html(ress.response_feedback);
                if(ress.response_url){/*44062*/
                    $(".checkout_response_url").attr("href", ress.response_url);
                } else {
                    $('.checkout_response_url').contents().unwrap();
                }/*44062*/
                $('#checkout-success-modal').modal('show');
            } else {
                $(".checkout_response_feedback").html(ress.response_feedback);
                if(ress.response_url){/*44062*/
                    $(".checkout_response_url").attr("href", ress.response_url);
                } else {
                    $('.checkout_response_url').contents().unwrap();
                }/*44062*/
                $('#checkout-failure-modal').modal('show');
            }
        }
    });
}

function proceedtoplay() {
    var permalink = '';
    if (typeof (obj) === "undefined") {
        var permalink = $('#content-permalink').val();
        if ($('#stream_id').length && $('#stream_id').val()) {
            permalink += '/stream/' + $('#stream_id').val();
        }
    }
    if(typeof (permalink) === "undefined"){
        permalink=$('#hidden_librarypermalink').val();
    }
    window.location.href = HTTP_ROOT + "/" + Player_Page + "/" + permalink;
}
/*39145 :To include three processes for third party users */

/*
 * @purpose: To get custom field acooring to user group
 * @ER: #48268:Admin will be able to create end user types and manage their access rights
 * @auther: sanjib <support@muvi.com>
 * @return: html
 */
function getCustomFields(chkCustomField){
    var user_group = $('#user_group').val();
    var chkCustomProfile = $('#chkCustomProfile').val();
    $.post(HTTP_ROOT + "/user/getCustomFiled", {'user_group': user_group,'chkCustomProfile':chkCustomProfile,'register_popup':1}, function (res) {
        $("#custom_field_for_registration_popup").html(res);
        removeEmailAdressforMobile();//48366
    });
}

//48366
function registerAllowEmail() {
    var mobile_number = $("#mobile_number").val();
    var email_address = $("#email").val();
    var mobile_country_code = $("#mobile_country_code").val();
    if(!isNaN(mobile_number) && mobile_number.length > 0){
        if(!isNaN(mobile_number) && mobile_number.length > 6 && mobile_number.length < 16){
            $("#mobile_number-error").remove();
            $('#send_otp').attr("disabled", false);
            if (mobile_country_code == "") {
                $('<label id="mobile_number-error" class="error" for="mobile_number">' + JSLANGUAGE.country_code_required + '</label>').insertAfter("#mobile_number");
                return false;
            } else { $(".email").val(mobile_number + 'otpuser@muvi.com'); }
        } else {
            $("#mobile_number-error").remove();
            $('<label id="mobile_number-error" class="error" for="mobile_number">' + JSLANGUAGE.valid_phone_number + '</label>').insertAfter("#mobile_number");
            return false;
        }
    }
    if($("#email").val()!="" && typeof $("#email").val() != "undefined"){ $(".email").val($("#email").val());
    } else{ $(".email").val(mobile_number+'otpuser@muvi.com'); }
}
function ValidatePopOtp() {
    var mobile_number=$("#mobile_number").val();
    var email_address=$("#email").val();
    var otp=$("#otp").val();
    var bool = false;
    $.ajax({
        url: HTTP_ROOT + '/api/ValidateOtp',
        type: "POST",
        async: false,
        data: {otp:otp, phone_no:mobile_number,email:email_address},
        success: function (data) {
            if(data.code==200){
                bool = true;
            } else {
                $('#register_loading').hide();
                $('#loader_register').hide();
                $('#otp-error').hide();
                var msg=data.msg;
                $('<label id="otp-error" class="error" for="send_otp">'+msg+'</label>').insertAfter("#otp");
                return false;
                bool = false;
            }
        }
    });
    return bool;
}
//48366