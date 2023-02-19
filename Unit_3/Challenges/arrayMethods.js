// ? Array Methods, awesome ways to do things with or to arrays

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Hotdog"];

for(item of food) {
    console.log(item);
}

// * .push(), adds item to the end of an array 
food.push("Pizza", "More Pie");
console.log("Push method:", food);
console.log(food[4]); // Pizza 

// * .splice(), splice(idices of where to remove , how many to remove , what to replace with/add)
food.splice(1, 1, "Tacos");
console.log("Splice method:", food);

food.splice(1, 0, "Steak");
console.log("Second Splice method:", food);


//  * .pop(), removes value from end of array
food.pop();
console.log("Pop method:", food);

// * .shift(), removes the first value of an array(value in first position)
food.shift();
console.log("Shift method:", food);

//  * .unshift(), adds to the front of an array, can include multiple items 
food.unshift("cake", "sushi", "roti");
console.log("Unshift method:", food);

// .length, property not method
console.log(food.length);

// * .toString(), returns a string representation of the array
let rgb = ["red", "green", "blue"];
console.log("ToString Method: ", rgb.toString());


// ! Iteration Methods
/* 
    ? .filter() & .includes()
    - does not destroy the original array
    - we typically store the filter array in a new variable 
    - takes a callback function that returns either true or false 
        - A callback function is another function that we invoke within our main function(nested function)
    - loops through array 
    - MUST have a return 
*/

let fruits = ["Kumquat", "Banana", "Peach", "Kiwi", "Papaya", "Mango"];

// Use filter to remove peach

// let filteredFruit = fruits.filter(fruit => {
//     let remainingFruit = fruit !== "Peach";
//     console.log(`Remaining fruit: ${remainingFruit}`);
//     return remainingFruit; 
// })

// console.log(filteredFruit);

//  .includes()
let otherFruit = "Pineapple";
// console.log("Includes method:", fruits.includes("P")); // false, .includes done on one item at a time (single value at a time)
console.log("Includes method:", otherFruit.includes("P")); // true
console.log("Includes method:", otherFruit.includes("apple")); // true

// .filter with .includes , remove any fruit with "P"

const filterFruit2 = fruits.filter((item) => !item.includes("P"));
console.log(filterFruit2);

// set the filtered array to variable, filter will run eatMango function per item in array
const filteredFruitFunctionEx = fruits.filter(eatMango);

// returns true if not mango, false if mango (filter relies on true/false callback)
function eatMango(fruit) {
    return fruit !== "Mango";
}

console.log("Filter with function ex: ", filteredFruitFunctionEx);

//console.log(eatMango("Baseball")) // demo function 

// ----------------------------------------------------

// ? .forEach()
/* 
    Runs 3 arguments:
        - The value
        - The index
        - The array object itself

    - forEach() helps us iterate over an array performing a function once per element in the array via a callback function.
    - Is not executed for empty elements 
    - Does not change the original array
*/

let newFoodList = ["apple", "pear", "mushrooms", "cheese", "spaghett"];

// for (let i = 0; i < newFoodList.length; i++) {
//     console.log(newFoodList[i]);
// }

// arrow function with concise body
// newFoodList.forEach((item) => console.log("ForEach Method: ", item));

// arrow func with block body
newFoodList.forEach((item, i) => {
    console.log("ForEach with Index: ", item, i);
})

// declarative function 
newFoodList.forEach(function (item) {
    console.log("Declaration sample: ", item);
})

// Build a function to console.log item
// Separating function from forEach, works
function displayFoodItem(foodThing) {
    console.log(`Function outside of forEach: ${foodThing}.`);
}

// Pass our forEach method the function
newFoodList.forEach(displayFoodItem);

// -------------------------------------------------
// ? .map()
/* 
    - Creates a new array from calling a function for every array element
    - Calls the function once per element in an array
    - Does not execute the function for empty elements
    - Does not change the original array
*/

// Populated by for loop
let numArray = [];
//  Populate by using .map on numArray
let fizzBuzzArray = [];

for (let k = 0; k <= 25; k++) {
    numArray.push(k);
}

// Checking if numArray was populated
// console.log(numArray);

//  Simple ex first
// numArray.map((x) => fizzBuzzArray.push(x));
// numArray.map((x) => fizzBuzzArray.push(x + 5));

// If % by 3 print fizz, if % by 5 print buzz, if % by 3 & 5 print # (push to fizzBuzzArray)
numArray.map((x) => {
    // Use a conditional to check division 
    if (x % 15 === 0) {
        fizzBuzzArray.push(x);
    } else if (x % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    } else if (x % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    }
})

// Check if fizzBuzzArray populated
console.log("fizzBuzzArray: ", fizzBuzzArray);
// console.log("numArray: ", numArray);

// ? --------------------- map vs forEach example -----------------------

let mainArr = [1, 2, 3, 4];

// .forEach does NOT return anything, performs an action on each item, does not return a value
let forEachEx = mainArr.forEach((i) => i);
console.log("ForEach Ex: ", forEachEx);

// .map returns a new array, perform action & creates/returns new value
let mapEx = mainArr.map((i) => i + 3);
console.log("Map Ex: ", mapEx);


//  -------------------------------------
// ? .find()
/* 
  - Executes a function for each array element and returns the value of the first element that passes a test.
  - Returns undefined if no elements are found.
  - Does not execute the function for empty elements.
  - Does not change the original array.
*/

let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"];

let character = "Leo";
console.log(
    "Find Ex 1: ",
    tmnt.find((c) => c === character)
);

character = "April";
console.log(
    "Find Ex 1: ",
    tmnt.find((c) => c === character)
);

character = "Splinter"; // find will return true for splinter versus the value splinter because we checked all items via including the index
console.log(
    "Find Ex 1: ",
    tmnt.find((c, i) => console.log(
        "Character: ", 
        c === character,
        "Index: ",
        i
    ))
);



