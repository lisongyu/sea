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