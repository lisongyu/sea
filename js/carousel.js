

define('carousel',['jquery','boot'],function(require,exports,module){//sea下的参数不允许修改
    //exports  对外提供接口的对象
    var $ = require('jquery');
    require('lib/bootstrap');


    $('.carousel').carousel({
        interval: 3000
    });
});

