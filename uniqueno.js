
//Find position of target
// var arr = [1,2,3,3,5,5,7,7,9,20,21];
// const target = 20;
// var position = -1;

// for (let i = 0; i< arr.length; i++) {
//     const element = arr[i]; // i is the position
//     if (element == target) {
//         position = i;
//     }
    
// }

// console.log(position);

// Finding the unique number in an array
var arr = [1,2,3,3,5,5,7,7,9,20,21];

var uniqueno = [];

for (let i=0; i<arr.length; i++) {  
    const element = arr[i];

    // check element already present in array or not
    if (!uniqueno.includes(element)) {
        uniqueno.push(element);
    }
    // let isPresent=false;
    // for (let j=0; j<uniqueno.length; j++) {
    //     if (element == uniqueno[j]) {
    //         isPresent=true;
    //         break;
    //     }
    // }
    // // nahi hai toh daal do
    // if(!isPresent){
    //     uniqueno.push(element)
    // }

}

console.log(uniqueno);

//set doesnt allow to add copy of elements
const nums = new Set();
for (let i=0; i<arr.length; i++) {  
    const element = arr[i];
    nums.add(element);
}

console.log("uniques using sets",nums);