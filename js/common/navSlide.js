//define("common/navSlide", function(require) {
define( function(require) {
    var $ = require('jquery');
    //���ò���
    $.fn.navSlide = function (options) {
        var defaults = {
            //�ƶ���Ĭ��'tap
            event: 'click',
            current: '.active',
            movebg: '.questionTitle--bg',
            changeContent: '.questionList-item',
            time: '200'
        };
        //�������ò�����Ĭ�ϲ���
        var settings = $.extend(defaults, options);
        //�ƶ��˽�.outerWidth �滻Ϊwidth
        var pos_activeWid = this.parent().find(settings.current).outerWidth(true);
        var pos_active = this.parent().find(settings.current).position().left;
        //��ȡ����
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
            //�ƶ��˽�.outerWidth �滻Ϊwidth
            var posliWidth = _this.outerWidth(true);
            //�ƶ���ȥ��stop
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