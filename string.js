//create JavaScript Strings
//In Js , strings are creatd by surrounding them with quotes.
//There are three ways you can use quotes.
//'Hello'- single quotes, "hello"- Double quotes, `Hello` - backticks

// const surName = 'Peter';
// const name1 = 'Jack';
// const result = `The names are ${surName} and ${name1}`;
// console.log(result);
//Single and double quotes are almost same we can use either of them 
// backticks is used when you need to include expressions or variables
// it can be done by wrapping variables or expressions ${variable or expression}

// const name = 'My name is "Pappan".'; //ew can write a quote inside a quote
 //const name3 = 'My name is 'Popa'.'; //error

 //Accessing the string Characters- it can be done in 2 ways
 // 1. treat string as an array.
//  const a = 'hello';
//  console.log(a[2]);

 //2. using charAt() method
//  const b = 'Apple';
//  console.log("The accesed character is ", a.charAt(1));


// JavaScript strings are immutable means they cannot be replaced 
// the character of string cannot be changed.

// let aa = 'hello';
// aa[0] = 'H';
// console.log(aa);
// instead we can assign a new string
// let aa = 'hello';
// aa = 'Hello';
// console.log(aa);

// JavaScript is Case-sensitive -lowecase and uppercase are treated differenlty
// const c= 'a';
// const d = 'A'
// console.log(a===b);

//JavaScript Multiline Strings
// + operator or \ operator can be used to use a multiline string 

// const message1 = 'This is a long message' + ' its has lots of error' + ' and bugs'

// const message2 = "There were two cties \ they were so populated and pulluted \ aprt from that it was hot there."

// console.log(message1, message2);

//JavaScript String Length
// const v = "Hello";
// console.log("this string has length = ",v.length);

//JavaScript String Objects
//  let h = "Home";
//  let h1 = new String ('Home'); // type 2 using new keyword.
//  console.log(h);
//  console.log(h1);

//  console.log(typeof h);
//  console.log(typeof h1);

// JavaScript String Methods

const text1 = 'hello';
const text2 = 'Kaushal';
const text3 = '     Banglore waale      ';

// concatenating two strings 
const result1 = text1.concat(' ', text2);
console.log(result1);

//converting the text to uppercase
const result2 = text1.toLocaleUpperCase();
console.log(result2);

//removing whitespace from the string 
const result3 = text3.trim();
console.log(result3);

//converting the string to an array 
const result4 = text1.split();
console.log(result4);

// slicing the string - (returns a part of a string)
const result5 = text1.slice(2,4);
console.log(result5);

// include() - searches for a string and resturns a boolean value 
let text = "What are you doing  ?"
let result6 = text.includes('you');
console.log(result6);

// JavaScript String() Function 
const a = 443;
const b = true;
//converting to string 
const result11 = String(a);
const result21 = String(b);

console.log(result11);
console.log(result21);
