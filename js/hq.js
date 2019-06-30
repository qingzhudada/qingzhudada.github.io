$(function(){
	new WOW().init();
	//收起按钮
	var flag=true;
	$(".slide-toggle").click(function(){
		if (flag) {
			$(".slidebar").animate({
			"right":"-153"
		},function(){
			$(".slide-toggle i").css({"backgroundImage":"url(./images/index_z.png)",
				"backgroundPosition":"-417px -121px"
					})
			$(".slide-toggle span").text("展开");
		})
			flag=false;
		}else{
			$(".slidebar").animate({
			"right":"0"
		},function(){
			$(".slide-toggle i").css({"backgroundImage":"url(./images/index_z.png)",
				"backgroundPosition":"-417px -137px"
					})
			$(".slide-toggle span").text("收起");
		})
			flag=true;
		}
	})


	//一吻定情切换
	
	$(".b_nav a:eq(0)").css({
			"backgroundPositionX":"-127px"
		});
	$(".b_nav a").click(function(){
		var index=$(this).index();
		$(this).css({
			"backgroundPositionX":"-127px"
		}).siblings().css("backgroundPositionX","0px");

		$(".b_list").children().eq(index).css({
			"opacity":"1",
			"display":"block",
		}).siblings().css("opacity","0").css("display","none");
		$(".b_list").children().eq(index).children().css("display","block")
		num=index;
		
	})
	var num=1;
	var timeId=setInterval(function(){
		$(".b_nav a").eq(num).click();
		if (num>=$(".b_nav a").length-1) {
			num=-1;
		}
		num++;
	},3000)

	$(".b_nav").mouseenter(function(){
		clearInterval(timeId);
	})
	$(".b_nav").mouseleave(function(){
		timeId=setInterval(function(){
		$(".b_nav a").eq(num).click();
		if (num>=$(".b_nav a").length) {
			num=-1;
		}
		num++;
	},3000)
	})

	
	//职业切换
	$(".race_nav li").mouseenter(function(){
		
		var index=$(this).index();
		var Width=$(".leida").width();
		var Height=$(".leida").height();
		$(".race_list").children().eq(index).css({
			"display":"block"
		}).siblings().css({
			"display":"none"
		})
		//姓名
		$(".race_list").children().eq(index).children().eq(0).css({"backgroundImage":"url(./images/csl-name-"+(index+1)+".png)",
					"transform":"translateY(0px)",
					"opacity":"1"
				});
		// 人物
		$(".race_list").children().eq(index).children().eq(5).css({"backgroundImage":"url(./images/csl-person-"+(index+1)+".png)",
						"display":"block",
						"transform":"translateX(0px)"
				});
		//属性
		if (index <= 3) {
		$(".race_list").children().eq(index).children().eq(3).css({"backgroundPosition":"-"+(index*Width)+"px 0px","transform":"translateY(0px)"});
		}
		else if (index > 3 && index <= 7) {
			$(".race_list").children().eq(index).children().eq(3).css({"backgroundPosition":"-"+((index-4)*Width)+"px -"+Height+"px","transform":"translateY(0px)"});
		}
		else if (index > 7) {
			$(".race_list").children().eq(index).children().eq(3).css({"backgroundPosition":"-"+((index-8)*Width)+"px -"+Height*2+"px","transform":"translateY(0px)"});
		}
	})

	//返回顶部
	$(".slide-top").click(function(){
		// $(document).scrollTop(0);
		// console.log(s);
		$('html,body').animate({
			scrollTop:0
		},400)
	})

	//背景音乐播放
	var play=true;
	$(".player").click(function(){
		if (play) {
			// $(".videobox source").attr("src","");
			$(".videobox audio")[0].pause();
			play=false;
		}else{
			$(".videobox audio")[0].play();
			play=true;
		}
		console.log(6666);
	});
})

