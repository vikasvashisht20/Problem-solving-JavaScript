// Calculate length of Array without using length method

// var a = [10,15,20,25,56 ,69];
// //console.log(a.length);

// function arrayLength(s){
//     var length = 0;
//     while(s[length] !== undefined){
//         length++;
//     }
//     return length;
// }
// console.log(arrayLength(a));

// 
var colors = ["Pink", "Blue", "Red", "Green", "Brown"];

//without length method
function arrayLength(colors){
    var length = 0;
    while (colors[length] !== undefined){
        length++;
    }
    return length;
}console.log("The length of the array is "+ arrayLength(colors));
