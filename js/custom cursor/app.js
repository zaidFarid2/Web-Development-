var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(delta){
    crsr.style.left = delta.x+"px"
    crsr.style.top = delta.y+"px"
})