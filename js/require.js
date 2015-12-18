

define(function(require,exports,module){//sea下的参数不允许修改
    //require 模块之间依赖的接口
    var a=require('module3').a;  //当引入的是sea下面的模块的时候,那么require执行完的结果就是exports
    //exports  对外提供接口的对象
    function show(){
        alert(a)

    }
    exports.show=show;
})
