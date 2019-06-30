$(function () {
	var config = [
	    {
	    	'width': 500,
	    	'top': 200,
	    	'left':230,
	    	'opacity': 1,
	    	'zIndex': 5
	    },
	    {
	    	'width': 400,
	    	'top': 150,
	    	'left':60,
	    	'opacity': .8,
	    	'zIndex': 4
	    },
	    {
	    	'width': 350,
	    	'top': 90,
	    	'left':123,
	    	'opacity': .5,
	    	'zIndex': 3
	    },
	    {
	    	'width': 350,
	    	'top': 50,
	    	'left':314,
	    	'opacity': .2,
	    	'zIndex': 2
	    },
	    {
	    	'width': 350,
	    	'top': 90,
	    	'left':506,
	    	'opacity': .5,
	    	'zIndex': 3
	    },
	    {
	    	'width': 400,
	    	'top': 150,
	    	'left':520,
	    	'opacity': .8,
	    	'zIndex': 4
	    }
	];
	assign();
	function assign() {
//		flag = false;
		for (var i = 0, len = $('#banner li').length; i < len; i++) {
			$('#banner li').eq(i).animate(config[i], 500/*, function () {
				flag = true;
			}*/);
		}
	}
	$('#banner').mouseenter(function () {
		$('#banner > .arrow').animate({'opacity': 1}, 300);
	})
	$('#banner').mouseleave(function () {
		$('#banner > .arrow').animate({'opacity': 0}, 300);
	})
	$('#arrowRight').click(function () {
//		if (flag) {
//			config.unshift(config.pop());
//			assign();
//		}
		if (!$('#banner li').is(':animated')) {
			config.unshift(config.pop());
			assign();
		}
	})
	$('#arrowLeft').click(function () {
		if (!$('#banner li').is(':animated')) {
		config.push(config.shift());
		assign();
		}
	})
})