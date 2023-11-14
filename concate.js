// function test () {
//     var a = 3;
//     var b = 8;

//     var temp;
//     temp = a;
//     a=b;
//     b = temp;

//     console.log(a);
//     console.log(b);
// }

// //console.log(test);

// var gameLevel = 1;
// var gameLevel = 3;
// console.log ("Your level is currently "+ gameLevel);

// console.log ("Hello " + "Vicky");

// var message = "Kauhal";
// var nam = "Vikas";

// console.log(message + " is " + nam);
// var message = "Kaushal";
// console.log(message.length);

// var letter = prompt ("Hello write about this letter: ");
// var latterCount = letter.length;

// console.log(latterCount);

var name = prompt("What is your name ?");
// capitalise the first letter of thier name 

//a isolate the first char 
var firstChar = name.slice(0,1);
//b turn the first char upper capitalise
var upperCaseFirstChar = firstChar.toLocaleUpperCase();
// c isolate the rest of the characters
var restOfName = name.slice(1,name.length);
// change the rest of the name to Lower Case 
restOfName = restOfName.toLocaleLowerCase();

// capitalised name --concactioante the first char 
var capitalisedName = upperCaseFirstChar + restOfName;
