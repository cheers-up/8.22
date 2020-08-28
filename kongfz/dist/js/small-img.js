
  var oDiv = document.querySelector(".img-small");
  var mark = document.querySelector(".mark");
  var Big=document.querySelector(".img-big");
  var Bigimg=Big.querySelector("img");

  // console.log(oDiv,mark,Bigimg);

  oDiv.onmouseenter=function(){
    mark.style.display = "block";
    Big.style.display = "block";
  }
  oDiv.onmouseleave=function(){
    mark.style.display = "none";
    Big.style.display = "none";
  }
  oDiv.onmousemove=function(ev){
      var e = ev||window.event;
      var l=e.pageX-oDiv.offsetLeft-75;
      var t=e.pageY-oDiv.offsetTop-75;
      // console.log(t,l)
      l = Math.max(0,l);
      l = Math.min(150,l);
      t = Math.max(0,t);
      t = Math.min(150,t);
      mark.style.left= l + "px";
      mark.style.top = t +"px";
      Bigimg.style.left=-2*l +"px";
      Bigimg.style.top=-2*t +"px";

    }
  
