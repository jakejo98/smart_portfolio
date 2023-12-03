// //최상단 페이지로 이동하는 버튼
var sch_bottom = 0; 
var sch_mv = 0;

// #main에 bottom 값
sch_bottom = $(".main").height() - $(window).height() - $(window).scrollTop();

$(window).scroll(function () {
  sch_mv = $(window).scrollTop();
  if(sch_mv > sch_bottom){
    $(".top_btn").addClass("stop")
  }
  else {
    $(".top_btn").removeClass("stop")
  }
}); 

$(".top_btn").click(function(){
  $("html").animate({"scrollTop": 0}, 1000);
})

$(window).scroll(function () {
  sch_mv = $(window).scrollTop();
  if(sch_mv > 100){
    $(".top_btn").css({"display":"flex"});
  }
  else {
    $(".top_btn").css({"display":"none"});
  }
}); 





