// chapter 31 to 34





// 1. Write a program that displays current date and time in 
// your browser.


// var now  = new Date()
// document.write(now)




// 2. Write a program that alerts the current month in words. 
// For example December

// var now  = new Date()
// var str = now.toString()
// var month = str.slice(4,7)
// document.write("current month is " +month)




// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.


// var now  = new Date()
// var str = now.toString()
// var day = str.slice(0,4)
// document.write("current day is " +day)






// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var array = ["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"]
// var now  = new Date()
// var day = now.getDay()
// document.write("it's " +array[day] +" day  " )






// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var now = new Date()
// var date = now.getDate()
// if (date<15){
//     document.write("First fifteen days of month  ")
// }else{
//     document.write("last fifteen days of month  ")

// }




// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object


// var now = new Date()
// console.log("Current :" +now +"<br>")
// var ellapse = 1971
// var final = now-ellapse
// console.log('ellapse is ' +final)





// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.


// var now   = new Date()
// var date  = now.getHours()
// document.write(date +"<br>")
// if(date < "12"){
//     document.write("It's PM" )
// }else{
//     document.write("It's AM" )

// }




// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.



// var now = new Date()
// document.write(now)
// var year =prompt("enter your Date of Birth")
// var final  = now  - year
// console.log(final)
