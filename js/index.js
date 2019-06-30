var box1 = document.getElementById('gf_box1');
var ul = box1.children[0];
var box4 = document.getElementById('gf_box4');
// /ar link = ul.children;/ 
var boxCont = document.getElementById('gf_box_cont');
var flag = document.getElementById('gf_flag');
var index;
for(var i = 0; i <ul.children.length-2; i++){
	var link = ul.children[i];
	link.onclick = linkClick;
	link.setAttribute('index',i);
}
function linkClick () {
	var offsetLeft = this.offsetLeft;
	animate(flag,offsetLeft,30);
	for(var i = 0; i<boxCont.children.length; i++){
		var div = boxCont.children[i];
		if(div.className.indexOf('hide')===-1){
			div.className = "onlinemes hide";		 
	}
		}
		var index = parseInt(this.getAttribute('index'));
		boxCont.children[index].className ='onlinemes show';
}
var timerId = null;
var box3 = document.getElementById('gf_box3');
var ul= box3.children[0];
var ol = box3.children[1];
var  imageWidth =box3.offsetWidth;
var count = ul.children.length;
for(var i = 0; i < count; i++){
	var li = document.createElement('li');
	ol.appendChild(li);	
	li.innerText = i+1;
}
ol.children[0].className = 'current';
var firstLi = ul.children[0];
var cloneLi = firstLi.cloneNode(true);
ul.appendChild(cloneLi);
var olLis = ol.children;
for(var i = 0; i < olLis.length;i++){
	olLis[i].index = i;
	olLis[i].onclick= function(){
	for(var j = 0; j< olLis.length; j++){
		olLis[j].className = '';
	}
	olLis[this.index].className = 'current';
	console.log(-this.index*imageWidth);
	animate(ul,-this.index*imageWidth);
	pic = this.index;
	squ = this.index;
}
}
var pic = 0;
var squ = 0;
function autoPlay (){
	if(pic ===olLis.length){
		ul.style.left= '0px';
		pic = 0;
	// ol.children[1].className = '';
	// ol.children[0].className = 'current';
	}
	//
	pic++;
	animate(ul,-pic*imageWidth);


}
if(squ ===olLis.length-1){
	squ = -1;
}
squ++;
ol.children[squ].className = '';
ol.children[0].className = 'current';
console.log(squ);
for(var i = 0; i <olLis.length;i++){
	olLis[i].className = '';
}
olLis[squ].className = 'current';
timerId = setInterval(autoPlay,3000);
box3.onmouseover = function (){
	clearInterval(timerId);
}
box3.onmouseout = function(){
	timerId = setInterval(autoPlay,3000);
}
// ol.children[0].className = 'current';
// var timerId = setInterval(function(){
//     animate(ul,-liIndex*imageWidth);
// },2000)
// var firstLi = ul.children[0];
// var cloneLi = firstLi.cloneNode(true);
// li.appendChild(cloneLi);
var  inp1= document.getElementById('inp1');
var  btn = document.getElementById('btn');
var span1 = inp1.nextElementSibling;
inp1.onblur = function(){
	if(this.value.trim()==''){
		span1.innerText = '输入不能为空';
		this.placeholder ='';
		this.value ='';
	}else{
		span1.innerText = "";
		this.value = this.value.replace(/\s/g,"");
	}
	
}