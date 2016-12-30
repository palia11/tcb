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
var baseUrl = "http://localhost:3555";
function dataGet(k){
	var xhr = createXHR();
	xhr.open('get',baseUrl+"/data/"+k);
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
	dataGet(k);
}