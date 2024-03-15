//Factorial of n

//without recurssion
const factorial = (num) => {
    if(num === 0 || num === 1){
        return 1
    }
    let factorial = 1
    for (let i=num; i>=1; i--){
        factorial *= i
    }
    return factorial
}

// console.log(factorial(5))

//with recurrsion

const recurrsiveFactorial = (num) => {
    if(num <= 0){
        return 1
    }
    else return num * recurrsiveFactorial(num - 1)
}

// console.log(recurrsiveFactorial(5))

//Ques 2 : Create an array with range of numbers
//Input  : start = 1, end = 5 ------>>>> output:1,2,3,4,5

//without recurssion
const rangeWithout = (start, end) => {
    let range = []
    for( let i = start; i<=end; i++){
        range.push(i)
    }
    return range
}

// console.log(rangeWithout(0,5))

//with recurrsion
const range = (start, end) => {
    if(end < start){
        return []
    }
    else {
     const numbers = range(start, end - 1)
     numbers.push(end)
     return numbers 
    }
}

// console.log(range(0,5))

//given an array of integer x, return true if x is a palindorme and false otherwise
//Input: x = 121 ----->>>> output: true

//without recurssion
const checkPalindrome = (arr) => {
    let palindrom = []
    for (let i=0; i<arr.length; i++){
       const numAsString = arr[i].toString()
       const reverseNumSTring = numAsString.split('').reverse().join('')
       if(numAsString === reverseNumSTring){
        palindrom.push(arr[i])
       }
    }
    return palindrom
}

console.log(checkPalindrome([121,456,789,321,232]))


