// var a = 0;
// var b = 1;
// var answer="";

// answer+=a+" ";
// answer+=b+" ";
// // console.log(a);
// // console.log(b);
// for (i = 0; i<10; i++) {
//     var temp = a + b;
//     answer+=temp+" ";
//     // console.log(temp);
//     a = b;
//     b = temp;
// }
// console.log("The fibonacci sequence: ", answer);


//fibonacci using while loop
var a = 0;
var b = 1;
var answer = "";
answer+= a+ " ";
answer+= b+" ";

let count = 0;

while (count <10) {
    var temp = a+b;
    a = b;
    b = temp;
    count++;
    answer+= temp+ " ";
}

console.log("The fibonnaci sequence: ", answer);