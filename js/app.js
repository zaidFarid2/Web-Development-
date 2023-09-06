// chapter 17 to 20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var array = ["zaid",["areeb", "faiz", "shahmeer", "ibad ", "wasay",["hanzala","khuzaima"]]]





// 2. Declare and initialize a multidimensional array
// representing the following matrix:






// // 3. Write a program to print numeric counting from 1 to 10.
// for ( var i = 1; i<11; i++ ){
//     document.write(i+"<br>")
// }







// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

// var table = prompt("enter a digit of table you want")
// var lenght = prompt("Enter lenght of table ")
// for (var i = 1; i<=lenght; i++){
//     document.write(+ table +"x" +i +"=" +table*i +"<br>" )
// }





// 5. Write a program to print items of the following array
// // using for loop:

// var fruits = ["apple", "banana", "mango", "orange",
// "strawberry"]
// for (var i = 0; i <=fruits.length-1; i++){
//      document.write(fruits[i]+"<br>")

//  }
//  document.write("<h1>explanation <br></h1>")
//  for (var i = 0; i <=fruits.length-1; i++){
//      document.write("elemenet at " +i +"is <br>" +fruits[i]+"<br>")

// }



// 6. Generate the following series in your browser. See 
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// for (var i = 0; i <=15; i++){
    //         document.write(i+"<br>")
    //     }
    
    
    
    
    
    // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    
    //     for (var i = 10; i >=1; i--){
        //      document.write(i +"<br>")
        // }
        
        
        
        
        // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
        
        
        // for (var i = 0; i<=20; i+1){
            //    document.write(i + "<br>")    
            // }
            
        
        
        
        
        
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for (var i = 0; i <=19; i+2){
//     document.write(i +"<br>")
// }



// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// for (var j = 0; j<=20; j+1){
//     document.write(j+"k<br>")
// }







// 7. You have an array
// A = [“cake", “apple pie”, “cookie”, “chips”, “patties”]

// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("what do you want");
// var flag = "nahi";

// for (var i = 0; i < array.length; i++) {
//     if (user == array[i]) {
//         flag = "milgya";
//         break; 
//     }
// }

// if (flag == "milgya") { 
//     document.write("Here is your " +user);
// } else {
//     document.write("Sorry we have no " +user);
// }

// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].



// var A = [24, 53, 78, 91, 12];
// var largestNumber = A[0]; // Assume the first element is the largest initially

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }

// document.write("The largest number in the array is: " + largestNumber);






// 9. Write a program to identify the smallest number in the 
// given array.

// Define the array
// const array = [24, 53, 78, 91, 12];


// let smallest = array[0];


// for (let i = 1; i < array.length; i++) {
  
//     if (array[i] < smallest) {
//         smallest = array[i];
//     }
// }

// document.write("The smallest number in the array is: " + smallest);





// 10. Write a program to print multiples of 5 ranging 1 to 
// 100

for ( var i = 1; i <=100; i*5){
    document.write("multiple of 5 " +i)
}






