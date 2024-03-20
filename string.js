// Ques 1 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "Subscribe to RoadsideCoder" , maxlength=9
// Output: "Subscribe…"

const truncate = (str, n) => {
    if(str.length > n){
        return str.slice(0, n+1) + "..."
    }
    else {
        return str
    }
}

// console.log(truncate("akshit"), 2)

// Ques 2 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

const checkPalindrome = (num) => {
    if (num < 0) return false; // Negative numbers are not palindromes
    const reversed = num.toString().split('').reverse().join('');
    return num.toString() === reversed;
}

const res = checkPalindrome(10);
// console.log(res);


const isPalindrome = (num) => {
    if (num < 0) return false; // Negative numbers are not palindromes
    let numStr = num.toString();

    for (let i = 0; i < numStr.length / 2; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) {
            return false; // If any pair of digits doesn't match, it's not a palindrome
        }
    }
    return true; 
}

// console.log(isPalindrome(121));
// console.log(isPalindrome(10)); 

// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

const hammingDistance = (x,y) => {
    if(x.length!== y.length){
        throw new Error("Stings must be equal")
    }
    let distance = 0
    for(let i=0; i<x.length; i++){
        if(x[i] !== y[i]){
            distance++
        }
    }
    return distance
}

// console.log(hammingDistance("hello", "hillr"))

//hammingDistance for binary

const hammingDistanceBinary = (x, y) => {
    x = x.toString(2) //this will make the number to binary
    y = y.toString(2)

    if(x.length < y.length){
        while(x.length !== y.length) x = "0" + x
    }
    else {
        while(x.length !== y.length) y = "0" + y
    }

    let distance = 0
    for (let i=0; i<x.length; i++){
        if(x[i] !== y[i]){
            distance++
        }
    }

    return distance
}

// hammingDistanceBinary(1,4)


//Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.
//Input: nums = [4,14,2]
//Output: 6

let totalHammingDistanceNaive = (nums) => {
    let max = Math.max(...nums); // Find the maximum number in the array
    let maxBinaryLength = max.toString(2).length; // Determine the maximum bit length needed
    
    let binaryNum = nums.map((num) => {
        let binary = num.toString(2);
        // Pad with leading zeros if necessary
        while (binary.length !== maxBinaryLength) {
            binary = "0" + binary;
        }
        return binary;
    });

    let distance = 0;
    // Iterate over each pair of numbers to calculate Hamming distance
    for (let i = 0; i < binaryNum.length; i++) {
        for (let j = i + 1; j < binaryNum.length; j++) {
            // Compare each bit of the binary numbers
            for (let k = 0; k < maxBinaryLength; k++) {
                if (binaryNum[i][k] !== binaryNum[j][k]) {
                    distance++;
                }
            }
        }
    }
    return distance;
};
//time complexity of this O(n^2) so it is not a good solution
console.log(totalHammingDistanceNaive([4, 14, 2])); // Output: 6


var totalHammingDistance = function(nums) {
    let totalDistance = 0;
    const n = nums.length;

    for (let bit = 0; bit < 32; bit++) {
        let setBitsCount = 0;
        

        for (let num of nums) {
            setBitsCount += (num >> bit) & 1;
        }

        totalDistance += setBitsCount * (n - setBitsCount);
    }

    return totalDistance;
};

//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
 
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; 
    
    let prefix = strs[0]; 
    
    
    for (let i = 1; i < strs.length; i++) {
    
        while (!strs[i].startsWith(prefix)) {
    
            prefix = prefix.slice(0, prefix.length - 1);
            
    
            if (prefix === "") return "";
        }
    }

    return prefix;
};
