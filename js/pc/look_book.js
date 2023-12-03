var lbw = 0;

lbw = $("body").width();
$(window).resize(function(){
lbw = $("body").width;
});

if(lbw > 800){
  var swiper = new Swiper(".look_book_show", {    
    speed: 5000,
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
    delay: 1000,
    disableOnInteraction: false
    }
  });
}
else {
  var swiper = new Swiper(".look_book_show", {    
    speed: 5000,
    slidesPerView: "auto",
    spaceBetween: 10,
    autoplay: {
    delay: 1000,
    disableOnInteraction: false
    }
  });
}
