function one(){
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

 
	 var point = document.querySelector("#map1");
	 var close = document.querySelector("#guanbi");
	 var maps = document.querySelector(".map");
	 var map = "";
   var oul = "";
	function Getdata(k){
		var baseURL = 'http://localhost:3555';
     var xhr = createXHR();
      xhr.open('get',baseURL+"/data/"+(k+1));
      xhr.send(null);
      xhr.onreadystatechange = function(){
      	if(xhr.readyState==4){
      		if(xhr.status==200||xhr.status==304){
              
               var shu = JSON.parse(xhr.responseText);
//               console.log(shu);
               var data1 = shu.shop_data;
               console.log(data1);
               var prop1 = ["shop_name","main","addr_detail","shop_ico"]
//             var pxy = ["map_longitude","map_latitude"]
               var pro = ["count"]
               for(var i = 0;i<data1.length;i++){
               	
               	 oul = document.querySelector(".left_a");
               	var oli = document.createElement("li"); 
               	oli.className = 'fenli';
               		var div = document.createElement("div");
               		var oimg = document.createElement("img");
               		div.className = "firimg";
               		oimg.src = data1[i][prop1[3]]               		
               		// console.log(data1[i][prop1[3]])
               		div.appendChild(oimg);
               		oli.appendChild(div);
               	var div1 = document.createElement("div");
               	div1.className = "scend";
               	for(var j = 0;j<prop1.length-1;j++){
               		var op = document.createElement('p');
               		op.innerHTML = data1[i][prop1[j]];
               		div1.appendChild(op);
               	}
               	oli.appendChild(div1);
               	var div2 = document.createElement("div");
               	div2.className = "firla"
               	var op1 = document.createElement("p");
               	var img = document.createElement("img");
               	img.src = "images/1_22.jpg"
               	op1.appendChild(img);
               	op1.innerHTML = "先行赔付";
               	
               	var op2 = document.createElement("p");
               	var img1 = document.createElement("img");
               		img1.src = "images/1_22.jpg"
               	op2.appendChild(img1);
               		op2.innerHTML = "同城帮认证";
               		var op3 = document.createElement("p");	
               		op3.innerHTML = "人气浏览：" + data1[i][pro[0]];
               	div2.appendChild(op1);
               	div2.appendChild(op2);
               	div2.appendChild(op3);
               	var div3 = document.createElement("div");
               	div3.className = "inshop"
               	var a = document.createElement("a")
               	// a.setAttribute("href","shop.html"?k);
                  a.setAttribute("href","shop.html");
               	a.innerHTML = "进入店铺";
               	a.className = "in_1";
               	div3.appendChild(a);
               	oli.appendChild(div1);
               	oli.appendChild(div2);
               	oli.appendChild(div3);
               	oul.appendChild(oli);
               }
                point.onclick = function(){
	              maps.style.display = "block";
	               map = new AMap.Map('maps', {
						    resizeEnable: true,
						    zoom:11,
						    center: [data1[0]["map_longitude"],data1[0]["map_latitude"]]						    
                });
//               console.log(data1[0]["map_longitude"]);
						      map.plugin(["AMap.ToolBar"], function() {
						      map.addControl(new AMap.ToolBar());
						       });
						       for(var m = 0;m<data1.length;m++){
						       	var divimg = document.createElement("div");
						       	divimg.className = 'divimg';/*创建放标志的div*/						       	
						       	var balloon = document.createElement('img');/*标志*/						       	
						       	balloon.src = "images/t01647448c59c844934.png";
						       	divimg.appendChild(balloon);
						       	   var content = document.createElement("div");/*信息*/
                           content.className = 'mess';
                           var sname = document.createElement('p');/*创建放商家名的p*/
                           sname.innerHTML = data1[m]['shop_name'];
                           sname.className = "sname";
                           var span1 = document.createElement("span");
                           span1.className = "close1";
                           span1.innerHTML = "×";/*关闭*/
                           sname.appendChild(span1);
                           var p1 = document.createElement("p");
                           p1.innerHTML = '主营:' + data1[m]['main'];
                           p1.className = "zhup";
                           var p2 = document.createElement("p");
                           p2.innerHTML = "地址："+data1[m]['addr'];/*地址*/
                           p2.className = "address";
                           var as = document.querySelector("a");
                           as.innerHTML = "进入店铺";       /*链接进入店铺*/
                           as.className = "in";
                           as.setAttribute("href","shop.html");/*加属性*/
                           content.appendChild(sname);/*将p插入div */ 
                           content.appendChild(p1);
                           content.appendChild(p2);
                           content.appendChild(as);
                           divimg.appendChild(content);
                           marker = new AMap.Marker({
                           position:[data1[m]['map_longitude'],data1[m]['map_latitude']],/*坐标*/                           
                           content:divimg,
                           map:map
                        });
						       	    balloon.onclick = function(){  /*点击标志显示信息*/                         
                           this.nextElementSibling.style.display = "block";
                        }
                        span1.onclick = function(){                          
                           this.parentNode.parentNode.style.display = 'none';/*关闭*/
                        }
//						      marker = new AMap.Marker({
//							    position: [data1[m]["map_longitude"],data1[m]["map_latitude"]],					    
//							    map: map
//							    });
							
	              }
                  }
                 close.onclick = function(){
	                maps.style.display = "none";
													} 
      		}
      	}
      }

	}

	Getdata(0);

var that = "";
var feny = document.querySelectorAll(".ye");


for(var y = 0;y<feny.length;y++){
	(function(y){
		feny[y].onclick = function(){
       that = this.index;
		var fenli = document.querySelectorAll('.fenli');
		for(var f = 0;f<fenli.length;f++){
			oul.removeChild(fenli[f]);
		}

		Getdata(y);
	}
	})(y)
	
}


}
one();