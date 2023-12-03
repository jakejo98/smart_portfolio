var mtn_id = 1;

//숫자 클릭시
$(".map_table_num > li > a").click(function(){
  $(this).addClass("mtp_select").parent("li").siblings().find("a").removeClass("mtp_select");
  mtn_id = $(this).parent("li").index() + 1;
  $("#map_table_box"+mtn_id+"").addClass("map_table_box_active").siblings().removeClass("map_table_box_active");
})

//1페이지로 이동
$(".mtp_fp").parent("a").click(function(){
  mtn_id = 1;
  $(".map_table_num > li:nth-of-type("+mtn_id+") > a").addClass("mtp_select").parent("li").siblings().find("a").removeClass("mtp_select");
  $("#map_table_box"+mtn_id+"").addClass("map_table_box_active").siblings().removeClass("map_table_box_active");
})

//이전 페이지로 이동
$(".mtp_prev").parent("a").click(function(){
  mtn_id--;
  $(".map_table_num > li:nth-of-type("+mtn_id+") > a").addClass("mtp_select").parent("li").siblings().find("a").removeClass("mtp_select");
  $("#map_table_box"+mtn_id+"").addClass("map_table_box_active").siblings().removeClass("map_table_box_active");
  if(mtn_id < 1) {
    mtn_id = 1;
  }
})

//다음 페이지로 이동
$(".mtp_next").parent("a").click(function(){
  mtn_id++;
  $(".map_table_num > li:nth-of-type("+mtn_id+") > a").addClass("mtp_select").parent("li").siblings().find("a").removeClass("mtp_select");
  $("#map_table_box"+mtn_id+"").addClass("map_table_box_active").siblings().removeClass("map_table_box_active");
  if(mtn_id > 5) {
    mtn_id = 5;
  }
})

//5페이지로 이동
$(".mtp_lp").parent("a").click(function(){
  mtn_id = 5;
  $(".map_table_num > li:nth-of-type("+mtn_id+") > a").addClass("mtp_select").parent("li").siblings().find("a").removeClass("mtp_select");
  $("#map_table_box"+mtn_id+"").addClass("map_table_box_active").siblings().removeClass("map_table_box_active");
})

