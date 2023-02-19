/* 
    ? Array Destructuring

    - Allows us to unpack values from arrays into distinct variables.
    - Similar syntax to array literals, but the square brackets [] are on the left side of the assignment operator (=)
    -Great way to pull info from the array and assign to it's own variable 
*/

//  W/O Destructuring
// const fullName = ["Will", "Mashrick"];
// const firstName = fullName[0];
// const lastName = fullName[1];
// console.log(firstName, lastName);

//  W/ Destructuring
const fullName = ["Will", "Mashrick"];
let [firstName, lastName] = fullName;
console.log(firstName); // Will
console.log(lastName); // Mashrick
console.log(firstName, lastName); // Will Mashrick

// -------------------------------------------------
/* 
? Spread Operator

    - The spread operator basically pulls out the elements of an array as a standalone list of elements

    Denoted by three consecutive periods: ...Array

*/

const myName = ["Will", "Mashrick"];

const copiedName = [...myName]; // The spread operator interts the elements from fullName
console.log("Copied w/ spread operator:", copiedName); // Copied w/ spread operator: [ 'Will', 'Mashrick' ]

const anotherCopy = [fullName]; // This inserts the array as a whole
console.log("Copied w/o spread operator:", anotherCopy); // Copied w/o spread operator: [ [ 'Will', 'Mashrick' ] ]


// An example with numbers:
// let numberArray =[];

// for (i=0; i <= 20; i++) {
//     numberArray.push(i);
// }
// console.log(numberArray);

// const newNumberArray = [...numberArray];
// console.log(newNumberArray);

// The spread operator "copied" the first state of my name, the copy did not update but the original can 
myName.unshift("Mr.");
console.log("My Name:", myName); // My Name: [ 'Mr.', 'Will', 'Mashrick' ]
console.log("Copied Name:", copiedName); // Copied Name: [ 'Will', 'Mashrick' ]

// Math.min, Returns the smaller of a set of supplied numeric expressions.

console.log(Math.min(1, 5, 13, -3));

const prices = [10.99, 5.99, 20, 3.99];
console.log(Math.min(prices)); // NaN, can't perform Math.min on array, array != number
console.log(Math.min(...prices)); // spread operator was able to unpack the numerical values from the array to process with Math.min

//  * Ex changing the original and copied array

const persons = [
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "John",
      age: 35,
    },
  ];

//   Old way of copying persons:
// const copiedPersons = persons.map((person) => ({
//     name: person.name,
//     age: person.age
// }));

// Using spread operator
const copiedPersons = [...persons];

// Test using push on persons array, does copiedPersons change
persons.push({name: "Anna", age: 29});

console.log("Persons Array:", persons); // Includes Anna object in array

console.log("Copied Persons Array:", copiedPersons); // Copy does not include Anna, created before anna was added




