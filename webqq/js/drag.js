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