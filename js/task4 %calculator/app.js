
let Name = prompt("Enter your Name")
let Eng  = +prompt("  English Marks out of 100 ")
let Isl  = +prompt("  Islamiat Marks out of 100 ")
let Bio  = +prompt("  Biology Marks out of 100 ")
let Mth  = +prompt("  Mathematics Marks out of 100 ")
let Cs  = +prompt("  Communication skills Marks out of 100 ")

let total  = Eng+ Isl+Bio +Mth +Cs
let percentage = (total/500)*100
if (percentage>80 && percentage<101) {
    document.write("Congrats For Grade A+")
}
else if (percentage>70 && percentage<=80) {
    document.write("Congrats For Grade A")
}
else if (percentage>60 && percentage<=70) {
    document.write("Congrats For Grade B")
}
else if (percentage>50 && percentage<=60) {
    document.write("Congrats For Grade C")
}
else if (percentage>40 && percentage<=50) {
    document.write("Congrats For Grade D")
}

else if (percentage>30 && percentage<=40) {
    document.write("Keep Working For Grade E")
}
else{
    document.write("Please enter a valid marks")
}