// chapter 21 to 25


// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.


// var firstName =  prompt("enter your fist name")
// var lastName =  prompt("enter your last name")
// var fullName = firstName+ " " +lastName
// document.write(fullName)



// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var userInput = prompt("Enter you Mobile Model")
// document.write("tour mobile model is " +userInput +"<br>lenght of string is " +userInput.length)





// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// var nationality = "truly paskistani "
//  document.write("word is " +nationality+"<br>")
// document.write("index of 's' " +nationality.indexOf("n"))





// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.


// var word =  "hello world"
// document.write("word is " +word +"<br>")
// document.write("last index of 'l' is" + word.lastIndexOf("l"))



// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var nationality = "pakistani"
// document.write("word is " +nationality)
// var index  = nationality.indexOf("i")
// document.write("3rd index  is  " +index )



// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first Name")
// var lastName = prompt("Enter your last Name")
// var fullName = firstName+" ".concat(lastName)
// document.write(fullName)




// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad"
// var replace =  "Islam"
// var bad = city.slice(-4)
// var city = replace+ bad
//  document.write(city+"<br>")






// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;


// var message = "ali and Sami  are best friends "
// for  (var i =0; i <message.length; i++){
//     var index = message.indexOf("and") 
//     if (index !== -1){
//         var replace= "&"
//         var first = message.slice(0,4)
//         var second = message.slice(7)
//         var final = first + replace + second
//         console.log(final)

//         break }
// }













// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var str  = "485"
// document.write(str +"<br>")
// document.write( "string <br>")
// var num = +str
// document.write(num +"<br>")
// document.write( "number <br>")



// 10. Write a program that takes user input. Convert and 
// show the input in capital letters


// var user = prompt("Enter any word ")
// var first = user.toUpperCase()
// document.write(first)





// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// var user =  prompt("enter any word ")
// document.write("user input is " +user+ "<br>")
// var first = user[0].toLocaleUpperCase()
// var second = user.slice(1,user.length)
// var user = first +second
// document.write("the latest word is " +user)







// 12. Write a program that converts the variable num to 
// string.



// var num = 55
// var str1 = String(num)
// var str2 = num.toString()
// console.log(str2)









// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var user = prompt("Enter any username ")

// var flag  = "han"

// for (i = 0; i <=user.length; i++){

//     if (user[i] === '!'|| user[i] === '@'|| user[i] === ','|| user[i] === '.'){
//         flag= "nahi"
//     }
// }
// if (flag == "han"){
//     document.write("Thank you")
// }else {
//     document.write("please Enter a username without special character")
// }





// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// var array  = ["cake", "apple pie", "cookie", "chips", "patties"]
// // document.write(array)

// var input = prompt("Search by user input")







// Define the array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];


// var userInput = prompt("Enter an item to search:");


// var found = false;


// for (var i = 0; i < A.length; i++) {

//     var lowerItem = A[i].toLowerCase();
//     var lowerInput = userInput.toLowerCase();
    
//     if (lowerItem === lowerInput) {
//         found = true;
//         break; 
//     }
// }


// if (found) {
//     alert("Yes, '" + userInput + "' is available in the list.");
// } else {
//     alert("No, '" + userInput + "' is not available in the list.");
// }








// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// var user = prompt ("Enter your Password")
// var flag = " not found"
// for (var   i = 0; i < user.length; i++ ){
    //     if (user [i]>= 33 && user [i]<= 64   ){
        //         flag = "found"
        //      break}
// }
// if (flag == "not found "){
    //     document.write("Please enter a valid Password")
// }else if (flag == "found "){
    //   document.write("password is correct ")
    // }
    
    
    
    
    // b. It should not start with a number
    
    // var password = prompt("Enter your Password")
    // if ( /^\d/.test(password)){
        //   alert("password is not start with number ")
        // }else {
            //     alert("password is correct")
            // }
            
            
            
// c. It must at least 6 characters long

// var password = prompt("Enter your Password")
// if (password.length>"6"){
//     document.write("password length should be 6 max")
// }else{
//     document.write("your password is correct")
// }
            





// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university = "University of Karachi";
// console.log(university.split(" "))
// for (var i = 0; i<university.length; i++){
//     document.write(university[i]+"<br>")
// }





// 17. Write a program to display the last character of a user 
// input.

// var city = prompt("input any name ")
// var final = city.charAt(city.length-1)
// document.write("last charact<br>" + final)



// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// var str = "the quick brown fox jumps over the lazy dog"
// count = 0
// var str1 = str.split(" ")

// for (var i= 0; i<str1.length; i++ ){
//    if (str1[i] === "the"){
//       count++
//     }
// }
// document.write("number of the is  "+count)