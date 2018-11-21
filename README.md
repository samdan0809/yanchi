# yanchi

自己写的一个简单延迟加载回调，依赖于jQuery;其实功能lazyload类似。

lazyload是用于图片，但是这个可以用于INPUT ,DIV其他元素

用法：

     //代码运行在文档完全加载的情况下        $(function () {            //定义对象
            var y = new YanChi();
            //绑定对象
            y.init(".callback", 100);
            //回调函数
            //current当前对象
            //objects所有对象
            y.callback(function (current, objects) {
                //滚动到哪个对象就返回哪一个对象
                //模拟工作过程
                $.get("http://code.jquery.com/jquery-1.12.4.min.js", function () {
                    current.html("已经加载");
                });
            });
            y.load();


            var YC2 = new YanChi();         
            YC2.init(".waitInput", 100);
            YC2.callback(function (current, objects) {
                current.val("loaded");            });
            YC2.load();
        });