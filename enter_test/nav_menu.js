// JavaScript Document
var left = 0;
var iSpeed = 0;
function move(obj,iTarget){
 clearInterval(obj.timer);
 obj.timer = setInterval(function(){
 iSpeed+=(iTarget-left)/5;
 iSpeed*=0.50;
 left+=iSpeed;
 obj.style.left = left+'px';
 if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
  clearInterval(obj.timer);
 }
 },35);
}
window.onload = function(){
 var aLi = document.getElementById('menuline').getElementsByTagName('li');
 var oBlock = document.getElementById('block_box');
 var iNow = 0;
 for(var j=0;j<aLi.length-1;j++){
 (function(index1){
  aLi[j].onmouseover = function(){
  //oBlock.style.left = index*aLi[0].offsetWidth+'px';
  move(oBlock,index1*aLi[0].offsetWidth);
  };
  aLi[j].onmouseout = function(){
  //oBlock.style.left = 0;
  move(oBlock,iNow*aLi[0].offsetWidth);
  };
  aLi[j].onclick = function(){
  iNow=index1;
  };
 })(j);
 }
};
