window.onload=function () {
	//页面加载显示效果
	new WOW().init();
	//导航过度效果
	var csl_nav=document.getElementById('csl_nav');
	var lis=csl_nav.children[0].children;
	var div=$('#csl_nav div');

	var s=-681;
	lis[0].style.backgroundImage='url(./images/csl_topmenu.png)';
	lis[0].style.backgroundPositionX=s+'px';
	lis[0].style.opacity='1';
	
	for (var i=0;i<lis.length;i++) {
		lis[i].index=i;
		
		lis[i].onmouseenter=function  () {
			for(var j=0;j<lis.length;j++){
				lis[j].style.backgroundImage='';
			}
			this.style.backgroundImage='url(./images/csl_topmenu.png)';			
			this.style.backgroundPositionX=this.index >=4 ? -960-this.index*140+'px' : s-this.index*140+'px';			
		}	
	}
	
	//导航下拉
	$('#csl_nav li').mouseover(function  () {
		$(this).children('div').stop().slideDown(300);
	})
	$('#csl_nav li').mouseleave(function  () {
		$(this).children('div').stop().slideUp(300);
	})
	
	//轮播图切换
	var btn=document.querySelector('.banner-btn');
	var center=document.querySelector('.center');
	var banner = new FragmentBanner({
		container : "#banner1",//选择容器 必选
		imgs : ['images/csl_1.jpg','images/csl_2.jpg','images/csl_3.jpg','images/csl_4.jpg'],//图片集合 必选
		size : {
			width : 700,
			height : 365
		},//容器的大小 可选
		//行数与列数 可选
		grid : {
			line : 6,
			list : 5
		},
		index: 0,//图片集合的索引位置 可选
		type : 1,//切换类型 1 ， 2 可选
		boxTime : 4000,//小方块来回运动的时长 可选
		fnTime : 5000//banner切换的时长 可选
	});

	center.onmouseenter=function  () {
		btn.style.display='block';
	}
	center.onmouseleave=function  () {
		btn.style.display='none';
	}
	
	
	//角色切换
	var csl_js=document.getElementById('csl_js');
	var juese_left=document.querySelector('.juese_left');
	var juese_right=document.querySelector('.juese_right');
	var csl_li=juese_left.children[0].children;
	var juese_center=document.querySelector('.juese_center');
	var h3=juese_center.children[0];
	for(var i=0;i<csl_li.length;i++){
		csl_li[i].index=i;
		juese_right.style.backgroundImage='url(./images/csl-nan-1.png)';

		csl_li[i].onmouseenter=function  () {
			h3.style.backgroundImage='url(./images/csl_name-'+(this.index+1)+'.png)';
			juese_right.style.backgroundImage='url(./images/csl-nan-'+(this.index+1)+'.png)';
			new WOW().init();
		$(".sex .nan").css({//滑动每个li都让按钮回到男上
		"backgroundPosition":"-474px -213px"
			}).siblings().css({"backgroundPosition":"-474px -259px"});	
		}
		csl_li[i].onmouseleave=function(){
		
			juese_right.style.transform='translateX(100px)';
		}
	}
	
	//男女切换
	$(".sex .nan").css({//页面加载完让男按钮选中
		"backgroundPosition":"-474px -213px"
		});
	$(".sex span").mouseover(function(){
		var str=$(h3).css('backgroundImage');
		var img=str.split('-')[1];
		var imgs=img.split('"')[0];
//		console.log(imgs);
		if ($(this).index()==0) {
			$(this).css({
				"backgroundPosition":"-474px -213px",
			}).siblings('span').css({"backgroundPosition":"-474px -259px"});
			$(juese_right).css("backgroundImage","url(images/csl-nan-"+imgs+")");
		} else{
			$(this).css({
				"backgroundPosition":"-1164px -520px",
			}).siblings('span').css({"backgroundPosition":"-696px -315px"});
			$(juese_right).css("backgroundImage","url(images/csl-nv-"+imgs+")");
		}
	});
	
	//公告栏滑动
	var asid_caption=document.querySelector('.asid_caption');
	var asid_li=asid_caption.children[0].children;
	var bar=asid_caption.children[1];
	var list_1=document.querySelector('.list_1');
	var list_ul=list_1.children[0];
//	console.log(bar.offsetLeft);
	for (var i=0;i<asid_li.length;i++) {
		asid_li[i].index=i;
		asid_li[i].onmouseenter=function(){
			bar.style.left=this.index*this.offsetWidth+7+'px';
			list_1.style.left=-this.index*list_ul.offsetWidth+'px';
			
		}
	}
	
	//花瓣飘落
	$(document).snowfall('clear');
        $(document).snowfall({
            image: "images/huaban.png",
            flakeCount:30,
            minSize: 5,
            maxSize: 22
        });

      //精彩视频开关门
      $("#csl_jcsp ul li").mouseover(function(){
      		// $(this).children().children('span').animate({
      		// 	transform:"translateX(0px)"
      		// },300);
		// $(this).children().children('span').css("transform","translateX(0px)");
      	$(this).children().children('i').css("opacity",1);
      }).mouseleave(function(){
      	$(this).children().children('i').css("opacity",0);
      });


	
	//真人秀轮播
	var zrx_mm=document.querySelector('.zrx_mm');
	var ul=zrx_mm.children[0];
	var mm_left=zrx_mm.children[1];
	var mm_right=zrx_mm.children[2];
	var zrx_li=ul.children;
	var index=-1;
	var count=zrx_li.length;
	var timeId1=setInterval(play,2000);
	
	
	function play(){
		mm_right.click();
	}
	zrx_mm.onmouseenter=function(){
		clearInterval(timeId1);
	}
	zrx_mm.onmouseleave=function(){
		timeId1=setInterval(play,2000);
	}
	mm_left.onclick=function(){
		if (index==0) {
			ul.style.left=-count*zrx_mm.offsetWidth;
			index=count;
			console.log(index)
		}
		index--;
		animate(ul,-index*zrx_mm.offsetWidth);
	}
	mm_right.onclick=function(){
		if (index==count) {
			ul.style.left='0px';
			index=0;
		}
		index++;
		if(index<zrx_li.length){
			animate(ul,-index*zrx_mm.offsetWidth);
		}
	}
	var liClone=zrx_li[0].cloneNode(true);
	ul.appendChild(liClone);
	function animate(element, target) {
   // 通过判断，保证页面上只有一个定时器在执行动画
  if (element.timerId) {
    clearInterval(element.timerId);
    element.timerId = null;
  }

  element.timerId = setInterval(function () {
    // 步进  每次移动的距离
    var step = 10;
    // 盒子当前的位置
    var current = element.offsetLeft;
    // 当从400 到 800  执行动画
    // 当从800 到 400  不执行动画

    // 判断如果当前位置 > 目标位置 此时的step  要小于0
    if (current > target) {
      step = - Math.abs(step);
    }

    // Math.abs(current - target)   <= Math.abs(step)
    if (Math.abs(current - target)   <= Math.abs(step)) {
      // 让定时器停止
      clearInterval(element.timerId);
      // 让盒子到target的位置
      element.style.left = target + 'px';
      return;
    }
    // 移动盒子
    current += step;
    element.style.left = current + 'px';
  }, 5);
}
	 
	
	
	
}