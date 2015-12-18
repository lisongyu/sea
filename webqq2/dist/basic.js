//A开发
define(function(require,exports,module){

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





})
//B开发

define(function(require,exports,module){
    function drag(obj){
        var disX=0;
        var disY=0;
        obj.onmousedown=function(ev){
            var ev=ev||window.event;
            disX=ev.clientX-obj.offsetLeft;
            disY=ev.clientY-obj.offsetTop;
            document.onmousemove=function(ev){
                var ev=ev||window.event;
                var L=ev.clientX-disX;
                var T=ev.clientY-disY;
                var maxL=document.documentElement.clientWidth-obj.offsetWidth;
                var maxT=document.documentElement.clientHeight-obj.offsetHeight;
               L=require('range').range(L,maxL,0);
                T=require('range').range(T,maxT,0);

                obj.style.left=L+'px';
                obj.style.top=T+'px';

            }
            document.onmouseup=function(ev){
                document.onmousedown=null;
                document.onmousemove=null;


            }
            return false;



        }
    }
    exports.drag=drag;


})


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

//B开发

define(function(require,exports,module){
    function scale(obj1,obj2){
        var downX=0;
        var downY=0;
        var downW=0;
        var downH=0;
        obj2.onmousedown=function(ev){
            var ev=ev||window.event;
            downX=ev.clientX;
            downY=ev.clientY;
            downW=obj1.offsetWidth;
            downH=obj1.offsetHeight;
           document.onmousemove=function(ev){
                var ev=ev||window.event;
                obj1.style.width=ev.clientX-downX+downW+'px';
                obj1.style.height=ev.clientY-downY+downH+'px';
            }
            obj2.onmouseup=function(){
                document.onmousedown=null;
                document.onmousemove=null;

            }
            return false;
        }

    }
    exports.scale=scale;


})