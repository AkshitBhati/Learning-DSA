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

// console.log(search([-1,0,3,5,9,12], 9))
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


 // Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

    // Return the kth positive integer that is missing from this array.

//     Input: arr = [2,3,4,7,11], k = 5
//     Output: 9

const findKthPositive = function(arr, k) {
    let count = 0;
    let i = 0;

    while (count < k) {
        i++;
        console.log("this is i",i)
        if (arr.includes(i)) {
            continue; // Skip if current number is present in the array
        }
        console.log("this is count",count)
        count++;
    }

    return i;
};
//time complexity O(log n) and is a binary solution fully optimized
// console.log(findKthPositive([2,3,4,7,11], 5)); // Output: 9

//Maximum Count of Positive Integer and Negative Integer
//Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.

//Input: nums = [-2,-1,-1,1,2,3]
// Output: 3

const maximumCount = function (arr) {
    let low = 0
    let high = arr.length -1

    while(low < high){
        let mid = Math.floor((low + high) / 2)

        if(arr[mid] < 0){
            low = mid
        }
        else high = mid -1
    }

    return arr[0] >= 0 ? 0 : low + 1
}

// console.log(maximumCount([-2,-1,-1,1,2,3]))

//write a function of sumZero which accepts a sorted array of intergers. The function should find the first pair which return the sum zero. Return an array including both value or return undefined

const sumZeroNaive = (arr) => {
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

// console.log(sumZeroNaive([-3,-2,-1,0,1,2,3,5]))

const sumZero = (arr) => {
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]

        if(sum === 0){
            return [arr[left], arr[right]]
        }

        else if(sum > 0){
             right --
        }

        else{
            left ++ 
        }
    }
}

// console.log(sumZero([-3,-2,-1,0,1,2,3]))

//count unique elements in the sorted array
//Input:[1,2,3,4,4,4,7,7,12,12,13]
//output:7


const uniqueElementNaive = (arr) => {
    const unique = new Set([...arr])
    return unique.size //Set method does not have length property use size insted
}

// console.log(uniqueElementNaive([1,2,3,4,4,4,7,7,12,12,13]))

const uniqueElement = (arr) => {
    let unique = []

    for (let i=0; i<arr.length; i++){
        let left = i
        let right = i+1

        if(arr[left] !== arr[right]){
            unique.push(arr[i])
        }
    }
    return unique.length
}

console.log(uniqueElement([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // Output: 7
