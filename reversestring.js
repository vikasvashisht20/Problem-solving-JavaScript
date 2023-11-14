// Reverse a string and print output
let str = "abba";
let reserve = "";


for (let i=str.length-1;i >= 0;i-- ) {
    let res =  str[i];

    reserve = reserve + res;
    
    

    //console.log("position = " + i + ': element= ' + str[i]);
    // console.log();
    
    

}

console.log( reserve);

if (str == reserve){
    console.log(str, "is palindrome");
} else{
    console.log(str, "is not palindrome");

}


