//define("common/navSlide", function(require) {
define( function(require) {
    var $ = require('jquery');
    //配置参数
    $.fn.navSlide = function (options) {
        var defaults = {
            //移动端默认'tap
            event: 'click',
            current: '.active',
            movebg: '.questionTitle--bg',
            changeContent: '.questionList-item',
            time: '200'
        };
        //设置配置参数与默认参数
        var settings = $.extend(defaults, options);
        //移动端将.outerWidth 替换为width
        var pos_activeWid = this.parent().find(settings.current).outerWidth(true);
        var pos_active = this.parent().find(settings.current).position().left;
        //获取类名
        var activeName = settings.current.substring(1);

        $(settings.movebg).width(pos_activeWid);
        $(settings.movebg).css('left', pos_active);
        if (settings.changeContent) {
            $(settings.changeContent).hide().first().show();

        };

        this.on(settings.event, function () {
            $(this).addClass(activeName).siblings().removeClass(activeName);
            if (settings.changeContent) {
                var index = $(this).index();
                $(settings.changeContent).eq(index).show().siblings().hide();
            }
            var _this = $(this);

            enter(_this);
        })
        //this.click(enter);

        function enter(_this) {
            var pos = _this.position().left;
            //移动端将.outerWidth 替换为width
            var posliWidth = _this.outerWidth(true);
            //移动端去掉stop
            $(settings.movebg).stop().animate({
                'left': pos,
                'width': posliWidth
            }, settings.time);
        }
        //               this.parent().mouseleave(function(){
        //                   movebg.stop().animate({'left':pos_active,'width':pos_activeWid},200);
        //               });
        return this;
    };
});