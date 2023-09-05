// chapter 6 to 9


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// // browser:
// var a = 9
// document.write("The value of a is " +a +"<br>")

// a++
// document.write("Now the value of a is " +a +"<br>")

// a++
// document.write("Now the value of a is " +a +"<br>")

// a--
// document.write("Now the value of a is " +a +"<br>")

// a--
// document.write("Now the value of a is " +a +"<br>")




// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//             //    1 -   0 +  1  + 1   
// document.write("given result is "  +result)

// --a;    (1)

// --a - --b;    (1  - 0)
// --a - --b + ++b;   ( 1 - 0 + 1 )
// --a - --b + ++b + b--;  (1  - 0 + 1 +1)


// 3. Write a program that takes input a name from user & 
// greet the user

// var name = prompt("Enter your name")
// alert("assalam o alaikum ")



// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.



// var table = +prompt("Enter a number for table")
// if (table == " " ){
//     var empty = 5
//     for (let i = 1; i < 11; i++) {
//         document.write(  + empty +" x " + i +" =" +(i*empty) +"<br>" );
        
//     }
// }
// else{

//     for (let index = 1; index < 11; index++) {
//         document.write(+table +"x" +index +" =" +index*table +"<br>"  ) 
        
//     }

// }



// // 6. Take
// // a) Take three subjects name from user and store them in 3 
// // different variables.
// // b) Total marks for each subject is 100, store it in another 
// // variable.
// // c) Take obtained marks for first subject from user and 
// // stored it in different variable.
// // d) Take obtained marks for remaining 2 subjects from user 
// // and store them in variables.
// // e) Now calculate total marks and percentage and show the 
// // result in browser like this.(Hint: user table)

// var subject1 = prompt("Enter your Subjectname ")
// var subject2 = prompt("Enter your Subjectname ")
// var subject3 = prompt("Enter your Subjectname ")
// var marks1 = +prompt("enter your 1st subjest Marks   out of 100")
// var marks2 = +prompt("enter your 2nd subjest Marks  out of 100")
// var marks3 = +prompt("enter your 3 subjest Marks  out of 100")
// var total  =  marks1+marks2+marks3
// var percentage  = (total/300)*100
// document.write(
// "<table border = '2px' >"+
// "<tr>"+
// "<th>"+ subject1  +"</th>"+
// "<th>"+ subject2   +"</th>"+
// "<th>"+ subject3   +"</th>"+
// +"</tr>"+
// "<tr>"+
// "<td>"+ marks1+"</td>"+
// "<td>"+ marks2+"</td>"+
// "<td>"+ marks3+"</td>"+
// "</tr>"+
// "<tr>"+
//    "<td>" +"Total "+total +"</td>"+
//    "<td>"+"Percentage "+percentage +"</td>"+
// "</tr>"+


// +"</table>"
// )






