var pnl_id = 0;

$(".page_nav_list > li > a").click(function(){
  pnl_id = $(this).parent("li").index() + 1;
  $(this).addClass("pnc_active");
  $(this).parent("li").siblings().find("a").removeClass("pnc_active");
  $("#cg_contents"+pnl_id+"").addClass("cg_contents_active").siblings().removeClass("cg_contents_active");
})

$(".page_nav_list > li:nth-of-type(1) > a").click(function(){
  $(".map_table_num > li:nth-of-type(1) > a").addClass("mtp_select").parent("li").siblings().find("a").removeClass("mtp_select");
  $("#map_table_box1").addClass("map_table_box_active").siblings().removeClass("map_table_box_active");
})