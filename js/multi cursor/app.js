var elem = document.querySelectorAll(".elem")
elem.forEach(function(val){
   
val.addEventListener("mouseenter", function(){
    val.childNodes[3].style.opacity = 1})
val.addEventListener("mouseleave", function(){
    val.childNodes[3].style.opacity = 0})
val.addEventListener("mousemove", function(delta){
    val.childNodes[3].left = delta.x +"px"
    val.childNodes[3].top = delta.y +"px"

})



})































// var elemimg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(delta){
//    elemimg.style.left = delta.x +"px"
//    elemimg.style.top = delta.y +"px"
// })

// elem1.addEventListener("mouseenter",function(delta){
//   elemimg.style.opacity = 1
// })
// elem1.addEventListener("mouseleave",function(delta){
//   elemimg.style.opacity = 0
// })