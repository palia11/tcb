require.config({
	
	paths:{
		
		"detail":"../js/detail"
		/*由require开始找到需引用的文件的位置*/
		
	},
	shim:{
		"detail":{
			exports:'mm'
		}
	}
});

define(["detail"],function(mm){
	
	mm();
	
})