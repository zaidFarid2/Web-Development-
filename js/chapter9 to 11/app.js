// chapter  9 to 11


// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var userinput = prompt("Enter city Name ")
// if(userinput == "karachi"  ){
//     alert("Welcome to the city of light ")
// }else{
//     alert("Please enter a valid city name ")
// }





// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am

// var userInput = prompt("Enter your Gender")
// if (userInput == "male"){
//     document.write("<h1>Good Morning Sir </h1>")
// } else if(userInput == "female"){
//     document.write(" <h1> Good Morning Ma'am </h1>")
// }else{
//     document.write("Please Enter your Gender Coreectly")
// }






// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:|


// 4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”
    


// var fuel = +prompt("Enter fuel in liter")

// if(fuel < "0.25" ){
//     document.write("<h1>please refill the fuel in your car </h1>")
// }else{
//     document.write("<h1>no need to refiil fuel </h1>")
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


//  var a = 4;          (this condition is true )
// if (++a === 5){
// alert("given condition for variable a is true");
// }


//  var b = 82;       (this condition is false  )
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// (In the above scinerio condition 2 is true)





// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }





//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }





// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
    
// var input1 = +prompt("Enter your subbject1 marks out of 100")
// var input2 = +prompt("Enter your subbject2 marks out of 100")
// var input3 = +prompt("Enter your subbject3 marks out of 100")
// var total = input1+ input2 +input3 
// document.write("Your total marks is  " +total +"<br>")
// var percentage = (total/300)*100
// document.write("Your percentage is " +percentage  +"<br>")
// if(percentage >= "80"){
//     document.write("Grade A+ Excellent performance <br>")
// }
// else if( percentage >= "60" && percentage < "80"){
//     document.write("Grade A Excellent performance<br>")

// }else if (percentage < "60"){
//    document.write("Grade B You need to improve ypurself<br>")
// }else{
    // document.write("plase enter a valid number ")
// }







// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var num = 8 
// var userInput = +prompt("Guess the secret  number from 1 to 10")
// if (userInput == "8"){
//     alert("Bingo! Correct answer ")
// }else if ( userInput == "9"){
//     alert("you are so close ")
// }else{
//     alert("please input a number from 1 to 10")
// }






// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// var user = +prompt("Enter a number ")
// if (user%3 == "0"){
//     alert("Given Number is divisble by \n 3 ")
// }else if(user%3 != "0") {
//     alert("Number is not divisible by 3")
// }else{
//     alert("please enter a number ")
// }



// 9. Write a program that checks whether the given input is an
// even number or an odd number

// var input = +prompt('Enter a number ')
// if (input%2 == "0"){
//     alert("even ")

// }
// else{
//     alert("odd ")
// } 






// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var t = +prompt("Enter temperatur in digit")

// if (t >  "40"){
//     document.write("It is hot outside")
// }

// else if (t >  "30"){
//     document.write("Today 's wehther is normal")
// }

// else if (t >  "20"){
//     document.write("Today 's wehther is cool ")
// }
// else if (t >  "10"){
//     document.write("!OMG Today 's wehthwer is so cool ")
// }
// else {
//     document.write("please enter a valid temperature")
// }






// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

// var user1 = +prompt("enter first digit") 
// var user2 = +prompt("enter second digit") 
// var opr = prompt(" *  /   +    -")
// var add=  user1 +user2 
// var multi=  user1 *user2 
// var div=  user1/user2 
// var mod=  user1%user2 
// var sub=  user1-user2 

// if (opr == '+' ){
//     document.write("the sum of two digit is " +add)
// }
// else if(opr == '-' ){
//     document.write("the sum of two digit is " +sub)
// } 
// else if(opr == '/' ){
//     document.write("the sum of two digit is " +div)
// } 
// else if(opr == '*' ){
//     document.write("the sum of two digit is " +mul)
// } 
// else if(opr == '%' ){
//     document.write("the sum of two digit is " +mod)
// } 




