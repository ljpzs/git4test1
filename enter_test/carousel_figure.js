// JavaScript Document
var carousel=document.getElementById("carousel");
var left=document.getElementById("left");
var right=document.getElementById("right");
var lis=document.getElementById("littlerull").getElementsByTagName("li");
var arr=["images/img1.jpg","images/img2.jpg","images/img3.jpg"];
var idx=0;
// 
var timer=setInterval(slide,2000);
function slide(){
	idx++;
	if(idx===arr.length){
		idx=0;
	}
	change();
	
}
/**


*/
function change(){
	carousel.src=arr[idx];
	
	for(var i=0;i<lis.length;i++){
		lis[i].classList.remove("on");
		}
	   lis[idx].classList.add("on");
	}
	
    banner.onmouseover=function(){
		clearInterval(timer)
	}
	banner.onmouseout=function(){
		
		timer=setInterval(slide,2000);
		}
	left.onclick=function(){
		idx--;
		if(idx<0){
			idx=arr.length-1;
			}
			change();
		}
	right.onclick=function(){
		slide();
			
			}
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				idx=this.index;
				change();
				}
		}