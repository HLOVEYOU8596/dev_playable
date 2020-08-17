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

let targetStr = ",window.mraid&&window.mraid.open(),";
//ck4
// let iosUrl = 'https://apps.apple.com/app/id1471955633';
// let androidUrl = 'https://play.google.com/store/apps/details?id=com.dragonplus.cookingfrenzy';
//ck5
let iosUrl = 'https://apps.apple.com/us/app/id1491313722';
let androidUrl = 'https://play.google.com/store/apps/details?id=com.digitalkingdom.cookinghome';

let replaceStr = `;let userAgent = navigator.userAgent||navigator.vendor;let url = '${iosUrl}';let android = '${androidUrl}';if(/android/i.test(userAgent)){url = android;}window.mraid&&window.mraid.open(url);`;	  
var options = minimist(process.argv.slice(2), knownOptions);
console.log(options)
function getArr(){
	return new Promise((resolve, reject) => {
		let f = fs.readFile("./manifest.json", "utf-8", (err, data)=>{
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
	switch(type){
		case "liftoff":
			arr = [...data,"js/liftoff.min.js"];
			break;
		case "mraid":
			arr = [...data,"js/mraid.min.js"];
			break;
		case "ironsource":
			arr = [...data,"js/nucleo.min.js"];
			break;
		default:
			arr = ["mock.js",...data];
			break;
	}
	console.log("待合并js文件",...arr);
	return gulp.src(arr) //选择合并的JS
		.pipe(concat('index.min.js'))
		.pipe(uglify())//合并js
		.pipe(gulp.dest('./')) //输出
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
	return '<script>' + file.contents.toString('utf8').replace(targetStr,replaceStr) + '</script>'
			}
			// 将文件内容作为字符串返回
			return file.contents.toString('utf8')
		}
	})).pipe(htmlmin({
		removeComments: false,	//清除HTML注释
 		collapseWhitespace: true,	//压缩HTML
 		minifyJS: true,	//压缩页面JS
 		minifyCSS: true	//压缩页面CSS
	})).pipe(gulp.dest('./'));
})

