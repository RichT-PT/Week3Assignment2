//     2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//         2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let lettersInNames = [];//made this array to collect the value of the elements of names as their word length
let sum = 0;// this variable will increment with the loop later
for(let i = 0; i < names.length; i++){//iterates the loop
//below, pushes the length of each element, starting at zero(initialized in the loop conditions)as it increments    
lettersInNames.push(names[i].length);//using [] around names[i].length did not push any value to lettersInNames
// tried adding sum += lettersInNames[i]; here and did nothing
//console.log(names.length, names[0].length);

    //    lettersInNames.push(names.length(names[i]));
}console.log(lettersInNames);
let sumArray = [];//made a new array to accept the sum of the elements of lettersInNames
for(let i =0; i < lettersInNames.length; i++){
    sum += lettersInNames[i];//adds the elements together one at a time as it increments
    sumArray.push (sum);//adds the sums to the new array
}console.log(sumArray);//tested to see the new array of sums
console.log(sumArray[sumArray.length - 1] / sumArray.length);// calculates the average
//         2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let nakedList = " ";
for(i = 0; i < names.length; i++){
    nakedList += names[i] + " ";// added the " " to add spacing
    
}//console.log(nakedList);

//     3. How do you access the last element of any array?
//I can access the last element in an array by calling on the length of the array, which
//is always 1 more than the index because the index starts @ 0
console.log(names[names.length - 1]);
//call the array^ name[]for index, "names.length" calls the the total length of the array - 1 brings
//it back to the last  element. the [] indicate you want an index equivalent to the length of the array 
//minus one


//     4. How do you access the first element of any array?
// The first element of an array is always 0. use [] to tell js you want the index add 0. [0]
console.log(names[0]);
//don't forget ^^ to call the name of the array
//     5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
let namesArray = ["Kelly", "Sam", "Kate"];
let nameLengths = [];
let letterCount = 0;
//console.log(namesArray, "initial array value");
 for(let i = 0; i < namesArray.length; i++){
     letterCount = namesArray[i].length;
  //   console.log(letterCount);//logs the letter count for each element as it should
     nameLengths.push(letterCount);

}
//console.log(nameLengths);
//had trouble with this code and used several console.log to figure it out. one note
//in the future, watch adding 's' to the end of object names, there are easy to miss when calling them

//console.log(namesArray);

//     6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOf = [];
let sum2 = 0;
for(let i =0; i < nameLengths.length; i++){
    sum2 += nameLengths[i];
    sumOf.push (sum2);
  //  console.log(sum2);

}//console.log(nameLengths[nameLengths.length - 1]);
//console.log(sumOf);
console.log(sumOf[sumOf.length - 1]/ sumOf.length);
//I am still needing a lot of console.log's for some reason :D I struggled to call the correct array by the end of this 
//assignment. I need to set reminders of the proper array before each section of code for clarification
//     7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
// to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function echo(word, n){
    
}
    





        

//}
//     8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
//             ▪ The full name should be the first and the last name separated by a space.

//     9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//     10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

//     11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//     12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//     13. Create a function of your own that solves a problem. 
//             ▪ In comments, write what the function does and why you created it.
