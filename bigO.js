// function charCount(str){
//     let charObj = {}
//     for (let i =0; i < str.length; i++){
//         let char = str[i].toUpperCase()
//         if(/[A-Z0-9]/.test(char)){
//             if (charObj[char] > 0 ){
//                 charObj[char] ++;
//             } else{
//                 charObj[char] = 1
//             }
//         }
//     }
//     return charObj
// }

// ? Refactoring
function charCount(str){
    let charObj = {}
    for (let char of str){
        char = char.toUpperCase()
        if(/[A-Z0-9]/.test(char)){
            charObj[char] = ++charObj[char] || 1
        }
    }
    return charObj
}

console.log(charCount('hello world'))