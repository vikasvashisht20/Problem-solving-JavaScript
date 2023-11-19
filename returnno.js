//Return only numbers in Array
// console.log(typeof 24);
// console.log(typeof "Vikas");

var a = ['Vikas', 4,9,'Laptop', '11', 'zero'];

function numberonly(a) {
    return a.filter(a => typeof a == "number");

}
console.log(numberonly(a));