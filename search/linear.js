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

    // console.log(linearSearch([4,5,6,7,0,1,2],0 ))

//Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3

const maximumCount = function (nums){
    let pCount = 0
    let nCount = 0

    for(let i=0; i<nums.length; i++){
        if(nums[i] < 0){
            nCount ++
        }
        else pCount ++
    }

    return Math.max(pCount, nCount)
}

console.log(maximumCount([-2,-1,-1,1,2,3]))

// let start = nums[0]
//     let end = nums.length -1
//     let pCount = 0
//     let nCount = 0

//     while(start <= end){
//         let mid = Math.floor((start + end) /2)

//         if(nums[mid] < 0){
//             nCount ++
//         }
//         else {
//             pCount++
//         }
//     }
//     return pCount > nCount ? pCount : nCount

// tyring logic of binary search  