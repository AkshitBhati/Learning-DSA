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

console.log(reverseWords("The sky is blue"));
