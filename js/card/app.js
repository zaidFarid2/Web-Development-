var removeFriend = document.querySelector("#remove")



var str = document.querySelector("h4")
var addFriend = document.querySelector("#add")
addFriend.addEventListener("click",function(){
    str.innerHTML = "Friends"
    str.style.color = "green"
})
 removeFriend.addEventListener("click", function(){
    str.innerHTML = "Stranger"
    str.style.color = "red"
 })