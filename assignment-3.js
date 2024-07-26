function averageArray(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        x = x + arr[i]; 
    }
    return(x / arr.length)

}
let a = averageArray([400,500,600]);
console.log(a);