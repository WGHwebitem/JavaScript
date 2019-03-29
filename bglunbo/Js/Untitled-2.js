// JavaScript Document
var i=0;
 function food(){
	i++;
	if(i>7){
		i=1;
		}
	 var divname=document.getElementById("imgd");
	 divname.style.background="url(image/"+i+".jpg)";
	 var lid=document.getElementsByName("textt");
	 for(var j=0;j<lid.length;j++){
		 lid[j].style.background="#000";
		  lid[j].style.color="#FFF";		 
		 }
	  lid[i-1].style.background="red";
	  lid[i-1].style.color="#000";
	 }
	var time= window.setInterval("food()",1000);
	function mosover(num){
		window.clearInterval(time);
		var divname=document.getElementById("imgd");
	    divname.style.background="url(image/"+num+".jpg)";
		var lid=document.getElementsByName("textt");
	 for(var j=0;j<lid.length;j++){
		 lid[j].style.background="#000";
		  lid[j].style.color="#FFF";		 
		 }
	  lid[num-1].style.background="red";
	  lid[num-1].style.color="#000";
		}
		
	function mosout(){
		time= window.setInterval("food()",1000);
		}