$(function() {
	$('#fashion_nav0').mouseenter(function() {
		$(this).css('backgroundPosition','-110px 0px')
	})
	$('#fashion_nav0').mouseleave(function() {
		$(this).css('backgroundPosition','0px 0px')
	})
    $('.fashion_nav a').click(function() {
    	var index=$(this).index();
    	$("#fs_p div").eq(index).css("display","block").siblings().css("display","none");
    	$('.fashion').css('backgroundImage','url(./images/bg_hssl.jpg)')
    })



	$('#fashion_nav1').mouseenter(function() {
		$(this).css('backgroundPosition','-333px 0px')
	})
	$('#fashion_nav1').mouseleave(function() {
		$(this).css('backgroundPosition','-220px 0px')
	})
    $('#fashion_nav1').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_yh.jpg)')
    	$('#step_content1').css('display','block').siblings('ul').css('display','none')
    })
    $('#fs_p > div').eq(1)


	$('#fashion_nav2').mouseenter(function() {
		$(this).css('backgroundPosition','-110px -111px')
	})
	$('#fashion_nav2').mouseleave(function() {
		$(this).css('backgroundPosition','0px -112px')
	})
    $('#fashion_nav2').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_my.jpg)')
    })


	$('#fashion_nav3').mouseenter(function() {
		$(this).css('backgroundPosition','-333px -111px')
	})
	$('#fashion_nav3').mouseleave(function() {
		$(this).css('backgroundPosition','-222px -112px')
	})
    $('#fashion_nav3').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_ltx.jpg)')
    })


	$('#fashion_nav4').mouseenter(function() {
		$(this).css('backgroundPosition','-110px -224px')
	})
	$('#fashion_nav4').mouseleave(function() {
		$(this).css('backgroundPosition','0px -224px')
	})
	$('#fashion_nav4').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_hssl.jpg)')
    })


	$('#fashion_nav5').mouseenter(function() {
		$(this).css('backgroundPosition','-333px -224px')
	})
	$('#fashion_nav5').mouseleave(function() {
		$(this).css('backgroundPosition','-222px -226px')
	})
	$('#fashion_nav5').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_jsnh.jpg)')
    })


	$('#fashion_nav6').mouseenter(function() {
		$(this).css('backgroundPosition','-110px -336px')
	})
	$('#fashion_nav6').mouseleave(function() {
		$(this).css('backgroundPosition','0px -338px')
	})
	$('#fashion_nav6').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_qmk.jpg)')
    })


	$('#fashion_nav7').mouseenter(function() {
		$(this).css('backgroundPosition','-333px -336px')
	})
	$('#fashion_nav7').mouseleave(function() {
		$(this).css('backgroundPosition','-222px -339px')
	})
	$('#fashion_nav7').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_xdmg.jpg)')
    })


	$('#fashion_nav8').mouseenter(function() {
		$(this).css('backgroundPosition','-110px -449px')
	})
	$('#fashion_nav8').mouseleave(function() {
		$(this).css('backgroundPosition','0px -452px')
	})
	$('#fashion_nav8').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_sd.jpg)')
    })


	$('#fashion_nav9').mouseenter(function() {
		$(this).css('backgroundPosition','-333px -449px')
	})
	$('#fashion_nav9').mouseleave(function() {
		$(this).css('backgroundPosition','-222px -452px')
	})
	$('#fashion_nav9').click(function() {
    	$('.fashion').css('backgroundImage','url(./images/bg_gfxm.jpg)')
    })
})