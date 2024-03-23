// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([29,10,14,37,14]))

