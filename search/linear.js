// Ques 1: Implement Linear Search in JavaScript
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0  ----->>>>>  Output:  4
// Input: nums = [4,5,6,7,0,1,2], target = 3  ----->>>>>  Output: -1


    const linearSearch = (arr, target) => {
        for (let i=0;i<arr.length; i++){
            if(arr[i] === target){
                return i
            }
        }
        return -1
    }

    console.log(linearSearch([4,5,6,7,0,1,2],0 ))