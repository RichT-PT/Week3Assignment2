// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
console.log("question 1a " + (ages[ages.length - 1] - ages[0]));// if you use + to concatonate your string with the value, you must use () to separate 
                                                                //when using math as a return or it gives nan, or you can use "," with no issue
//     ▪ Do not use numbers to reference the last element, find it programmatically, 
//     ▪ ages[7] – ages[0] is not allowed!

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(86);
console.log("question 1b ", (ages[ages.length - 1] - ages[0]))
// 1c. Use a loop to iterate through the array and calculate the average age. 
for(let i = 0; i < ages.length; i++){
    var sum1c = 0;//sum1c was undefined until I changed this to var, making it globaly accessible. IDK if is should do that or if I have something wrong.
    sum1c += ages[i];
}
console.log("question 1c " + (sum1c / ages.length));




//     2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


//         2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let lettersInNames = [];                  //made this array to collect the value of the elements of names as their word length
let sum = 0;                              // this variable will increment with the loop later
for(let i = 0; i < names.length; i++){
        
    lettersInNames.push(names[i].length); //pushes the length of each element, starting at zero(initialized in the loop conditions)as it increments 
}                                        
console.log("question 2a " + lettersInNames);

//         2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let nakedList = " ";
for(i = 0; i < names.length; i++){
    nakedList += names[i] + " ";// added the " " to add spacing
    
}
console.log("question 2b " + nakedList);

//     3. How do you access the last element of any array?
//I can access the last element in an array by calling on the length of the array, which
//is always 1 more than the index because the index starts @ 0, and subtract 1
(names[names.length - 1]);
//call the array^ name[]for index, "names.length" calls the the total length of the array - 1 brings
//it back to the last  element. the [] indicate you want an index equivalent to the length of the array 
//minus one


//     4. How do you access the first element of any array?
// The first element of an array is always 0. use [] to tell js you want the index add 0. [0]
(names[0]);
//don't forget ^^ to call the name of the array
//     5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = [];

//console.log(namesArray, "initial array value");
 for(let i = 0; i < names.length; i++){
    var letCount = 0; 
     letCount = names[i].length;
     nameLengths.push(letCount);
}
console.log("question 05 " +  (nameLengths));

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
console.log("question 06 " + sumOf[sumOf.length - 1]/ sumOf.length);
//I am still needing a lot of console.log's for some reason :D I struggled to call the correct array by the end of this 
//assignment. I need to set reminders of the proper array before each section of code for clarification
//     7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
// to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

let x = echo ("Hello", 3);

function echo(word, n){
    let echobox = "";
  //  console.log(word);
    for(let i = 0; i < n; i++){
        echobox += word + " "; //it is interesting to me that this logs the words in a line instead of stacked. Tells me the computer is remembering the iterations and performing them at once

    }console.log("question 07 " + echobox);
  //  console.log(echo);

}
    
//}
//     8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
//             ▪ The full name should be t he first and the last name separated by a space.
let N = fullName ("Rich", "Thompson");
function fullName(firstName, lastName){
     fullNamePrint = firstName + " " + lastName;
    //return N;
console.log("question 08 " + fullNamePrint);
 } //console.log(firstName + " " + lastName);

//let name = "";
//let lastName = "";}

//let fullName = ()

//     9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let money = [12, 34, 20, 68];
function greaterThan100(moneyArray){
    let sumMoney = 0;
    for(let i = 0; i < moneyArray.length; i++){  //when debugging, I found that "money" and what there are interchangeable, I feel this is more correct because it will adapt to any input 
        sumMoney += moneyArray[i];
    }
    console.log("question 09, array total after loop " + sumMoney);  
    if(sumMoney > 100){
        return true;
        console.log(sumMoney);  
    }else return false;

} 

console.log("question 09 " + greaterThan100(money));


//     for(let i = 0; i < numberArray.length; i++){
//         sum10 += numberArray.length[i];
//         if(numberArray[numberArray.length - 1] > 100){
//             console.log(true);
//         }
//     }

// }

//     10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numTen = [45, 78, 65, 34];
function numTenAv(array10){
    let sum10 = 0;
    for(let i = 0; i < array10.length; i++){
        sum10 += array10[i];
        

    }
    return (sum10 / array10.length);
}
 let avOfTen = numTenAv(numTen); 

console.log("question 10 " + numTenAv(numTen));
//for 


//     11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numTen2 = [12, 15, 26, 17];
function compare2Arrays(array1, array2){
    if (numTenAv(array1) > numTenAv(array2)){    //takes the parameters called on line 158 and runs them in the function numTenAv on line 131, does the same with the second array and compares
        return true;
        
    }
    else {
        console.log(numTenAv(array1));
        return false;
    }
}
console.log("question 11 " + compare2Arrays(numTen, numTen2)); //calls the function and outputs the return of the function compare2Arrays that uses the parameters given in the ()


//     12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
var isHotOutside = true;  //these variables can be user input or established with other code if desired
var moneyInPocket = 11;

function willBuyDrink(hot, money){
    //hot will be replaced with true or false when that is established and passed
    if(isHotOutside = true && moneyInPocket > 10.50){
        return true
    }
    else {
     return false; //don't forget to add the "return" to your else statement our will output "undefined" in a false condition
    }
}
console.log("Question 12 " + willBuyDrink(isHotOutside, moneyInPocket));
//     13. Create a function of your own that solves a problem. 
//
//             ▪ In comments, write what the function does and why you created it.
// function that helps you decide whether to turn the air down or not
// parameters( isDoorOpen) is yes don't turn down air, close the door, (are exhaust fans running) is yes don't turn down air, shut off fans, (isTooWarm)is it above 72 degrees, if yes and other
// variables are no, turn down air if air is above 74 turn down air even if all other variables are true
var temp = 75;
var isDoorOpen = true;
var areFansOn = true;
var isTooWarm = true;
details = [];
details.push(isDoorOpen, areFansOn, isTooWarm, temp);

//details = turnAirDown(true, true, true); //initially used this to pass the parameters into the array, later, I added the code above to help adapt the code to maybe take user input to create an
// array to pass the parameters, both worked
function turnAirDown(a, b, c, d){
    if(temp >= 74){
        return true;
    }
    else{
        if(isDoorOpen == true && areFansOn == true && isTooWarm == true){
            return true;
        }else false;

    }//(turnAirDown(details));
}console.log("question 13 " + turnAirDown(details));