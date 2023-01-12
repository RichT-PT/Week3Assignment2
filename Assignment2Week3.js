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
    sum += lettersInNames[i];
    sumArray.push (sum);
}console.log(sumArray);
console.log(sumArray[sumArray.length - 1] / sumArray.length);
//         2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let nakedList = " ";
for(i = 0; i < names.length; i++){
    nakedList += names[i] + " ";
    
}console.log(nakedList);

//     3. How do you access the last element of any array?

//     4. How do you access the first element of any array?

//     5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array


//     6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

//     7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

//     8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
//             ▪ The full name should be the first and the last name separated by a space.

//     9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//     10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

//     11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//     12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//     13. Create a function of your own that solves a problem. 
//             ▪ In comments, write what the function does and why you created it.
