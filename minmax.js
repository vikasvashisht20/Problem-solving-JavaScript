// Find largest number in an array
 
let numArray = [-74, -12, -10, -5555]
let maxElement=numArray[0];
let minElement= numArray[0];

for (let i = 0; i< numArray.length; i++){
    const element = numArray[i];
    if(element>maxElement){
        maxElement=element;
    } else if (element < minElement) {
        minElement = element;
    }
}
console.log("max element is",maxElement);
console.log("min element is", minElement);
