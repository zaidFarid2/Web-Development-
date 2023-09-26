var userinput =  prompt ("enter your name")
var sub1 = +prompt ("English")
var sub2 = +prompt ("Urdu")
var sub3 = +prompt ("Islamiat")
var sub4 = +prompt ("Bioligy")
var sub5 = +prompt ("Phisics")
var sub6 = +prompt ("Chemistry")
var  total =  sub1+sub2+sub3+sub4+sub5+sub6
var Percentage = (total/600)*100
if ( Percentage >=80 && Percentage <=100 ){
    document.write("Grade A+")
}
else if(Percentage >=70 && Percentage <80 ){
    document.write("Grade A")
}
else if(Percentage >=60 && Percentage <70 ){
    document.write("Grade B")
}
else if(Percentage >=50 && Percentage <60 ){
    document.write("Grade C")
}
else if(Percentage >=40 && Percentage <50 ){
    document.write("Grade D")
}
else if(Percentage >=30 && Percentage <40 ){
    document.write("BETA  TUM SE NH HOPAEGA")
}
else{
    document.write("Enter valid naumber")
}