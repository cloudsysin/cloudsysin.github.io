// JavaScript Document
jQuery(document).ready(function($) {
	//Nav Hover
	jQuery("#NavProduct, #NavSuccess, #NavAbout").hover(function(){
															jQuery(this).parent().find("div").hide();
															
															jQuery(this).find("div").animate({"opacity": "show"}, 150)
																.end().find(">a").addClass("navHover");
														},
														function(){
															jQuery(this).find("div").hide()
																.end().find(">a").removeClass("navHover");
															var os = jQuery(this).parent().find("li[class='thisChild']")[0];
															jQuery(this).parent().find("li[class='thisChild']").parent().parent().animate({"opacity": "show"}, 150);
														});
	jQuery("#ContentTab span").click(function(){
									jQuery("#ContentTab span").removeClass("current");
									jQuery("#Tab01, #Tab02, #Tab03, #Tab04").hide();
									var id = this.className;
									jQuery("#" + id).show();
									jQuery(this).addClass("current");
								});
	jQuery("#ChengduMap, #ShanghaiMap, #XianMap").toggle(function(){
									jQuery(this).html("close map").parent().find("img").show();
								},
								function(){
									jQuery(this).html("look for it on map").parent().find("img").hide();
								});
	//childNode Hover
	jQuery("#SideBar li").hover(function(){
										jQuery(this).css("background-color","#F8AD6A").find("a").css({
																									 "color":"#FFF",
																									 "font-weight":"bold"
																									 });
									},function(){
										jQuery(this).css("background-color","").find("a").css({
																								 "color":"",
																								 "font-weight":""
																								 });
									});
});
function Banner(thisItem){
	var speed = 5000;
	var lis = document.getElementById("Banner").getElementsByTagName("li");
	var num = lis.length;
	var preItem;
	var nextItem;
	GetItem(thisItem);
	jQuery(lis.item(thisItem)).fadeIn(1000);
	document.getElementById("BannerPrevious").onclick = function(){
		clearInterval(bannerHandle);
		jQuery("#Banner li").css("display","none");
		Banner(preItem);
	}
	document.getElementById("BannerNext").onclick = function(){
		clearInterval(bannerHandle);
		jQuery("#Banner li").css("display","none");
		Banner(nextItem);
	}
	bannerHandle = setInterval(function(){
										GetItem(thisItem);
										thisObj = lis.item(thisItem);
										nextObj = lis.item(nextItem);
										jQuery(thisObj).fadeOut(1000);
										jQuery(nextObj).fadeIn(1000);
										if(thisItem < num - 1){
											thisItem++;
										}else{
											thisItem = 0;
										}
									   },speed);
	function GetItem(thisItem){
		if(thisItem == 0){
			preItem = num - 1;
		}else{
			preItem = thisItem - 1;
		}
		if(thisItem == num - 1){
			nextItem = 0;
		}else{
			nextItem = thisItem + 1;
		}
	}
}