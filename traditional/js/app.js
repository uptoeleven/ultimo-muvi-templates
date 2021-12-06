/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//            views/layouts/featuredsections.html  (start)

var hide_featured ='';
var section ='';

function getValues(h,s){
    hide_featured = h;
    section = s;
}

   var LIMIT = 5;
    var featuredContentapp = angular.module('FeaturedContents', [])
        .filter('html', function ($sce) {
            return function (input) {
                return $sce.trustAsHtml(input);
            };
        })
        .filter('utfdecode', function ($sce) {
            return function (input) {
                var rData = input;
                try { rData = decodeURIComponent(escape(input)) } catch (e) { }
                return rData;
            };
        });
    featuredContentapp.controller('HomeFeaturedSections', function ($scope, $http, $window, $timeout) {

        
        $scope.sections = [];
        $scope.hide_featured = hide_featured;
        $scope.dataoffsetG = 5;
        $scope.len = 5;
        if ($scope.hide_featured == 0) {
            $scope.sections = section;
        } else {
            $scope.dataoffsetG = 0;
            $scope.len = 0;
        }
        if ($scope.sections.length >= $scope.len) {
            $scope.isLoader = true;
        } else {
            $scope.isLoader = false;
        }
        $scope.inProgress = false;
        $scope.updateSlider = function (secID) {
            setTimeout(function(){
            initSlickSlider('.muvi_parent_sec_' + secID + ' .muvi_slider');
            $('.muvi_parent_sec_' + secID + '._init').removeClass('_init');
            $('.thumbnail').matchHeight();
            $('.muvi_play-box').matchHeight();
             },1000);
        };
        $scope.addCart = function (id, flag) {
            showcart(id, flag);
        };
        function loadNextSections(dataoffset) {
            $scope.inProgress = true;
            $http.get(HTTP_ROOT + "/rest/loadFeaturedSections?authToken=" + STORE_AUTH_TOKEN + "&dataoffset=" + dataoffset + "&viewlimit=" + LIMIT + "&themes=" + parentThemeName + "&lang_code=" + language_code).then(function (response) {
                if (response.data.section.length > 0) {
                    for (var j = 0; j < response.data.section.length; j++) {
                        $scope.sections.push(response.data.section[j]);
                    }
                    $scope.dataoffsetG = dataoffset + LIMIT;
                    $scope.addToCart = addToCart;
                    $scope.orderNow = orderNow;
                    $scope.more = more;
                    $scope.preOrder = preOrder;
                    $scope.stockOut = stockOut;
                    $scope.inProgress = false;
                } else {
                    $scope.isLoader = false;
                }
            });
        }
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
        
        angular.element($window).bind("scroll", function (e) {
            if ($scope.sections.length >= $scope.len && !$scope.inProgress && $(window).scrollTop() >= $('.loader.muvi_home_featured').offset().top - $(window).height()) {
                loadNextSections($scope.dataoffsetG);
            }
        });
        angular.element($window).bind('load', function () {
            if ($scope.sections.length >= $scope.len && !$scope.inProgress && $(window).scrollTop() >= $('.loader.muvi_home_featured').offset().top - $(window).height()) {
                loadNextSections($scope.dataoffsetG);
            }
        });
    });

// views/layouts/featuredsections.html  (end)
            
//10334 start      
// movie/show.html  (start)

var relatedContentApp = angular.module('relatedContent', [])
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
relatedContentApp.controller('relatedContentMovie', function($scope, $http, $window, $timeout) {
    
    var content_id = document.getElementById('content_id').value;
    var movie_stream_id = document.getElementById('movie_stream_id').value;
        
    $scope.thumbnailAutoheight = function(){
        $('.thumbnail').matchHeight();
        $('.muvi_play_box_img').matchHeight();
    };
    
    $scope.addCart = function(id,flag){
        showcart(id,flag);
    };
    $scope.isLoader = 0; 
    $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id=" + content_id +"&content_stream_id=" + movie_stream_id +"&type=video" ).then(function (response) {         
           $scope.video = response.data.contentData;           
           $scope.isLoader = $scope.isLoader+1;            
    });     
});
//movie/show.html  (end)

//shop/product_details.html  (start)

var app = angular.module('relatedContentproduct', [])
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
app.controller('relatedContentMovieProduct', function($scope, $http, $window, $timeout,$location) {
    
    var content_id = document.getElementById('content_id').value;
    $scope.isLoader = 0;
    $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id=" + content_id +"&content_stream_id=0&type=video&content_type=physical").then(function (response) {
        $scope.video = response.data.contentData;
        $scope.isLoader = $scope.isLoader+1;            
    });
        
    $http.get(HTTP_ROOT+"/rest/relatedContent?authToken="+STORE_AUTH_TOKEN+"&content_id=" + content_id +"&content_stream_id=0&type=physical&content_type=physical" ).then(function (response) {
        $scope.physical = response.data.contentData;           
        $scope.isLoader = $scope.isLoader+1; 
    });
        
    $scope.thumbnailAutoheight = function(secID){
        $('.thumbnail').matchHeight();
        $('.muvi_play_box_img').matchHeight();
    };
    $scope.addCart = function(id,flag){
        showcartProductDetails(id,flag);
    }; 
});

//shop/product_details.html  (end)
//10334 end