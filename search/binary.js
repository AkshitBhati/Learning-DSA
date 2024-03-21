//binary is preferd over linear because of the time complexity it has a time complexity of O(logn) and also in binary search the arr should be sorted

//why do we need middle in binary search

// Ques 1: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// Write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1

const binarySearch = (nums, target) => {
    let start = nums[0]
    let end = nums.length - 1

    for (let i=0;i<nums.lenght;i++){
        while(start <= end){
            let middle = Math.floor((start + end)/2)

            if(nums[middle] === target){
                return middle
            }

            else if(nums[middle] < target){
                start = middle + 1
            }
            else {
                end = middle - 1
            }
        }
    }
    return -1
}

console.log(binarySearch([-1,0,3,5,9,12], 0))

//Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

