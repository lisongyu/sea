

define(function(require,exports,module){//sea下的参数不允许修改
    //exports  对外提供接口的对象
    require('./module1.js')
    console.log(module.id);//模块的位置
    console.log('依赖的数组'+module.dependencies);
   console.log(module.exports==exports);
    var a=100;
    //exports.a=a;
    //exports={
    //    a:a
    //};
    //module.exports={
    //    a:a
    //};


});

