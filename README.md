# yanchi

自己写的一个简单延迟加载回调，依赖于jQuery;其实功能lazyload类似。

lazyload是用于图片，但是这个可以用于INPUT ,DIV其他元素

用法：

HTML:
<HTML>
<div class="callback" data-sku="211-110" data-pid="29434"></div>
//代码运行在文档完全加载的情况下$(function(){	//定义对象
	var y = new YanChi();
	//初始化对象，设置绑定和感应阈值
	y.init(".callback", 200);
	//回调函数
	//回调参数1：当前
	y.callback(function (current,objects) {    
		console.log(current);	
		console.log(objects);

	y.load();});