// // // // chapter 12 to 13

// // // // 1. Write a program that takes a character (number or string)
// // // // in a variable & checks whether the given input is a
// // // // number, uppercase letter or lower case letter. (Hint: ASCII
// // // // codes:- A=65, Z=90, a=97, z=122)

// // // var input = +prompt("Enter digit")
// // // if (input>= "65" && input<="90" ){
// // //     document.write("upper case letter ")
// // // }
// // // else if (  input> "90" && input< "97"   ){
// // //     document.write("special case letter ")
// // // }
// // // else if (  input < "65"   ){
// // //     document.write("special case letter ")
// // // }
// // // else if ( input>="97" && input< "123" ){
// // //     document.write("lower case letter ")
// // // }

// // // 2. Write a JavaScript program that accept two integers and
// // // display the larger. Also show if the two integers are equal

// // // var user1 = +prompt("enter digits  ")
// // // var user2 = +prompt("enter digits  ")

// // // if (user1 == user2){
// // //     document.write("number are equals ")
// // // }
// // // else  if(user1 < user2){
// // //     document.write("this number is greater " +user2)
// // // }
// // // else  if(user1 > user2){
// // //     document.write("this number is greater " +user1)
// // // } else{
// // //     document.write("please enter a digit ")
// // //     }

// // // 3. Write a program that takes input a number from user &
// // // state whether the number is positive, negative or zero.


// // var user1 = +prompt("enter digits  ");
// // if (user1 == "0") {
// //   document.write("given number is zero");
// // } else if (user1 < "0") {
// //   document.write("given number is negetive");
// // } else if (user1 > "0") {
// //   document.write("given number is positive ");
// // }





// // 4. Write a program that takes a character (i.e. string of 
// //     length 1) and returns true if it is a vowel, false otherwise


// var char = prompt("enter any Alphabet")
// if (char == 'a' || char == 'e' || char == 'i'|| char == 'o'  || char == 'u')
// {
//     document.write("this is a vowel" + char)
// }else{
//     document.write("Not a vowel")
// }





// // 5. Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then 
// // give message “ Please enter your password”
// // ii. Check if both passwords are same. If they are 
// // same, show message “Correct! The password you 
// // entered matches the original password”. Show 
// // // “Incorrect password” otherwise



// // var email = prompt("enter your email correctly")
// // var  password = prompt("enter your password correctly")

// // if(email == "zaidfarid"  || password ==  "12345"){
// //     document.write("correct! your email andd password are same ")
// // }else {
// //     document.write("please enter yoir password and email")
// // }









// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";}
// // else{
// // greeting = "Good evening";
// // }








// // 7. Write a program that takes time as input from user in 24 
// // hours clock format like: 1900 = 7pm. Implement the 
// // following case using if, else & else if statements
// var clock = +prompt("enter a digit between 13 to 24  ")
// if (clock == "13"){
//     alert("time is 1:00 ")
// }
// else if (clock == "14"){
//     alert("time is 2:00 ")
// }
// else if (clock == "15"){
//     alert("time is 3:00 ")
// }
// else if (clock == "16"){
//     alert("time is 4:00 ")
// }           
// else if (clock == "17"){
//     alert("time is 5:00 ")
// }
// else if (clock == "18"){
//     alert("time is 6:00 ")
// }
// else if (clock == "19"){
//     alert("time is 7:00 ")
// }
// else if (clock == "20"){
//     alert("time is 8:00 ")
// }
// else if (clock == "21"){
//     alert("time is 9:00 ")
// }
// else if (clock == "22"){
//     alert("time is 10:00 ")
// }
// else if (clock == "23"){
//     alert("time is 11:00 ")
// }
// else if (clock == "24"){
//     alert("time is 12:00 ")
// }else{
//     alert("please enter a valid digit")
// }