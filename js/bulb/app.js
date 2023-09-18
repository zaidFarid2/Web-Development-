var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = "yes"
btn.addEventListener("click",function(){
    if (flag ==  "yes"){
        bulb.style.backgroundColor  = "yellow"
     flag = "no"
     btn.innerText  = "OFF"
     
    }else{
        bulb.style.backgroundColor = "transparent"
        btn.innerText  = "ON"
        flag  = "yes"
    }
    
    
    


} )