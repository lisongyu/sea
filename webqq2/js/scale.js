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