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
//Time complexity - O(n)
// console.log(binarySearch([-1,0,3,5,9,12], 0))

//for time complexity of O(log n)

const search = function(nums, target) {
    let start = 0
    let end = nums.length -1

    while(start <= end){
        let mid = Math.floor((start + end) /2)

        if(nums[mid] === target){
            return mid
        }

        else if(nums[mid] < target){
            start = mid + 1
        }

        else {
            end = mid - 1
        }
    }

    return -1
};

console.log(search([-1,0,3,5,9,12], 9))
//Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

const findElement = (arr, target) => {
    let output = []
    for (let i=0;i<arr.length; i++){
        if(arr[i] === target){
            output.push(i)
        }
    }

    if(output.length === 0){
        return [-1,-1]
    }
    return output
}

// this is the naive solution having a time complexity of O(n)

// console.log(findElement([5,7,7,8,8,10], 8))

//for time complexity of O(log n) using binary search 

const findElementBinary = (arr, target) => {
    let start = -1
    let end = -1

    //initializing start and end to -1 provides a clear indication that the target element has not been found yet.

    let left = 0
    let right = arr.length - 1

    while(left <= right){
        let middle = Math.floor((left + right)/2)

        if(arr[middle] === target){
            start = middle;
            right = middle - 1
        }

        else if(arr[middle] < target ){
            left = middle + 1
        }

        else {
            right  = middle - 1
        }
    }

    // for searching from right 

    left = 0
    right = arr.length -1

    while(left <= right){
        let middle = Math.floor((left + right))

        if(arr[middle] === target){
            end = middle
            left = middle + 1
        }

        else if(arr[middle] < target){
            left = middle + 1
        }

        else {
            right = middle - 1
        }
    }
    return [start, end];
}

// console.log(findElementBinary([5,7,7,8,8,10], 8)); // Output: [3,4]

//Single Element in a Sorted Array
// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

const singleNonDuplicate = (nums) => {
    let left = 0
    let right = nums.length -1

    while(left < right){
        let mid = Math.floor((left + right) / 2)

        if(mid % 2 === 1){
            mid-- //adjust this to make it even
        }
        //if nums[mid] === nums[mid + 1] then the unique lies the to right
        if(nums[mid] !== nums[mid + 1]){
            right = mid
        }

        else {
            left = mid + 2
        }
    }

    return nums[left]
}

// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))