var no = [5,20,11,42,2,19];
console.log("The even position of an array is "+questionEven(no));

function questionEven(array){
    let arr = [];
    for(let i=0; i<array.length;i++) {
        if(i%2 === 0){
            arr.push(array[i]);
        } 
        
    }
    return arr;
}
//console.log(questionEven);
 function questionOdd(array){
    let newArr =[];
    for(let j=0; j<array.length; j++){
        if(j%2 !== 0){
            newArr.push(array[j]);
        }
    }
    return newArr;
 }

 console.log("The odd position of an array is "+questionOdd(no));