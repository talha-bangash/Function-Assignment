function reverseString(str){
    let reversed = "";
    
    reversed = str.split('').reverse().join('');
    return(reversed);

}

let a = reverseString('Talha');
console.log(a)