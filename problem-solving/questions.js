// Write a JavaScript program to find the maximum number in an array. 

// const arr = [1,2,3,45,15,12]

// const findMax = (arr) => {
//     let max = 0
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr))

//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

// const checkPalindrome = (str) => {
//     if(typeof str !== "string"){
//         console.log("Palindorme cannot be find for these data types")
//         return
//     }
//     const reverseStr = str.split('').reverse().join('')

//     if(str.toLowerCase() === reverseStr.toLowerCase()){
//         console.log("It is a palidrome")
//     }
//     else{
//         console.log("The string is not palindrome")
//     }
// }

// checkPalindrome("akshit")


//Reverse a string without using reverse method

// const reverseStr = (str) => {
//     let reverse = ''
//     for (let i=str.length-1; i>=0; i--){
//         reverse += str[i]
//     }
//     return reverse
// }

// console.log(reverseStr("naman"))

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// const evenNumberArray = (arr) => {
//     let even = []
//     if(arr.includes(0)){
//         console.log("0 is neither odd or even")
//     }

//     for (let i=1;i<arr.length;i++ ){
//         if(arr[i] % 2 === 0){
//             even.push(arr[i])
//         }

//     }
//     return even
// }

// console.log(evenNumberArray([1,2,3,4651,23,456,1578,789]))

//Write a JavaScript program to calculate the factorial of a given number. 

// const factorialNumber = (num) => {
//     if (num === 0 || num === 1) {
//         return 1; 
//     }
//     let factorial = 1;
//     for (let i = num; i >= 1; i--) {
//         factorial *= i;
//     }
//     return factorial;
// };

// console.log(factorialNumber(4)); 

//Write a JavaScript function to check if a given number is prime

// const checkPrime = (num) => {
//     if(num === 0 || num === 1){
//         console.log("Provided number is not prime")
//     }

//     for (let i=2; i<= Math.sqrt(num); i++){
//         if(num % i === 0){
//             console.log("Provided number is not prime")
//             return
//         }
//     }
//     console.log("Provided number is prime")
// }

// checkPrime(8)
// console.log(Math.sqrt(14 % 2 ))
// Note:- % return the remains, if their is no remainer it returns 0 this is the reason why the code worked

//Write a JavaScript program to find the largest element in a nested array.

// const findLargestInNestedArr = (arr) => {
//     let flatArr = arr.flat()
//     let largest = 0
//     flatArr.map((arr) => {
//         if(arr > largest){
//             largest = arr
//         }
//     })
//     return largest
// }


// console.log(findLargestInNestedArr(array))

//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

// const FibonacciSeries = (numTerms) => {
//     let series = []
//     let a = 0
//     let b = 1

//     for (let  i=0 ;i<numTerms; i++){
//         series.push(a)
//         let next = a + b
//         a = b
//         b = next
//     }

//     return series
// }


// console.log(FibonacciSeries(10))

//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

// const titleCase = (str) => {
//     let firstletter = str[0].toUpperCase()
//     let restOfString = str.slice(1).toLowerCase()

//     return firstletter + restOfString
// }

// console.log(titleCase("akshit"))