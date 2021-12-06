
var hideFeatuerd = '';
var sections = '';
var addToCart = '';
var orderNow = '';
var more = '';
var preOrder ='';
var stockOut = '';
var inactive = '';

function getVals(h,s,a,o,m,p,stock,inact){
    hideFeatuerd = h;
    sections = s;
    addToCart = a;
    orderNow = o;
    more = m;
    preOrder = p;
    stockOut = stock;
    inactive = inact;
}

var content_id ='';
var content_stream_id = '';

function getValsInShowpage(cid,csid){
    content_id = cid;
    content_stream_id = csid;
}

var cnt_id = '';
var movie_stream_id ='';
function setValuesForPlayVideo(cid, msid){
    cnt_id = cid;
    movie_stream_id = msid;
}

var cntId = '';

function getCntid(id){
    cntId = id;
}

    //   Layouts - > FeaturedSections.html
    var LIMIT = 5;

var appfeaturedContents = angular.module('FeaturedContents', [])
    .filter('html',function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    };
})
.filter('utfdecode',function($sce){
    return function(input){
        var rData = input;
        try{ rData = decodeURIComponent(escape(input))}catch(e){}
        return rData;
    };
});
appfeaturedContents.controller('HomeFeaturedSections', function($scope, $http, $window, $timeout,$location) {
   
    $scope.sections = [];
    $scope.hide_featured = hideFeatuerd;
    $scope.dataoffsetG = 5;
    $scope.len = 5;
    if($scope.hide_featured == 0){
        $scope.sections = sections;
    }else{
        $scope.dataoffsetG = 0;
        $scope.len = 0;
    }
    if($scope.sections.length >= $scope.len){
         $scope.isLoader = true;
    }else{
         $scope.isLoader = false;        
    }
    $scope.inProgress = false;
    $scope.updateSlider = function(secID){
        initSlickSlider('.muvi_parent_sec_'+secID+' .slider');
        $('.muvi_parent_sec_'+secID+'._init').removeClass('_init');
          $('.muvi_c-info').matchHeight();
        $('.muvi_c-overlay-object').matchHeight();
        initPjax('.muvi_parent_sec_'+secID);
    };
	$scope.addCart = function(id,flag){
		showcart(id,flag);
	};
    function loadNextSections(dataoffset){
        $scope.inProgress = true;
        $http.get(HTTP_ROOT+"/rest/loadFeaturedSections?authToken="+STORE_AUTH_TOKEN+"&dataoffset="+dataoffset+"&viewlimit="+LIMIT+"&themes="+parentThemeName+ "&lang_code="+language_code).then(function (response) {
            if(response.data.section.length > 0){  
                for(var j = 0; j < response.data.section.length; j++){
                    $scope.sections.push(response.data.section[j]);                    
                }                 
                $scope.dataoffsetG = dataoffset+LIMIT;
				$scope.addToCart = addToCart;
				$scope.orderNow = orderNow;
				$scope.more = more;
				$scope.preOrder = preOrder;
				$scope.stockOut = stockOut;
                $scope.inProgress = false;
            }else{
                $scope.isLoader = false;
            } 
        });  
    } 
    angular.element($window).bind("scroll", function(e) {
		if($('.loader._home_featured').length > 0){
        if($scope.sections.length >= $scope.len && !$scope.inProgress && $(window).scrollTop() >= $('.loader._home_featured').offset().top - $(window).height()) {
            loadNextSections($scope.dataoffsetG);
        }
		}
    });
    angular.element($window).bind('load', function() {
        if($scope.sections.length >= $scope.len && !$scope.inProgress && $(window).scrollTop() >= $('.loader._home_featured').offset().top - $(window).height()) {
            loadNextSections($scope.dataoffsetG);
        }
    });
     <!--Upasana ER 27448-->
    $scope.thumbsLike = function(content){
    
        $http.get(HTTP_ROOT+"/like/likes?content_id="+content.movie_id+'&like_status=0').then(function (response) { 
//     alert(JSON.stringify(response));
        if(response.data.result == 'login'){
            if ($("#loginModal").length > 0) {
                $("#loginModal").modal('show');
                $('#loader').hide();
                $("#loginModal .modal-header h4").html('Please login to Like this Content');
            }

        }else{
//        alert(JSON.stringify(response));
             content.is_like = 1;
             content.all_likes=response.data.get_likes;
//             window.location = content.permalink;
       }
             
}); 
    };

     $scope.thumbsUnLike = function(content){
        $http.get(HTTP_ROOT+"/like/likes?content_id="+content.movie_id+'&like_status=1').then(function (response) {   
        if(response.data.result == 'login'){
            if ($("#loginModal").length > 0) {
                $("#loginModal").modal('show');
                $('#loader').hide();
                $("#loginModal .modal-header h4").html('Please login to Like this Content');
            }
        }else{
             content.is_like = 0;

             content.all_likes=response.data.get_likes;
//             window.location = content.permalink;
        }
        
        });
    };
     <!--Upasana ER 27448-->
}); 

function initPjax(parentObj){
    if ($.support.pjax) {
        $(parentObj).find('a').each(function(){
            try {
                 if($(this).attr('href').length > 0 && $(this).attr('href') != 'javascript:void(0);'){
                $(this).attr('data-pjax', '#main');
                }
            }
        catch(err) {
            console.log('length searching..');
        };
           
        })
    }
}
    //   Layouts - > FeaturedSections.html end

    //        playing -> play_video.html

     var playerApp = angular.module('Player', [])
        .filter('html',function($sce){
        return function(input){
            return $sce.trustAsHtml(input);
        };
    });
    playerApp.controller('episodes', function($scope,$http) {
        $scope.episodelist = ""; 
        $scope.hasData = false; 
        $scope.isLoading = true; 
        $scope.initSlid = function(section){
            if($scope.hasData){
                initSliderJs(section);
                $scope.isLoading = false; 
            }
	};
        $http.get(HTTP_ROOT+"/rest/getEpisodes?authToken="+STORE_AUTH_TOKEN+"&movie_id="+cnt_id+"&movie_stream_id="+movie_stream_id).then(function (response) {
        if(response.data.list.length > 0){
            $scope.episodelist = response.data.list;
                $scope.hasData = true;
            }
        });
    });
    /* 21178: Advance Player| Support "Related Audios" and "Related Products" in Advance Player page similar to Content Details */
    playerApp.controller('related', function($scope,$http) {
        $scope.audio = ""; 
        $scope.video = "";
        $scope.physical = "";
        $scope.hasData = false; 
        $scope.isLoading = true; 
        $scope.initSlid = function(section){
            if($scope.hasData){
                initSliderJs(section);
                $scope.isLoading = false; 
            }
	};
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+cnt_id+"&content_stream_id="+movie_stream_id+"&type=audio").then(function (response) {
        if(response.data.contentData.length > 0){
                $scope.audio = response.data.contentData;
                $scope.hasData = true;
            }
        });
        
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+cnt_id+"&content_stream_id="+movie_stream_id+"&type=video").then(function (response) {
            if(response.data.contentData.length > 0){
                $scope.video = response.data.contentData;
                $scope.hasData = true;      
            }
        });
    
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+cnt_id+"&content_stream_id="+movie_stream_id+"&type=physical" ).then(function (response) {
            if(response.data.contentData.length > 0){
                $scope.physical = response.data.contentData;
                $scope.hasData = true;
            }
        });
        
        $scope.addCart = function(id,flag){
            showcart(id,flag);
	};
        
    });
    /* 21178: Advance Player| Support "Related Audios" and "Related Products" in Advance Player page similar to Content Details */
    function initSliderJs(section){
        setTimeout(function(){
            $('.lazy').not('.slick-initialized').slick({
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
            $(".lazy."+section).removeClass(section);
        }, 2000);
    }
    //        playing -> play_video.html end
//10334 (start)
    // Shop -> product_details.html
    var flag = true;
    var relatedContentApp = angular.module('relatedContent_product', [])
    .filter('html',function($sce){
        return function(input){
            return $sce.trustAsHtml(input);
        };
    })
    .filter('utfdecode',function($sce){
        return function(input){
            var rData = input;
            try{ rData = decodeURIComponent(escape(input))}catch(e){}
            return rData;
        };
    });
	
    relatedContentApp.controller('relatedContentMovie', function($scope, $http, $window, $timeout,$location,$interval) {
	$scope.isLoader = 0; 
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+cntId+"&content_stream_id=0&type=audio&content_type=physical").then(function (response) {
            $scope.audio = response.data.contentData;
            $scope.isLoader = $scope.isLoader+1; 
        });
        
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+cntId+"&content_stream_id=0&type=video&content_type=physical").then(function (response) {
            $scope.video = response.data.contentData;
            $scope.isLoader = $scope.isLoader+1;            
        });
                
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+cntId+"&content_stream_id=0&type=physical&content_type=physical" ).then(function (response) {
            $scope.physical = response.data.contentData;
            $scope.isLoader = $scope.isLoader+1;
        });
        
        $scope.thumbnailAutoheight = function () {           
            if (flag) {                
                var myInterval= $interval(function () {
                    $('.muvi_c-overlay-object').matchHeight(); 
                    $('.muvi_c-info').matchHeight(); 
                    flag = false;
                }, 500,6)
                .then(function(){
                    $interval.cancel(myInterval);
                });
            }            
        };
        $scope.addCart = function(id,flag){
            showcart(id,flag);
	}; 
    });

    // Shop -> product_details.html end

    //movie -> show .html
    var flag = true;
    var app = angular.module('relatedContent', [])
    .filter('html',function($sce){
        return function(input){
            return $sce.trustAsHtml(input);
        };
    })
    .filter('utfdecode',function($sce){
        return function(input){
            var rData = input;
            try{ rData = decodeURIComponent(escape(input))}catch(e){}
            return rData;
        };
    });

    app.controller('relatedContentMovie', function($scope, $http, $window, $timeout,$location,$interval) {
        $scope.isLoader = 0; 
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+content_id+"&content_stream_id="+content_stream_id+"&type=audio" ).then(function (response) {
            $scope.audio = response.data.contentData;
            $scope.isLoader = $scope.isLoader+1;
        });
        
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+content_id+"&content_stream_id="+content_stream_id+"&type=video" ).then(function (response) {
            $scope.video = response.data.contentData;
            $scope.isLoader = $scope.isLoader+1;            
        });
        
        $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id="+content_id+"&content_stream_id="+content_stream_id+"&type=physical" ).then(function (response) {
            $scope.physical = response.data.contentData;
            $scope.isLoader = $scope.isLoader+1;
        });
        
        $scope.thumbnailAutoheight = function () {           
            if (flag) {                
                var myInterval= $interval(function () {
                    $('.muvi_c-overlay-object').matchHeight(); 
                    $('.muvi_c-info').matchHeight(); 
                    flag = false;
                }, 500,6)
                .then(function(){
                    $interval.cancel(myInterval);                   
                });
            }            
        };
        
        $scope.addCart = function(id,flag){
            showcart(id,flag);
	}; 
    });
    //movie -> show .html end
//    10334 (end)


