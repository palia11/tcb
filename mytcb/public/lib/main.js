

////	baseUrl:'jss/lib',/*require相对于main的路径*/

//define(["../app/lunbo"],function(a){
//	console.log(1);
//	a();
//});
//console.log(2)
// require.config({
	
// 	paths:{/*设置lunbo相对于require文件的路径*/
// //		'app':'app',
// 		'lunbo':'../app/lunbo'/*由require开始找到需引用的文件的位置*/
// 	},
// 	shim:{
// 		'lunbo':{
// 			exports:'aa'
// 		}
// 	}
// });

//console.log(1)

// define(['lunbo'],function(o){
// 	console.log(o);
// 	aa();
// })
require.config({
	
	paths:{
		
		'shouye':'../js/shouye',/*由require开始找到需引用的文件的位置*/
		'ajaxsy':'../js/ajaxsy'
	},
	shim:{
		'shouye':{
			exports:'aa'

		},
		'ajaxsy':{
			exports:'one'
		}
	}
});

define(['shouye','ajaxsy'],function(o){
//	console.log(o);
	aa();
	one();
})