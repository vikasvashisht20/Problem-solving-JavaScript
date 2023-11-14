// Array - is an object that can store multiple values at once..


// const words = ['Hello', 'wha' , 'ma'];
// console.log (words);

//creating an array 
// method 1 - using an array literal []
// const array1 =  ["cow", 'Buffalo'];

//method 2 - using new keyword
// const array2 = new Array("food" , "drink");
// it is recommended to use literal array to create an array.

// array can also be with mixed data types
// const myData = ['Vikas', 'Kaushal', 26, false];
// console.log(myData);
// console.log(typeof(myData));

// we can also store arrays, functions and other objects in an array 
// const newData = [
//     {'task': 'excercise'},
//     [1, 2 ,3],
//     function hello() {console.log('hello')}
// ];
// console.log(newData);

// to access elements in an array 
// const mybata = ['Vikas', 'Kaushal', 26, false];
// console.log(mybata[2]);

// Add an Element to an Array 
// we can use built-in method push() and unshift() to add elemnts to an array..
//push() method adds an element at the end of the array 
// let myDailyActivities = ['sleeping', 'waking up', 'eating'];
// myDailyActivities.push('Running', 'Gym'); //adding an element at the end 
// console.log(myDailyActivities);

//unshift() add element at the beegining of the array

// let dailyRoutine = ['Running', 'Fasting'];
// dailyRoutine.unshift('waking-up');
// console.log(dailyRoutine);

// Change elemts of an Array- these elements acan be added or changed by accesing the inex value of an array;
// let myDailyActivities = ['sleeping', 'waking up', 'eating'];
// myDailyActivities[1] = 'working out';
// myDailyActivities[4] = 'studying'; //at index 3 it will show undefined.
//  console.log(myDailyActivities); 

 //Remove an elemts from an Array- pop() to remove last element
 // and shift() method to remove first element
 let myDailyActivities = ['sleeping', 'waking up', 'eating'];
 myDailyActivities.pop();
 const  removedElement = myDailyActivities.pop();
//  myDailyActivities.shift();
 console.log(myDailyActivities);
 
 console.log("removedElement is ",removedElement);

 // Array length- we can find the number of in the array

//  myDailyActivities = ['sleeping', 'waking up', 'eating'];
//  console.log(myDailyActivities.length);

// Java Script Array Methods..
myDailyActivities = ['sleeping', 'waking up', 'eating'];
let newRoutine = ['washing'];

//sorting elemtns in the alphabrtical order 
// myDailyActivities.sort();
// console.log(myDailyActivities);

// finding index position of String
const position = myDailyActivities.indexOf('eating');
console.log(position);

//slicing the array elements
// const newDailyActivites = myDailyActivities.slice(0);
// console.log(newDailyActivites);

//concatenating two arrays
const routine = myDailyActivities.concat(newRoutine);
console.log(routine);

// Working of JavaScript Arrays- in Js an array is an object 

