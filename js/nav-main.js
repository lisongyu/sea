

define(function(require,exports,module){//sea下的参数不允许修改
    //exports  对外提供接口的对象
    var $ = require('jquery');
    require('common/navSlide');


    var oActive=$('.questionTitle .active');
    var oWhite=$('.questionTitle--bg');
    $('.questionTitle li').navSlide(
        //{
        //    event:'mouseenter',
        //}
    );
});

