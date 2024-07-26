function factorial(n){
        let x = 1;
        for(let i = n; i > 0; i--){
            x = x * i;
        }
        return(x);
}

let a = factorial(100);
console.log(a);