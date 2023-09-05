// chapter 5


// 1. Write a program that take two numbers & add them in a 
// // // new variable. Show the result in your browser
// var input1 = 9
// var input2 = 6
// var sum = input1+input2
// document.write("sum of 9 and 6 is "  +sum)



// 2. Repeat task1 for subtraction, multiplication, division &
// // modulus.
// var subtract = input1-input2
// document.write("subtraction of 9 and 6 is " +subtract + "<br>")
// var multi = input1*input2
// document.write("multiplication  of 9 and 6 is " +multi +"<br>")
// var mod = input1%input2
// document.write("modulous of 9 and 6 is " +mod +"<br>") 






// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.
// var num;
// document.write("value after decleration is " +num +"<br>")
// var num = 8
// document.write("intilize value is " + num +"<br>")
// num++
// document.write("value after increament is " +num  +"<br>")
// num = num + 8
// document.write("value after addition is " +num  +"<br>")
// --num
// document.write("value after decreament is " +num  +"<br>")
// num = num/2
// document.write("value after division  is " +num  +"<br>")




// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie

// var oneMovieTicket = 600
// var fiveMovieTicket = oneMovieTicket*5
// document.write("Coast Of five Movie Ticket is " +fiveMovieTicket )





// 5. Write a script to display multiplication table of any 
// number in your browser

// document.write("<h1>  table of 5 </h1>")
// var num = 5
// var num1 = num * 1
// document.write("5 x 1 = "  + num1  +"<br>")

// var num2 = num * 2
// document.write("5 x 2 = "  +num2  +"<br>")
// var  num3 = num * 3
// document.write("5 x 3 = "  +num3  +"<br>")
// var  num4 = num * 4
// document.write("5 x 4 = "  +num4  +"<br>")
// var  num5 = num * 5
// document.write("5 x 5 = "  +num5  +"<br>")
// var  num6 = num * 6
// document.write("5 x 6 = "  +num6  +"<br>")
// var  num7 = num * 7
// document.write("5 x 7 = "  +num7  +"<br>")
// var  num8 = num * 8
// document.write("5 x 8 = "  +num8  +"<br>")
// var  num9 = num * 9
// document.write("5 x 9 = "  +num9  +"<br>")
// var  num10 = num * 10
// document.write("5 x 10 = "  +num10  +"<br>")






   // 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var c =  45
// var f = (c*9/5)+32
// document.write( "Conversion of temperatur clacius  into fahrenhiet 45 degree is " +f +"  fahrenhiet <br>")


// var Fahrenheit = 65 
// var calcius = (Fahrenheit-32)*9/5
// document.write( "Conversion of temperatur  fahrenhiet  into  65 degree is " +calcius +"  calcius")






// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var item1Prize = 600
// document.write("Prize of item 1 is "  +item1Prize +"<br>")
// var item2Prize = 1200
// document.write("Prize of item 2 is "  +item2Prize +"<br>")
// var QuantityItem1 = 8
// document.write("Quantity of item 1 is "  +QuantityItem1 +"<br>")
// var QuantityItem2 = 2
// document.write("Quantity of item 2 is "  +QuantityItem2 +"<br>")
// var shppingCharges = 250
// document.write("shipping charges of item is "  +shppingCharges +"<br>")
// // var TotalCoast = (item1Prize*QuantityItem1 + item2Prize*QuantityItem2)*shppingCharges

// document.write("Total coast of whole item is  "  +TotalCoast +"<br>")







// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser



// document.write("<h1>marksheet table </h1>")
// var std1 =66  //marks outs of 100
// document.write("marks os one subject is " +std1)
// // var std2 = 91  //marks outs of 100
// document.write("marks os second subject is " +std2)
// // var percentage = (std1 +std2)/200*100
// document.write("percentage of student is  " +percentage)





// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee

// var UsDollar = 10
// var Riyal = 25
// var total = 10*104.80 + 25*28
// document.write("Toatal currency of Pakistan is " +total )



// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// var num = 4
// num = num+5*10/2
// document.write(num)



// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.

// var currentYear = 2023
// var birthYear = 2002
// var age  = currentYear-birthYear
// document.write(age)








// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var radius = 62
// document.write("the radius of circle is " +radius +"<br>")
// var circumference = 2*3.142*radius
// document.write("The circumfernce is " +circumference +"<br>")
// var area = 3.142*radius*radius
// document.write("The area is " +area)





// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”





// document.write("<h1> The Liftime Supply Calculator</h1>")
// var snacks = "lays"
// document.write("favourite Snacks is " +snacks +"<br>")
// var age = 21
// document.write("my agew is   " +age +"<br>")
// var maxAge= 67
// document.write("maximum age  is " +maxAge +"<br>")
// var estimated = 4 
// document.write("estimated amount is 0 " +estimated +"<br>")
// var total = (maxAge-age)*estimated
// document.write("you will  need  "+total + "  choclates for youyr total age ")



