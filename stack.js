//Ques 1:- Given an input string s, revserse the order of the words

//Input : The sky is blue

const reverseWords = (str) => {
    if (str === "") {
        return "";
    }
    // Find the index of the first space in the string
    let spaceIndex = str.indexOf(' ');

    // If no space is found, it means there's only one word left in the string
    if (spaceIndex === -1) {
        return str;
    }

    let word = str.substring(0, spaceIndex);

    let restOfString = str.substring(spaceIndex + 1);

    let reversedRest = reverseWords(restOfString + " " + word);
    return reversedRest;
}

// console.log(reverseWords("The sky is blue"));

const reverseWords2 = (str) => {
   const splitS = str.split(' ')
   const stack = []

   for (let i of splitS){ //O(n)
    stack.push(i)
   }

   let finalS = ''
   while(stack.length){ //O(n)
    const current = stack.pop()

    if(current){
        finalS += " " + current
    }
}
return finalS.trim()
   
}

// time complexity = O(n)
//space complexity = O(n)
// console.log(reverseWords2("the sky is blue"))


// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else if (char === ")" || char === "]" || char === "}") {
        if (isEmpty(stack)) {
          return false;
        }
  
        const top = stack.pop();
        if (
          (char === ")" && top !== "(") ||
          (char === "]" && top !== "[") ||
          (char === "}" && top !== "{")
        ) {
          return false;
        }
      }
    }
  
    return isEmpty(stack);
  }
  
  function isEmpty(stack) {
    return stack.length === 0;
  }
  
  const string1 = "()";
  console.log(isValid(string1));
  
  // Time Complexity = O(n)
  // Space Complexity = O(n)