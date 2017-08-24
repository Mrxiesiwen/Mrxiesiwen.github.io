/*
* @Author: xiesiwen
* @Date:   2017-07-22 14:14:06
* @Last Modified by:   xiesiwen
* @Last Modified time: 2017-08-22 22:34:11
*/
$(function(){
	$(".show-list-01 .showbox,.show-list-02 .showbox").click(function(e){
		// 阻止默认事件
		e.preventDefault();
		//获取当前图片索引
		var index=$(this).parent().index();
		// 获取长度
		var length=$(this).parent().parent().find(".showbox").length;
		//获取当前被点击a标签的爷爷元素
		var grandpa=$(this).parent().parent();
		//获得a的href地址
		var newsrc=$(this).attr("href");
		// 将href赋给遮罩层子元素img
		$(".contentImgBox").attr({"src":newsrc});
		// 所有元素位置进行设置
		func_center($(".contentImgBox"));
		// 遮罩层显示
		$('.show-box-mask').show().height($(window).height());
		// 图片显示
		$(".contentImgBox,#btns").show();
		//隐藏右侧滚轮
		$("body").css({overflow:"hidden"});
		// 前进、后退按钮特效
		// 前进按钮特效
		$(".btn-next").bind("click",function(){
			if(length>6){
				if(index<7){
					var newsrc=grandpa.find(".showbox").eq(index+1).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index++;
				}
				else if(index==7){
					var newsrc=grandpa.find(".showbox").eq(0).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index=0;
				}
			}
			else{
				if(index<5){
					var newsrc=grandpa.find(".showbox").eq(index+1).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index++;
				}
				else if(index==5){
					var newsrc=grandpa.find(".showbox").eq(0).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index=0;
				}
			}
		})
		// 后退按钮特效
		$(".btn-previous").bind("click",function(){
			if(length>6){
				if(index!=0){
					var newsrc=grandpa.find(".showbox").eq(index-1).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index--;
				}
				else if(index==0){
					var newsrc=grandpa.find(".showbox").eq(7).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index=7;
				}
			}
			else{
				if(index!=0){
					var newsrc=grandpa.find(".showbox").eq(index-1).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index--;
				}
				else if(index==0){
					var newsrc=grandpa.find(".showbox").eq(5).attr("href");
					$(".contentImgBox").attr({
						"src":newsrc})
					index=5;
				}
			}

		})

	})
	//关闭按钮效果
	$(".btn-close").click(function(){
		$(".show-box-mask,.contentImgBox,#btns").hide();
		$("body").css({overflow:"auto"});
	})

}).keydown(function(e){			//document监听按下esc将关闭弹出框及遮罩层
	if(e.keyCode==27){
		$(".show-box-mask,.contentImgBox,#btns").hide();
		// 重新显示滑动条
		$("body").css({overflow:"auto"});
	}
})
function func_center(obj){
	//获取当前窗口距离页面顶部的距离
	var scrolltop=$(window).scrollTop();
	//当前浏览器窗口的 宽高
	var screenWidth = $(window).width(), screenHeight = $(window).height();
	// 获取图片宽度
	var img_width=obj.width();
	// 获取图片高度
	var img_height=obj.height();
	var objLeft=(screenWidth-img_width)/2;
	var objTop=(screenHeight-img_height)/2+scrolltop;
	obj.css({
		"left":objLeft+"px",
		"top":objTop+"px"
	})
	// 对mask遮罩层位置进行设置
	$(".show-box-mask").css({
		"top":scrolltop
	})
	//btn-next按钮位置设置
	$(".btn-next").css({
		"right":"10px",
		"top":scrolltop+screenHeight/2+"px"
	})
	//btn-previous按钮位置设置
	$(".btn-previous").css({
		"left":"10px",
		"top":scrolltop+screenHeight/2+"px"
	})
	//btn-close按钮位置设置
	$(".btn-close").css({
		"right":"10px",
		"top":scrolltop+screenHeight/100+"px"
	})
}