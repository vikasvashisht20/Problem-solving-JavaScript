//input two integer numbers and display sum of even no's between these two input numbers
let numbers = [2,3,5,7,4,1,9,15,20]
let sum = 0;
let multipication = 1;
// let isEven = true;
let evenSum = 0;
let mulitpleFive = 1;

for(let i= 0; i< numbers.length; i++) {
    const element=numbers[i];

    sum = sum + element;
    multipication = multipication * element;
    if (element % 2 ==0) {
        evenSum = evenSum + element;
    }

    if (element % 5 == 0) {
        mulitpleFive = mulitpleFive * element;
    }
    
}

console.log("sum of numbers is ", sum);
console.log("sum of even numbers is ", evenSum);
console.log(" multiple of 5 is ", mulitpleFive);
console.log("Multipication of numbers is ", multipication);