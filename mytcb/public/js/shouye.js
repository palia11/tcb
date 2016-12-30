//定义轮播模块
//define(function())








function aa(){
	



var imgs =  document.querySelector(".imgs");/*承载图片*/
var dian =  document.querySelector(".dian");
var lis =  document.querySelectorAll(".lis"); /*所有的点*/


var a = 0;
var num = 0;
var timer,timer1,timer2;
function play(){ /*自动播放*/
	imgs.style.transition="all"+" 0s"+" linear";  
	timer = setInterval(function(){
		a-=5;
	if(a <= -500){
		a = 0;
		num = 0;
		clearInterval(timer);
	}
	if(a%100 == 0){
		num = -a/100;
		clearInterval(timer);
		timer = setTimeout(play,1000);
	}
		imgs.style.marginLeft = a + "%";
		changeColor(num);
	},30);
	
}
play();
function changeColor(num){/*点变色*/
	for (var i = 0;i< lis.length;i++) {
		lis[i].style.background = "#ccc";
	}
	lis[num].style.background = "#666";
}
changeColor(0);
	for(var k = 0;k < lis.length;k++){
		lis[k].index = k;
		lis[k].onclick = function(){ /*点击当前变色*/
			clearInterval(timer);
			imgs.style.transition="all"+" 1s"+" linear";
			num = this.index;
			console.log(num);
			a=-num*100;
			imgs.style.marginLeft = a + "%";/*点击使图片位置变化*/
			changeColor(num);
			timer = setTimeout(play,2000);
			
		}
	}








}aa();
