$(function(){
	$("#btn").click(function(){
		$(".ad_zhuce").hide();
	});

	$("#lhl_tab > li").mouseenter(function(){
		$(this).css("backgroundColor","#c5ac68").siblings()
		.css("backgroundColor","#3b70ae");
	});

	$("#lhl_left").mouseenter(function(){
		conslole.log("dddd");
	});
});

