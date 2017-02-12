console.log('Loaded!');


var element=document.getElementById("main-text");
element.innerHTML="THE only SHARATH";

var image=document.getElementById("img");
var marginLeft=0;                                 //the margin amount to the left of the image
function moveRight(){
   
    marginLeft=marginLeft+5;                   //incremented by 10 pixels     
    image.style.marginLeft=marginLeft+'px';     //appending the px string to 10  ====>  '5px'
    
}
image.onclick=function(){
    var interval=setInterval(moveRight,50);    //1 st argument tells directon and 2nd tells the time interval =====> 50 ms
}