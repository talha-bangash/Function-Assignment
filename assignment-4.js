//       Method 1



// function removeVowels(str){
// return (str.replace(/[aeiouAEIOU]/g,''));

// }

// let x = removeVowels("ausdf");
// console.log(x)







// method 2

function removeVowels(str){
    let vowels = "aeiouAEIOU";
    let result = "";
    for (let i =0; i < str.length; i++ ){
        if(!vowels.includes(str[i])){
            result+= str[i];
        }
    }
    return result

}

console.log(removeVowels("talha"))