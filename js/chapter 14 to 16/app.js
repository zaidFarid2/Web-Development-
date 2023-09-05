// chapter 14 to 16



// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like
// var name = ["zaid", "farid", "hammad",1234, true ]
// document.write("<h1> qualification</h1>")  
// var education = ["SSC", "HSC","BSC", "BS","BCOM","MS","M.PHIL","PHD"  ]
// document.write("1)"+education[0] +"<br>")
// document.write("2)"+education[1] +"<br>")
// document.write("3)"+education[2] +"<br>")
// document.write("4)"+education[3] +"<br>")
// document.write("5)"+education[4] +"<br>")
// document.write("6)"+education[5] +"<br>")
// document.write("7)"+education[6] +"<br>")
// document.write("8)"+education[7] +"<br>")
// document.write("9)"+education[8] +"<br>")





// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:



// var score = [488,385,395]
// var percentageOfZaid = (488/500)*100  
// var percentageOfWasay = (385/500)*100
// var percentageOfIbad = (395/500)*100
// document.write('score of zaid is ' +score[0] +". " +percentageOfZaid  +"<br>" )
// document.write('score of zaid is ' +score[1] +". " +percentageOfWasay +"<br>"  )
// document.write('score of zaid is ' +score[2] +". " +percentageOfIbad  +"<br>" )







// 9. Initialize an array with color names. Display the array
// elements in your browser.
 



// part a 
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var userinput = prompt("Which color You want to add in the beigning")
// var color = ["orange", "blue "]
// document.write(color.join(" ") + "<br>")
// color.unshift(userinput)
// document.write("<h3>updated array is </h3> <br>" + color.join(" "))


// part b
//  b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.

// var color = ["orange", "blue "]
// document.write(color.join(" ") + "<br>")
// var userinput1 = prompt("Which color you want to add at the end  ")
//  color.push(userinput1)
// document.write("updated array is <br> " +color.join(" "))

// // part c
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// var color = ["orange", "blue "]
// document.write(color.join(" ") + "<br>")

// var userinput2 = prompt("color for add in the beigning")
// var userinput3 = prompt("color for add in the beigning")

// color.unshift(userinput2,userinput3)
// document.write("update array is <br> " +color.join(" ") )



// part d
// d. Delete the first color in the array. Display the updated
// array in your browser.

// var color = ["orange", "blue "]
// document.write(color.join(" ") + "<br>")
// color.shift()
// document.write("updated array is <br>" +color.join(" "))


// e. Delete the last color in the array. Display the updated
// array in your browser.

// var color = ["orange", "blue "]
// document.write(color.join(" ") + "<br>")
// color.pop()
// document.write("updated array is <br>" +color.join(" "))





// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// // browser.


// var add = prompt("Enter a color you want to add like ")
// var position = prompt("Enter a position from which element before/after to add color \n reminder index is start from 0 ")
// var position = prompt("to replace color press 1 and to add 0 ")
// var color = ["orange", "blue", "green"]
// document.write(color.join(" ") + "<br>")
// color.splice( position,add , "balck")
// document.write("updated array is <br>" +color.join(" "))





// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser


// var color = [ "grey","orange","green","blue"]
// document.write(color.join(" ") + "<br>")
// var user = prompt("give index number to delete color")
// var user1 = prompt("give how many colors wants to delete \n from given index")

// color.splice(user,user1)
// document.write("updated array is <br> " +color.join(" "))





// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.



// var scores = [ "45","66","22","48","15","11","24","33","44" ]

// document.write("Scores of students is: <br>" +scores.join(" ")+"<br>")
// scores.sort() +  
// document.write("Ordered scores of students is: <br>" +scores.join(" "))









// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.




// var cities = ["Karachi","Islamabad", "Lahore","Quetta", "Peshawar"]
// document.write("array is : <br> " +cities.join(" ") +"<br>")
// cities.splice(1,2)
// document.write("updated array is : <br>" +cities.join(" ") )



// 12. Write a program to create a single string from the 
// below mentioned array:
// (Use array’s join method)

// var arr = ["This ", " is ", " my ", " cat"];
// document.write(arr+ "<br>")
// document.write("updated array <br>" +arr.join(" ") )







// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)







// var array = ["ball","bat","wicket","stump" , "LBW", "out"]
// document.write(array +"<br>")
// // . (FIFO-First In First Out)
// array.shift("ball")
// document.write("fisrst out <br>" +array +"<br>")
// array.unshift("head")
// document.write("fist in <br>" +array +"<br>" )





// // 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last InFirst Out)

// document.write("<h1> array lifo changes </h1> ")
// var array = ["zaid ","areeb","bilal","faiz","shahmeer"]
// document.write(array.join(" ") +"<br>")

// array.shift()
// document.write("OUT  <br>" +array.join(" ") +"<br>")
// array.push("wasay")
// document.write("IN  <br>" +array.join(" ") +"<br>")

// array.shift()
// document.write("OUT  <br>" +array.join(" ") +"<br>")
// array.push("ibad")
// document.write("IN  <br>" +array.join(" ") +"<br>")


// array.shift()
// document.write("OUT  <br>" +array.join(" ") +"<br>")
// array.push("khuzaima")
// document.write("IN  <br>" +array.join(" ") +"<br>")


// array.shift()
// document.write("OUT  <br>" +array.join(" ") +"<br>")
// array.push("hanzala")
// document.write("IN  <br>" +array.join(" ") +"<br>")

// array.shift()
// document.write("OUT  <br>" +array.join(" ") +"<br>")
// array.push("qarisaab")
// document.write("IN  <br>" +array.join(" ") +"<br>")





