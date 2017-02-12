//counter
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
  //create a request
   var request=new XMLHttpRequest();
   
   request.onreadystatechange=function(){
   if(request.readystate===XMLhttprequest.DONE){
       if(request.status===200){
           var counter=request.responseText;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
       }
   }
   };
   //make a request
   request.open('GET','http://sharathsrivathsan.imad.hasura-app.io/counter',true);
   request.send(null);
   
    
};