//Reverse all elements 

var rev = [10,15,17,20,23];
// console.log(rev.length);
// console.log(rev.reverse()); //using predefined method


//without predefined method
// for(let i=4;i>=0; i--){
//     console.log(i);

// }
var answer = "";


 for (let i = rev.length-1; i>=0; i--){
    answer += rev[i]+ " ";
    
 }
 console.log("The output of reverse array is "+answer);

 