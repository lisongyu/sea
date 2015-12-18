####seaJs

#####好处


  1. 模块的版本管理。通过别名等配置，配合构建工具，可以比较轻松地实现模块的版本管理。
  2. 提高可维护性。模块化可以让每个文件的职责单一，非常有利于代码的维护。Sea.js 还提供了 nocache、debug 等插件，拥有在线调试等功能，能比较明显地提升效率。
  3. 前端性能优化。Sea.js 通过异步加载模块，这对页面性能非常有益。Sea.js 还提供了 combo、flush 等插件，配合服务端，可以很好地对页面性能进行调优。
  4.跨环境共享模块。CMD 模块定义规范与 Node.js 的模块规范非常相近。通过 Sea.js 的 Node.js 版本，可以很方便实现模块的跨服务器和浏览器共享。
模块化开发并不是新鲜事物，但在 Web 领域，前端开发是新生岗位，一直处于比较原始的刀耕火种时代。直到最近两三年，随着 Dojo、YUI3、Node.js 等社区的推广和流行，前端的模块化开发理念才逐步深入人心。

前端的模块化构建可分为两大类。一类是以 Dojo、YUI3、国内的 KISSY 等类库为代表的大教堂模式。在大教堂模式下，所有组件都是颗粒化、模块化的，各组件之间层层分级、环环相扣。另一类是以 jQuery、RequireJS、国内的 Sea.js、OzJS 等类库为基础的集市模式。在集市模式下，所有组件彼此独立、职责单一，各组件通过组合松耦合在一起，协同完成开发。

这两类模块化构建方式各有应用场景。从长远来看，小而美更具备宽容性和竞争力，更能形成有活力的生态圈。

总之，模块化能给前端开发带来很多好处。如果你还没有尝试，不妨从试用 Sea.js 开始。

#####seajs如何解决
1.引入sea.js库
2.如何变成模块？
-define
参数
1. require(引入模块)
2. exports(对外提供接口的对象)
```javascript
define(function(require,exports,module){//sea下的参数不允许修改
    //exports  对外提供接口的对象
    function show(){
        alert(1)

    }
    exports.show=show;
});
```
3. module

3.如何调用模块
-expotrs(use.html)
-seajs.use
两个参数
1. 模块的地址(默认根目录seajs的目录)
2. 回调函数
```javascript
   //两个参数：第一个参数：模块的地址 第二个参数：回调函数
        //sea的默认根目录就是sea.js的文件
        seajs.use('module1.js',function(ex){
            //ex相当于exports
            ex.show();
        });
```
4. 如何依赖模块
sea.html

```javascript
  var a=require('module3.js').a;  //当引入的是sea下面的模块的时候,那么require执行完的结果就是exports
    //exports  对外提供接口的对象
    function show(){
        alert(a)

    }
    exports.show=show;
```

-require

#####sea压缩合并
上线的版本比如合并操作:define要多出两个参数：当前模块的地址,第二个参数:依赖模块的数组
```javascript
define('dist/main.js',['./drag.js','./scale.js'],function(require,exports,module){

    var oInput=document.getElementById('input1');
    var oDiv1=document.getElementById('div1');
    var oDiv2=document.getElementById('div2');
    var div3=document.getElementById('div3');

    //引入拖拽
    require('drag').drag(div3);
    oInput.onclick=function(){
        oDiv1.style.display='block';
        require('scale').scale(oDiv1,oDiv2);

    }
    
});
```

构建工具
gruntjs(http://gruntjs.com)
 Seajs+gruntjs开发
 1. grunt-cmd-transport
 2. grunt-cmd-concat
注意seajs版本问题所导致的问题

深入学习seajs
  配置信息
 - alias:别名配置
 - paths:路径配置
 - vars：变量配置
 - map:映射配置
 - preload:预加载项
 - debug：调试模式
 - base：基础路径
 - charset:文件编码

alias Object

当模块标识很长时，可以使用 alias 来简化。
```javascript
seajs.config({
  alias: {
    'jquery': 'jquery/jquery/1.10.1/jquery',
    'app/biz': 'http://path/to/app/biz.js',
  }
});
define(function(require, exports, module) {

   var $ = require('jquery');
     //=> 加载的是 http://path/to/base/jquery/jquery/1.10.1/jquery.js

   var biz = require('app/biz');
     //=> 加载的是 http://path/to/app/biz.js

});
```
使用 alias，可以让文件的真实路径与调用标识分开，有利于统一维护。


paths Object

当目录比较深，或需要跨目录调用模块时，可以使用 paths 来简化书写。
```javascript
seajs.config({
  paths: {
    'gallery': 'https://a.alipayobjects.com/gallery',
    'app': 'path/to/app',
  }
});
define(function(require, exports, module) {

   var underscore = require('gallery/underscore');
     //=> 加载的是 https://a.alipayobjects.com/gallery/underscore.js

   var biz = require('app/biz');
     //=> 加载的是 path/to/app/biz.js

});
```
paths 配置可以结合 alias 配置一起使用，让模块引用非常方便。

module(module.js)
- id:模块唯一标识  (模块所在位置)
- uri:模块绝对路径
- dependencies:当前依赖模块
- exports：当前模块对外接口
module.exports可以赋值exports 只可添加属性

require.async
- 异步加载模块

####调用多个模块(moremodule.html)

```javascript
   seajs.use(['module1.js','module2.js'],function(ex,ex2){
            //ex相当于exports
            ex.show();
            ex2.show();
        });
```
补充 sea.js引入时最好有id

####参考文章

1.[使用SeaJS实现模块化JavaScript开发](http://blog.codinglabs.org/articles/modularized-javascript-with-seajs.html)
2.[sea.js官网](http://seajs.org/)

  

