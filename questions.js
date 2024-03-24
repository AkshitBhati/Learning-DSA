// Write a JavaScript program to find the maximum number in an array. 

const arr = [1,2,3,45,15,12]

const findMax = (arr) => {
    let max = 0
    for (let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

// console.log(findMax(arr))

//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

const checkPalindrome = (str) => {
    if(typeof str !== "string"){
        console.log("Palindorme cannot be find for these data types")
        return
    }
    const reverseStr = str.split('').reverse().join('')

    if(str.toLowerCase() === reverseStr.toLowerCase()){
        console.log("It is a palidrome")
    }
    else{
        console.log("The string is not palindrome")
    }
}

// checkPalindrome("akshit")


//Reverse a string without using reverse method

const reverseStr = (str) => {
    let reverse = ''
    for (let i=str.length-1; i>=0; i--){
        reverse += str[i]
    }
    return reverse
}

// console.log(reverseStr("naman"))

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const evenNumberArray = (arr) => {
    let even = []
    if(arr.includes(0)){
        console.log("0 is neither odd or even")
    }

    for (let i=1;i<arr.length;i++ ){
        if(arr[i] % 2 === 0){
            even.push(arr[i])
        }

    }
    return even
}

// console.log(evenNumberArray([1,2,3,4651,23,456,1578,789]))

//Write a JavaScript program to calculate the factorial of a given number. 

const factorialNumber = (num) => {
    if (num === 0 || num === 1) {
        return 1; 
    }
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
};

// console.log(factorialNumber(4)); 

//Write a JavaScript function to check if a given number is prime

const checkPrime = (num) => {
    if(num === 0 || num === 1){
        console.log("Provided number is not prime")
    }

    for (let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            console.log("Provided number is not prime")
            return
        }
    }
    console.log("Provided number is prime")
}

// checkPrime(8)
// console.log(Math.sqrt(14 % 2 ))
// Note:- % return the remains, if their is no remainer it returns 0 this is the reason why the code worked

//Write a JavaScript program to find the largest element in a nested array.

const findLargestInNestedArr = (arr) => {
    let flatArr = arr.flat()
    let largest = 0
    flatArr.map((arr) => {
        if(arr > largest){
            largest = arr
        }
    })
    return largest
}


// console.log(findLargestInNestedArr(array))

//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

const FibonacciSeries = (numTerms) => {
    let series = []
    let a = 0
    let b = 1

    for (let  i=0 ;i<numTerms; i++){
        series.push(a)
        let next = a + b
        a = b
        b = next
    }

    return series
}


// console.log(FibonacciSeries(10))

//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

const titleCase = (str) => {
    let firstletter = str[0].toUpperCase()
    let restOfString = str.slice(1).toLowerCase()

    return firstletter + restOfString
}

// console.log(titleCase("akshit"))

//Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

const findLargestAndSmallest = (arr) => {
    //method 1
    // let sortedArr = [...arr].sort((a, b) => a - b)
    // let largest = sortedArr[sortedArr.length -1]
    // let smallest = sortedArr[0]

    // const result = [largest, smallest]
    // return result

    //method 2
    let sortedarr = []
    let compare = 0

    for (let i=0; i<arr.length; i++){
        if(arr[i] > compare){
            sortedarr.push(compare = arr[i])
        }
    }
    const largest = sortedarr[sortedarr.length -1]
    const smallest = sortedarr[0]

    const result = [smallest,largest ]
    return result
        
}

// console.log(findLargestAndSmallest([1,23,44,456,7,8]))

//Write a function that takes an array of integers as input and returns a new array with only the unique elements. 

const arrayWithUniqueElements = (arr) => {
   uniqueArr = []

    for (let i=0; i<arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}


// console.log(arrayWithUniqueElements([1,1,24,5,5,6,7,8,9]))
// ADvanced Questions

// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

const sortedArray = (arr1, arr2) => {
    let sortedArr = []
    let i=0
    let j=0

// Merge the arrays by comparing elements
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            sortedArr.push(arr1[i])
            i++
        }
        else{
            sortedArr.push(arr2[j])
            j++
        }
    }

    // If any elements are remaining in arr1, add them to sortedArr
    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    }

    // If any elements are remaining in arr2, add them to sortedArr
    while (j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    }


    return sortedArr
}

// console.log(sortedArray([1,2,3,4], [4,5,6,11,7]))