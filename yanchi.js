var YanChi = function (selector, range, attrName) {
    var self = this;
    var $;
    var objs, obj_h, coverClassName = "_yanchi";
    self.attrName = "data-original";
    self.selector = "img";
    self.range = 300;
    
    self.ImgCallBack = function (img, imgs) {
        var originalUrl = "";
        img = $(img);
        if (self.attrName.indexOf("data-") == 0) {
            originalUrl = img.data(self.attrName.split("-")[1]);
        } else {
            originalUrl = img.attr(self.attrName);
        }
        img.attr("src", originalUrl);

    };
    var doEvent = function (obj) {
        self.ImgCallBack.apply(this, [obj, objs]);
    }
    this.callback = function (a) {
        self.ImgCallBack = a;
    }
    this.init = function (selector, range, attrName) {
        self.selector = selector;
        if (range) self.range = range;
        if (attrName) self.attrName = attrName;
        coverClassName += parseInt(Math.random() * 100);
        objs = $(selector), obj_h = objs.height();
        objs.addClass(coverClassName);

    }
    this.load = function () {
        load();
    }
    var clear = function () {
        objs = $("." + coverClassName);
    }
    var load = function () {
        var min = $(window).scrollTop() - 100;
        var max = min + window.screen.availHeight + self.range;
        var i = 0
        if (typeof (objs) != "undefined") {
            for (; i < objs.length; i++) {
                var obj = objs.eq(i), _top = obj.offset().top;
                if (_top > max) {
                    break;
                }
                if (_top >= min && _top <= max) {
                    obj.removeClass(coverClassName)
                    doEvent(obj);
                }
            }
        }
        clear();
    }

    /*start*/
    if (typeof (jQuery) != "undefined") {
        $ = jQuery;
    } else {
        console && console.warn("jQuery was undefined");
    }

    $(window).scroll(function () {
        load();
    });

}