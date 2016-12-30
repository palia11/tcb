var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-ruby-sass'),  //css
	uglify = require('gulp-uglify'),  //js压缩
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	rename = require('gulp-rename');
//注册任务
gulp.task('webserver',function(){
	gulp.src('dist').pipe(webserver({
		livereload:true,
		open:true
	}));
});
//html处理
gulp.task('html',function(){
	gulp.src('mytcb/**/*.html')
	.pipe(gulp.dest('dist'));
});

//样式预处理
gulp.task('sass',function(){
	return sass('mytcb/css/*.scss',{style:'compact'})
			.on('error',function(err){
				console.log("编译sass时出错",err.message);
			})
			.pipe(gulp.dest('dist/css'));
})
//图片处理
gulp.task('images',function(){
	return gulp.src('mytcb/images/**/*.{png,jpg,gif,svg}')
	.pipe(imagemin({
		progressive:true,
		svgoPlugins:[{removeVieBox:false}],
		use:[pngquant()]
	}))
	.pipe(gulp.dest('dist/images'));
});


//监听
gulp.task('watch',function(){
	gulp.watch('*.html',['html'])
});

//js文件处理
gulp.task('script',function(){
	return gulp.src('mytcb/**/*.js')
			.pipe(rename({suffix:'min'}))
			.pipe(uglify({preserveComments:'some'}))
			.pipe(gulp.dest('dist/'));
})
//默认
gulp.task('default',['sass','html','images','script','webserver','watch']);


















// var gulp = require('gulp'),
// 	webserver = require('gulp-webserver'),
// 	livereload = require('gulp-livereload'),	
// 	uglify = require('gulp-uglify'),  //js压缩
// 	imagemin = require('gulp-imagemin'),
// 	css = require('gulp-minify-css'),//css处理
// 	pngquant = require('imagemin-pngquant');

// //注册任务
// gulp.task('webserver',function(){
// 	gulp.src('dist').pipe(webserver({
// 		livereload:true,
// 		open:true
// 	}));
// });
// //html处理
// gulp.task('html',function(){
// 	gulp.src('mytcb/**/*.html')
// 	.pipe(gulp.dest('dist'));
// });
// //css处理
// gulp.task('css',function(){
// 	return gulp.src('mytcb/css/**/*.css')	
// 	.pipe(gulp.dest('dist/css'));
// });
// //js压缩
// gulp.task('script',function(){
// 	return gulp.src('mytcb/public/**/*.js')
// 			.pipe(uglify({preserveComments:'some'}))
// 			.pipe(gulp.dest('dist/public'));
// })

// //图片处理
// gulp.task('images',function(){
// 	return gulp.src('mytcb/images/**/*.{png,jpg,gif,svg}')
// 	.pipe(imagemin({
// 		progressive:true,
// 		svgoPlugins:[{removeVieBox:false}],
// 		use:[pngquant()]
// 	}))
// 	.pipe(gulp.dest('dist/images'));
// });


// //监听
// gulp.task('watch',function(){
// 	gulp.watch('*.html')
// });
// //默认
// gulp.task('default',['html','images','css','script','webserver','watch']);
