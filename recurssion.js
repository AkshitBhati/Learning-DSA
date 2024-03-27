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

//with Recursion

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

//with Recursion
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

//without Recursion
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

// console.log(checkPalindrome([121,456,789,321,232]))

//with Recursion
const isPalindrome = (arr) => {
    // Base case: if array has 0 or 1 element, it's a palindrome
    if (arr.length <= 1) {
        return true;
    }

    // Check if the first and last elements are equal
    if (arr[0] === arr[arr.length - 1]) {
        // Recur with the subarray formed by removing the first and last elements
        return isPalindrome(arr.slice(1, arr.length - 1));
    } else {
        // If the first and last elements are different, it's not a palindrome
        return false;
    }
};

// Example usage:
// console.log(isPalindrome([1, 2, 3, 2, 1]))
// console.log(isPalindrome([1, 2, 3, 4, 5]))

//Ques 4 Fibonacci Number

//without Recursion 

const FibonacciSeries = (numTerms) => {
    let series = []
    let a = 0
    let b = 1

    for (let  i=0 ;i<=numTerms; i++){
        series.push(a)
        let next = a + b
        a = b
        b = next
    }

    return series[series.length - 1]
}


// console.log(FibonacciSeries(10))

//with recurssion
const recursionFibonacci = (num) => {
    if(num <= 1){
        return num
    }
    else {
        let number = recursionFibonacci(num-1) + recursionFibonacci(num - 2)
        return number
    }    
}

// console.log(recursionFibonacci(10))

//Reverse a string
const reverseStr = (str) => {
    let reverse = ''
    for (let i=str.length - 1; i>=0; i--){
        reverse += str[i]
    }
    return reverse
} 

// console.log(reverseStr("hi"))


const reverseStrRecursively = (str) => {
    if (str === "") {
        return "";
    } else {
        return reverseStrRecursively(str.substr(1)) + str.charAt(0);
    }
}

// console.log(reverseStrRecursively("akshit"));

//Flatten Deeply Nested Array
//Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

const flat = (arr, n) => {
    if (n === 0) {
        return [...arr];
    }
    
    const flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened.push(...flat(arr[i], n - 1));
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
}

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]), 1)