var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('../dist'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.get('/data/:s',function(req,res){
  req.header('Content-Type','application/x-www-form-urlencoded');
	console.log(req.params)
	var n=req.params.s
  fs.readFile('data/'+n+'.json',function(err,data){/*读取json文件*/
    if(err){
    	console.log('数据不存在');
    }else{
    	res.send(data);
    }
  }) 

})

	app.listen(3555,function(){
    console.log('成功启动')
   });
	