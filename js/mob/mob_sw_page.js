var sw_page_hi1 = 0;

sw_page_hi1 = $(".muc_sw_img1 > img").height();
$(window).resize(function(){
  sw_page_hi1 = $(".muc_sw_img1 > img").height();
});

$(".muc_page_container1").height(sw_page_hi1);
$(window).resize(function(){
  $(".muc_page_container1").height(sw_page_hi1);
});

var sw_page_hi2 = 0;

sw_page_hi2 = $(".muc_sw_img2 > img").height();
$(window).resize(function(){
  sw_page_hi2 = $(".muc_sw_img2 > img").height();
});

$(".muc_page_container2").height(sw_page_hi2);
$(window).resize(function(){
  $(".muc_page_container2").height(sw_page_hi2);
});

var sw_page_hi3 = 0;

sw_page_hi3 = $(".muc_sw_img3 > img").height();
$(window).resize(function(){
  sw_page_hi3 = $(".muc_sw_img3 > img").height();
});

$(".muc_page_container3").height(sw_page_hi3);
$(window).resize(function(){
  $(".muc_page_container3").height(sw_page_hi3);
});
