// chapter 35 to 38



// 1. Write a function that displays current date & time in your 
// browser.

// function abc(){
//    var a = new Date()
//    return a
// }

// document.write(abc())



// 2. Write a function that takes first & last name and then it 
// greets the user using his full name


// function greeting(){
//     var a  = prompt("enter yor first name ")
//     var b  = prompt("enter yor Last name ")
//    return document.write("Hello "+a +b)
// }

// greeting()





// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.


// function sum(){
//     var a = +prompt("enter a digit ")
//     var b = +prompt("enter a digit ")
//     var sum  = a+b
//     return document.write("the sum of " + a+ " and   " + b  + " is " +sum)
// }
// sum()





// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.





// function calculator(){
//     var input1 = +prompt("Enter a digit ")
//     var input2 = +prompt("Enter a digit ")
//     var opr = prompt("Enter operator Like '+'  '-'  '/'  '*' '%'  ")
//     if (opr == '+'){
//        var result = input1+ input2
//     }else if(opr == '-'){
//         var result = input1- input2
//     }else if(opr == '*'){
//         var result = input1* input2
//     }else if(opr == '/'){
//         var result = input1/ input2
//     }else if(opr == '%'){
//         var result = input1 % input2
//     }else {
//         document.write("Please enterr a valid value")
//     } 
//    return document.write(result)

// }


// calculator()








// 5. Write a function that squares its argument.

// function abc(a){
//     var a = +prompt("enter a digit for sqaure ")
//     var square  = a*a
//     return document.write(square) 
// }

// abc()






// 6. Write a function that computes factorial of a number.

// function factorial(){
//      var digit = +prompt("enter a digit for factorial")
//      fact = 1
//     for (var i = 1; i<=digit; i++ ){
//         var fact = fact*i
//     }  
//    document.write("the factorial of "+ digit  +" is " +fact)   
    
// }

// factorial()





// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.



// function counting(){
//     var start =  +prompt("enter a number wher you want to start a counting")
//     var end = +prompt("Enter a digit where you want to end counting ")
//     for (var i = start; i<=end; i++){
//         document.write(i +"<br>")
//     }
// }
// counting()







// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
 
// function calculateHypotenuse(a,b){
//  function square(x){
//     return x*x
//  }
//     var side1 = square(a)
//     var side2 = square(b)
    
//     var squarHyp = side1+side2
//     var rootHypotenuse = Math.sqrt(squarHyp)
//     return rootHypotenuse
// } 


// var base = +prompt("Enter value of Base ")
// var perpendicular = +prompt("Enter value of perpendicular ")
// var result = calculateHypotenuse(base,perpendicular)
// document.write("The hypotenuse is " +result)  






// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(a){
//     var width = +prompt("Enter a width of rectangle")
//     var height = +prompt("Enter a height of rectangle")
//     result = height*width
//     return document.write("Area of triangle is "+result)



// }

// area()






// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.



function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/ /g, '').toLowerCase();
    
    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = str.length - 1;

    // Continue comparing characters from the start and end until they meet
    while (start < end) {
        if (str[start] !== str[end]) {
            return false; // If characters don't match, it's not a palindrome
        }
        start++;
        end--;
    }

    return true; // If the loop completes, it's a palindrome
}

// Example usage:
var inputString = "madam";
var result = isPalindrome(inputString);

if (result) {
    console.log(inputString + " is a palindrome.");
} else {
    console.log(inputString + " is not a palindrome.");
}


