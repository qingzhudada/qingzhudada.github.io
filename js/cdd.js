var f_right = document.getElementById('feature_right');
var r_content = f_right.children[0];
var r_nav = f_right.children[1];
var rw = r_content.children[0];
var rn = r_nav.getElementsByTagName('a');
// 获取所有的a并注册a的onmouseenter
for (var i =0; i < rn.length; i++) {
	var ras = rn[i];
	rn[0].style.color = 'white';
	ras.index = i;
	ras.onmouseenter = fn; 
	// ras.onmouseleave = fn1;
}
function fn() {
	for (var i = 0; i < rn.length; i++) {
		var ras = rn[i];
		rn[i].index = i;
		ras.className = '';
		ras.style.color = '';
	}
	this.className = 'current';
	this.style.color = 'white';
	var aaa = this.index;
	rw.style.backgroundImage = 'url(./images/zb-' + (aaa + 1) + '.jpg)';
	
}




