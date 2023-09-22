// Chapter 38-42

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// function customPower(a, b) {
//     let result = 1;
//     if (b >= 0) {
//       for (let i = 0; i < b; i++) {
//         result *= a;
//       }
//     }
//      else {
//       for (let i = 0; i < -b; i++) {
//         result /= a;
//       }
//     }
//     return result;
//   }
// console.log(customPower(4,4))









// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function isLeapYear(year) {
//     // Leap years are divisible by 4, but not divisible by 100 unless they are also divisible by 400.
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       return true; // It's a leap year
//     } else {
//       return false; // It's not a leap year
//     }
//   }
//   let year = +prompt("Enter a year:");

// if (isLeapYear(year)) {
//   console.log(year + " is a leap year.");
// } else {
//   console.log(year + " is not a leap year.");
// }










// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function area(a,b,c){
//     var s = a+b+c/2
//     var areaOfTriangle = s*(s-a)*s*(s-b)*s*(s-c)
//   return areaOfTriangle
// }

// document.write(area(4,2,2))











// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function avg(userinput1, userinput2, userinput3) {
//   return  (userinput2 + userinput1 + userinput3) / 3;
// }
// function percentage(obtainMArks,totalMarks ){
//      return (obtainMArks/totalMarks)*100
// }
// function main(){
//     userinput1 = +prompt("Enter your subject Marks out of 100")
//     userinput2 = +prompt("Enter your subject Marks out of 100")
//     userinput3 = +prompt("Enter your subject Marks out of 100")
//     totalMarks = 300
//     obtainMArks =  userinput1 + userinput2 + userinput3
//     var average  =  avg(userinput1,userinput2,userinput3)
//     var percent = percentage(obtainMArks,totalMarks) 
//     document.write("average is "+average +"<br>"  +"percentage is " +percent)
// }

// main()






// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

// function index(string){
//     for  (var i = 0; i<string.length;i++){
      
//     }if(string[i]>= "65" && string[i]<91 && string[i]> "96" && string[i]<123  ){
//         return [i]
//     }else{
//         return -1
//     } 

// }
// var str = prompt("enter a word ")
// document.write(index(str))


// function customIndexOf(string, char) {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === char) {
//         return i; // Return the index of the first occurrence of 'char'
//       }
//     }
//     return -1; // Return -1 if 'char' is not found in 'string'
//   }
  
//   // Example usage:
//   let text = "Hello, World!";
//   let searchChar = "o";
  
//   let index = customIndexOf(text, searchChar);
//  document.write(index) 
//   if (index !== -1) {
//     console.log(`The index of '${searchChar}' in '${text}' is: ${index}`);
//   } else {
//     console.log(`'${searchChar}' not found in '${text}'`);
//   }