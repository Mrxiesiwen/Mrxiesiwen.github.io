/*
* @Author: xiesiwen
* @Date:   2017-07-20 16:04:41
* @Last Modified by:   xiesiwen
* @Last Modified time: 2017-08-07 14:49:25
*/

$(document).ready(function(){
	//头部导航栏hover效果
	$(".nav li a").mouseover(function(){
		$(this).addClass("nav-hover").parent().siblings().find("a").removeClass("nav-hover");
	}).eq(0).mouseover();
	//實現大圖背景透明度动画效果,鼠標移動至目標時，動畫停止，鼠標離開時，動畫繼續
	var adTimer;
	var header_img=$(".header-body .BigImg");
	$(".header-body").hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer=setInterval(function(){
			if(header_img.attr("class").indexOf("fadein")<1){
				header_img.addClass("fadein");
			}
			else{
				header_img.removeClass("fadein");
			}
		},3000);
	}).trigger("mouseout");
	//寫生作品動畫，鼠標點擊寫生作品，字體顏色改變，右側自動切換至相應的作品
	var sidebar_btn=$(".stage-box .sidebar a");
	sidebar_btn.click(function(){
		var index=$(this).parent().index();
		$(this).css({color:"#fff"}).parent().siblings().find("a").css({"color":"#000"});
		if(index==0){
			$(".show-list-01").show().siblings().hide();
		}
		else{
			$(".show-list-02").show().siblings().hide();
		}
	}).eq(0).click();

	//使用fancybox实现写生作品遮罩层效果，采用默认效果
	// $('.fancybox').fancybox({
	// 	"overlayColor":"red",
	// 	"overlayShow":true
	// });
	//窗口右侧sidebar回到顶部效果
	//1.监听滚动条
	$(window).on("scroll",function(){
		if($(this).scrollTop()>200){
			$("div.return-top").fadeIn();
		}
		else{
			$("div.return-top").fadeOut();
		}
	})
	// 2.回到顶部动画效果
	$("#side-nav div.return-top").click(function(){
		$("body").animate({
			"scrollTop":0
		},1000);
	});
	// 提交按钮弹出框遮罩层动画
	$(".footer-form .submit").click(function(e){
		// 阻止默认提交事件
		e.preventDefault();
		// 遮罩层显示
		$('.theme-popover-mask').show().height($(document).height());
		// 获取当前窗口距离页面顶部的高度
		// var scrolltop = $(window).scrollTop();
		// 居中
		center($(".theme-popover"));
		// 弹框
		$('.theme-popover').show();
		//弹框弹出后隐藏掉滑动条
		$("body").css({overflow:"hidden"});
		// 2秒后自动关闭会话框
		function close(){
			$('.theme-popover-mask').hide();
			$('.theme-popover').hide();
			// 重新显示滑动条
			$("body").css({overflow:"auto"});
		}
		setTimeout(close,2000);
	});
}).keydown(function(e){						//document监听按下esc将关闭弹出框及遮罩层
	if(e.keyCode==27){
		$('.theme-popover-mask').hide();
		$('.theme-popover').hide();
			// 重新显示滑动条
			$("body").css({overflow:"auto"});
		}
	})
function center(obj){
	var screenWidth = $(window).width(), screenHeight = $(window).height(); //当前浏览器窗口的 宽高
	var scrolltop = $(window).scrollTop();//获取当前窗口距离页面顶部高度
	var objLeft = (screenWidth - obj.width())/2;
	var objTop = (screenHeight - obj.height())/2 + scrolltop;
	obj.css({"left": objLeft + 'px', "top": objTop + 'px','display': 'block'});
	//浏览器窗口大小改变时触发,对window尺寸进行重新统计
	// $(window).resize(function() {
	// 	screenWidth = $(window).width();
	// 	screenHeight = $(window).height();
	// 	scrolltop = $(window).scrollTop();
	// 	objLeft = (screenWidth - obj.width())/2 ;
	// 	objTop = (screenHeight - obj.height())/2 + scrolltop;
	// 	obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'});
	// });
	//浏览器有滚动条时的操作触发，对window尺寸进行重新统计,
	// $(window).scroll(function() {
	// 	screenWidth = $(window).width();
	// 	screenHeight = $(window).height();
	// 	scrolltop = $(window).scrollTop();
	// 	objLeft = (screenWidth - obj.width())/2 ;
	// 	objTop = (screenHeight - obj.height())/2 + scrolltop;
	// 	obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'});
	// });
}
