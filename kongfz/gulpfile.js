//编写任务
const gulp = require("gulp");
//下载html压缩插件并引入、gulp-htmlmin
const htmlmin = require("gulp-htmlmin")
//处理html
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(
        htmlmin({
            removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true,//压缩html
        })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
})
//处理图片
gulp.task("images",function(){
    return gulp.src("*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload())
})
//处理数据
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload())
})
//处理js
// const uglify = require("gulp-uglify");
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())
})
//全运行一遍，可以先创建一遍文件
gulp.task("build",["copy-html","images","data","scripts"],function(){
    console.log("项目建立成功")
})
//处理scss文件，下载插件gulp-sass、、gulp-minify-css、、gulp-rename
const scss = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
//一个文件一个任务（index.scss）,创建个stylesheet文件夹,把新创建的任务塞到里面
gulp.task("index-scss",function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))//压缩塞到dist下面的css文件夹
    .pipe(minifycss())
    .pipe(rename("index.min.css"))//压缩更小的css样式，给它重命名塞到里面
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

//启动监听
  /*
    第一个参数  监听的文件路径
    第二个参数  监听到文件发生变化以后执行的任务  必须是数组
  */
gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("*.{jpg,png}",["images"]);
    gulp.watch(["*.json", "!package.json"],["data"]);
    gulp.watch(["*.js", "!gulpfile.js"],["scripts"]);
    gulp.watch("stylesheet/index.scss",["index-scss"]);
})
//安装启动服务器、gulp-connect
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true,
    })
})
//在上面所有任务后面加个刷新
//同时启动server和watch两个任务
gulp.task("default",["server","watch"])