var mpn_iw = 0;
var mpn_sc = 0;

mpn_iw = $("body").width();
$(window).resize(function(){
  mpn_iw = $("body").width;
});

if(mpn_iw < 800){
  $(window).scroll(function () {
    mpn_sc = $(window).scrollTop();
    if(mpn_sc > 180){
      $(".page_nav_container").addClass("pnc_fix");
    }
    else {
      $(".page_nav_container").removeClass("pnc_fix");
    }
  }); 
}









