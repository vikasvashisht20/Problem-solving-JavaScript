var a = 0;
var b = 1;
var answer="";

answer+=a+" ";
answer+=b+" ";
// console.log(a);
// console.log(b);
for (i = 0; i<10; i++) {
    var temp = a + b;
    answer+=temp+" ";
    // console.log(temp);
    a = b;
    b = temp;
}
console.log("The fibonacci sequence: ", answer);
