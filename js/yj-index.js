
window.onload = function () {

	//导航
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





	// inner start
	var txt = document.querySelector('.yj-txt');
	var btn = document.querySelector('.yj-btn');
//文本框获得焦点时，文本框内容清零； 点击搜索按钮时，有网页跳出；
	txt.onfocus = function() {
		if (this.value === '请输入关键字') {
			this.value = '';
		}
	}
// txt失去焦点时，文本框内容=“'请输入文本框'”
	txt.onblur = function() {
		if (txt.value === '') {

			txt.value = '请输入关键字'
		}
	}
//----------------------- 注册部分--------------------------
var zslb = document.querySelector(".yj-zslb");
var zhuce = document.querySelector('.yj-zhuce');
var gb = document.querySelector('.yj-gb');


zslb.onclick = function() {
	zslb.style.display = 'none';
	zhuce.style.display = 'block';
}
gb.onclick = function() {
	zslb.style.display = 'block';
	zhuce.style.display = 'none';
}
var password = document.querySelector('.yj-password');
var gb_three = document.querySelector('.yj-gb-three');
//input账号和密码清除
var gb_two = document.querySelector('.yj-gb-two');

var email = document.querySelector('.yj-email');
email.oninput = function(){		
	// 
	if (email.value.length > 0 ) {
		gb_two.style.display = 'block';
		gb_two.onclick = function(){
			email.value = '';
			gb_two.style.display = 'none';
		}
	}  else {
			gb_two.style.display = 'none';
		}
}
email.onblur = function () {
	var reg = /^\w+@\w+(\.\w+)+$/;
	var span = email.nextElementSibling;

	if (!reg.test(this.value)) {//不匹配
		span.innerText = '请输入正确的邮箱账号';
		span.style.color = 'red';
		gb_three.style.top = '70px';
	} else {					//匹配的时候
		span.innerText = '';
		span.style.color = '';
	}
}
// addCheck(email, /^\w+@\w+(\.\w+)+$/, '请输入正确的邮箱账号' )
//函数封装 tip 提示的文本
	function addCheck(element, reg, tip){
		element.onblur = function() {
			var span = element.nextElementSibling;
			if (!reg.test(this.value)) {
				span.innerText = tip;
				span.style.color = 'red';
			} else {
				span.innerText = '';
				span.style.color = '';
			}
		}
	}
	
//密码	^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$

password.oninput = function(){
	if (password.value > 0) {
		gb_three.style.display = 'block';
		gb_three.onclick = function(){
			password.value = '';
			gb_three.style.display = 'none';
		}
	} else {
		gb_three.style.display = 'none';
	}
}
//密码验证
addCheck(password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/, '必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-16之间' )



// 游戏资料
var list = document.querySelectorAll('.yj-menu .wz-fen');
    for(var i = 0; i < list.length; i++) {
        list[i].addEventListener('mouseenter', move);
        list[i].addEventListener('mouseleave', leave);
    }
    function move() {
        this.children[1].classList.add('current');
    }
    function leave() {
        this.children[1].classList.remove('current');
    }


    $(window).scroll(function () {
        if($(document).scrollTop() >= 1000) {
            $('.yj-sidebar').css({'position':'fixed', 'top':100,'left':179});
        }else {
        	console.log($(document).scrollTop());
            $('.yj-sidebar').css('position','absolute').css({'top':370,'left':0});
        }
    });



}



