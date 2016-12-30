function mm(){
function createXHR(){
		//如果浏览器支持XMLHttpRequest那么直接创建返回该对象
		if (typeof XMLHttpRequest != 'undefined'){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject != 'undefined'){
			if (typeof arguments.callee.activeXString != 'string'){
				var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
				for(var i = 0; i < versions.length;i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i]
					}catch(e){

					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		}else{
			throw new Error("没法正常的创建ajax对象");
		}
	}
var baseURL = 'http://localhost:3555';

// var shop_name = document.querySelector(".com");
// var shop_pic = document.querySelector(".tu");
// var shop_add = document.querySelector(".thr");

// function messData(){
// 	var xhr = createXHR();
// 	xhr.open('get',baseURL+"/data/"+k);
// 	xhr.send(null);
// xhr.onreadystatechange = function(){
// 		if(xhr.readyState == 4){
// 			if(xhr.status == 200 || xhr.status == 304){
// 				 var data1 = shu.shop_data;
//                console.log(data1);
//                var prop1 = ["shop_name","main","addr_detail","shop_ico"]




//    }
//   }	
// }





function Getdata(k){
	var xhr = createXHR();
	xhr.open('get',baseURL+"/data/"+k);
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200 || xhr.status == 304){
				var data = JSON.parse(xhr.responseText)["product"];
				console.log(data);
				for (var i = 0; i < data.length;i++) {
					var pro = ["product_img","product_name","service_desc1","product_price"];
					var oli = document.createElement("li");
					var img = document.createElement("img");
					img.src = data[i][pro[0]];
					img.className = "pic1"
					oli.appendChild(img);
					var odiv = document.createElement("div");
					odiv.className = "list_1";
					var div1 = document.createElement("div");
					div1.className = "service";
					var p1 = document.createElement("p");
					var a = document.createElement("a");
					a.innerHTML = data[i][pro[1]];
					p1.appendChild(a);
					var p2 = document.createElement("p");
					p2.innerHTML = data[i][pro[2]];
					div1.appendChild(p1);
					div1.appendChild(p2);
					odiv.appendChild(div1);
					var span = document.createElement("span");
					span.innerHTML = "￥" + data[i][pro[3]];
					odiv.appendChild(span);
					var button = document.createElement("button");
					button.innerHTML = "立即购买";
					odiv.appendChild(button);
					
					oli.appendChild(odiv);
					var list = document.querySelector(".list")
					list.appendChild(oli);
				}
			}
		}
	}
}
for (var k=4; k < 6;k++) {
	Getdata(k);
}
var head = document.querySelectorAll(".head a");
var good = document.querySelector(".user_good");
var user1 = document.querySelector(".user_evu");
var user2 = document.querySelector(".user_shop");
var user3 = document.querySelector(".user_service");
head[0].onclick = function(){
	good.style.display = "block";
	user1.style.display = "block";
	user2.style.display = "block";
	user3.style.display = "block";
}
head[1].onclick = function(){
	good.style.display = "none";
	user1.style.display = "block";
	user2.style.display = "block";
	user3.style.display = "block";
}
head[2].onclick = function(){
	good.style.display = "none";
	user1.style.display = "none";
	user2.style.display = "block";
	user3.style.display = "block";
}
head[3].onclick = function(){
	good.style.display = "none";
	user1.style.display = "none";
	user2.style.display = "none";
	user3.style.display = "block";
}
var inputs = document.querySelector(".txt");
var uls = document.querySelector(".uls");

window.suggest=function(data){
	var datas = data["result"]
	uls.style.display = "block";
	for (var x = 0;x < datas.length;x++) {
		var li = document.createElement("li");
		li.innerHTML = datas[x]['word'];	
		uls.appendChild(li);
	}
	
}
inputs.oninput = function(){
	var dom = document.createElement("script");
	dom.setAttribute("src","http://suggest.bang.360.cn/suggest?word="+inputs.value+"&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852");
			
	document.body.appendChild(dom);
}
inputs.onblur = function(){
	uls.style.display = "none";
}


}mm();