// 모바일 메뉴창 활성화
$(".m_menu").click(function(){
  $(".mob_menu").animate({"right" : 0}, 0);
  $("html").css({"overflow": "hidden"});
})

//모바일 메뉴창 비활성화
$(".mob_menu_close").click(function(){
  $(".mob_menu").animate({"right" : -100 +"%"}, 0);
  $("html").css({"overflow": "visible"});
})

var mml_id = 0;
$(".mob_menu_list > li > a").click(function(){
  // 인덱스 값
  mml_id = $(this).parent("li").index() + 1;
  // 슬라이드
  $("#mob_sub_list"+mml_id+"").stop().slideToggle(500);
  $(this).parent("li").siblings().find(".mob_sub_list").stop().slideUp(500);
  $(".mob_menu_list > li:nth-of-type("+mml_id+")").find("a > span").toggleClass("mmls_active")
  .parents("li").siblings().find("a > span").removeClass("mmls_active");
  $(".mob_menu_list > li:nth-of-type("+mml_id+")").find("a > button > img.mss").toggleClass("mss_active")
  .parents("li").siblings().find("a > button > img.mss").removeClass("mss_active");
  $(".mob_menu_list > li:nth-of-type("+mml_id+")").find("a > button > img.msa").toggleClass("msa_active")
  .parents("li").siblings().find("a > button > img.msa").removeClass("msa_active");
})