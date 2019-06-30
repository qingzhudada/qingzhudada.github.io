

window.onload = function() {
	// 5.游戏图赏部分导航栏
	var cddVision = document.getElementById('cdd_vision');
	var visionTop = document.getElementById('visionTop');
	var ul = visionTop.children[0];
	var bgBlack = visionTop.children[1];
	var bgLine = visionTop.children[2];
	var num = 0;
	var lis=ul.children;

	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		var s=0;
		lis[i].onmouseenter=function(){
			bgBlack.style.left=this.index*this.offsetWidth+'px';
			this.children[0].style.color='#fff';
		}

		lis[i].onmouseleave=function(){
			bgBlack.style.left=s+'px';
			this.children[0].style.color='#000';
		}
		lis[i].onclick=function(){
			s=this.index*this.offsetWidth;
		}
	}


	// 5.4游戏图赏静态电影部分轮播图
	var num1 = 0;
	var timer = null;
	var dyBig = document.getElementById("dyBig")
	var arr1 = dyBig.children[0];
	var arrLeft1 = arr1.children[0];
	var arrRight1 = arr1.children[1];
	// console.log(arrRight1);
	var ul = dyBig.children[1];
	var imgs = ul.children;	
	dyBig.onmouseenter = function() {
		arr1.style.opacity = "1";
		clearInterval(timeId);
	}
	dyBig.onmouseleave = function() {
		arr1.style.opacity = "0";
	}
	
	var index=0;

	var timeId=setInterval(play,1000)

	function play(){
		$(".clearfix1 li").css("opacity","0");
		$(".clearfix1 li").eq(index).css("opacity","1");
		index++;
		if (index>=$(".clearfix1 li").length) {
			index=0;
		}
		if (index<0) {
			index=$(".clearfix1 li").length-1;
		}
	}

	$(".arrLeft").click(function(){
		index--;
		play();
	})
	$(".arrRight").click(function(){
		index++;
		play();
	})


}




$(function(){
		//点击切换页面
	 	$(".vision_top ul li").click(function(){
	 		var index=$(this).index();
	 		var divs=$(".vision_top").nextAll();
	 		divs.css("display","none");
	 		divs.eq(index).css("display","block");
	 	});

	 var arr=[".cdd_feature",".cdd_job",".feature_right",".main",".cdd_vision"];
	 $(".clearfix li").click(function(){
	 	for (var i = 0; i < arr.length; i++) {
	 		$(arr[i]).css("display","none");
	 	}
	 	var index1=$(this).index()-1;
	 	$(arr[index1]).css("display","block");
	 	console.log(arr[index1]);
	 })




 });

