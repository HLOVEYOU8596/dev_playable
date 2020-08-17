var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minimist = require('minimist'),
	fs = require("fs"),
	inject = require('gulp-inject'),
	htmlmin = require('gulp-htmlmin');

var knownOptions = {
	string: 'type'
};

var options = minimist(process.argv.slice(2), knownOptions);
console.log(options)
function getArr() {
	return new Promise((resolve, reject) => {
		let f = fs.readFile("./manifest.json", "utf-8", (err, data) => {
			let arr = [];
			let j = JSON.parse(data);
			for (const key in j.initial) {
				if (j.initial.hasOwnProperty(key)) {
					const element = j.initial[key];
					arr.push(element);
				}
			}
			for (const key in j.game) {
				if (j.game.hasOwnProperty(key)) {
					const element = j.game[key];
					arr.push(element);
				}
			}
			resolve(arr);
		});

	})
}
gulp.task('default', async function () {
	let data = await getArr();
	let arr = [];
	let type = options.type;
	switch (type) {
		case "liftoff":
			arr = [...data, "js/liftoff.min.js"];
			break;
		case "mraid":
			arr = [...data, "js/mraid.min.js"];
			break;
		case "ironsource":
			arr = [...data, "nucleo.min.js"];
			break;
		default:
			arr = ["mock.js", ...data];
			break;
	}
	console.log("待合并js文件", ...arr);
	return gulp.src(arr) //选择合并的JS
		.pipe(concat('index.min.js'))
		.pipe(uglify())//合并js
		.pipe(gulp.dest('./'));//输出
});
gulp.task('insert', function () {
	var target = gulp.src('./index.html');
	var source = gulp.src(['index.min.js']);
	
	return target.pipe(inject(source, {
		starttag: '<!-- inject:FileContent:{{ext}} -->', // '<!-- -->'这是关键，判断插入位置
		endtag: '<!-- endinject -->',
		relative: true,
		transform: function (filePath, file) {
			if (filePath.slice(-3) === '.js') {
				return '<script>'+str+'</script>'+'<script>' + file.contents.toString('utf8') + '</script>'
			}
			// 将文件内容作为字符串返回
			return file.contents.toString('utf8')
		}
	})).pipe(htmlmin({
		removeComments: false,	//清除HTML注释
 		collapseWhitespace: false,	//压缩HTML
 		minifyJS: true,	//压缩页面JS
 		minifyCSS: true	//压缩页面CSS
	})).pipe(gulp.dest('./'));
});
let str = 'function getScript(e,i){ var n= document .createElement( "script" );n.type= "text/javascript" ,n.async=! 0 ,i&&(n.onload=i),n.src=e, document.head.appendChild(n)} function  parseMessage(e){ var i=e.data,n=i.indexOf(DOLLAR_PREFIX+RECEIVE_MSG_PREFIX); if (- 1 !==n){ var  t=i.slice(n+ 2 ); return getMessageParams(t)} return {}} function  getMessageParams(e){ var i,n=[],t=e.split( "/" ),a=t.length; if (- 1 ===e.indexOf(RECEIVE_MSG_PREFIX)){ if (a>= 2 &&a% 2 === 0 ) for (i= 0 ;a>i ;i+= 2 )n[t[i]]=t.length<i+ 1 ? null : decodeURIComponent (t[i+ 1 ])} else { var o=e.split(RECEIVE_MSG_PREFIX); void   0 !==o[ 1 ]&&(n=JSON&&JSON.parse(o[ 1 ]))} return  n} function getDapi(e){ var  i=parseMessage(e); if (!i||i.name===GET_DAPI_URL_MSG_NAME){ var n=i.data;getScript(n,onDapiReceived)}} function  invokeDapiListeners(){ for ( var  e  in dapiEventsPool)dapiEventsPool.hasOwnProperty(e)&&dapi.addEventListener(e,dapiEventsPool[e])} function onDapiReceived(){dapi= window .dapi, window .removeEventListener( "message" ,getDapi),invokeDapiListeners( )} function init(){ window .dapi.isDemoDapi&&( window .parent.postMessage(DOLLAR_PREFIX+SEND_MSG_PREFIX+JSON.stringify({state: "getDapiUrl" }), "*" ), window .addEventListener( "message" ,getDapi,! 1 ))} var DOLLAR_PREFIX= "$$" ,RECEIVE_MSG_PREFIX= "DAPI_SERVICE:" ,SEND_MSG_PREFIX= "DAPI_AD:" ,GET_DAPI_URL_MSG_NAME= "connection.getDapiUrl" ,dapiEventsPool={},dapi= window .dapi||{isReady: function (){ return ! 1 },addEventListener: function (e,i){dapiEventsPool[e]=i},removeEventListener: function (e){ delete dapiEventsPool[e]},isDemoDapi:! 0 };init();init();';