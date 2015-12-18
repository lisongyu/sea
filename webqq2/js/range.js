

define(function(require,exports,module){//sea下的参数不允许修改
    //require 模块之间依赖的接口
    function range(val,max,min){
        if(val>max){
            return max;
        }else if(val<min){
            return min;

        }else{
            return val;
        }

    }
    exports.range=range;
})
