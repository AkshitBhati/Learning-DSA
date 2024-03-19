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
    return true; // If all pairs of digits match, it's a palindrome
}

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(10)); // Output: false