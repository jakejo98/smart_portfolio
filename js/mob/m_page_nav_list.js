var sw_id = 0;

var swiper = new Swiper(".m_page_nav", {
  slidesPerView: "auto",
  spaceBetween: 30,
});


$(".swiper-slide > a").click(function(){
  sw_id = $(this).parent("li").index() + 1;
  console.log(sw_id);
  $(".swiper-wrapper > li:nth-of-type("+sw_id+") > a").addClass("mpn_active").parent("li").siblings().find("a").removeClass("mpn_active");
  $("#cg_contents"+sw_id+"").addClass("cg_contents_active").siblings().removeClass("cg_contents_active");
})