//Distinct Array Elements..
// var a = [1,2,3,4];
// a.push(40);
// console.log(a);

// var i = a.indexOf(1);
// console.log(i);

function getUniq(arr){
    var unique = [];
    for(let i =0;i<arr.length; i++){
        if(unique.indexOf(arr[i]==-1)) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

var teachers = ["Anil", "Neil", "Nitin", "Mukesh", ",","Anil", "Neil"];

var uniq = getUniq(teachers);
console.log(uniq);
