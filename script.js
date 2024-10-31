var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor");
var images=document.querySelector("#text");
main.addEventListener("mousemove",function(e){
  gsap.to("#cursor",{
    x:e.clientX,
    y:e.clientY,
    duration:0.99,})
  })
  images.addEventListener("mouseenter",function(){
    cursor.innerHTML="VIEW MORE"
    gsap.to(cursor,{
      scale:2.4,
      opacity:0.7
    })
  })
  images.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
      scale:1,
      opacity:1
    })
  })