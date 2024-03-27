// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array

const maxSlidingWindowNaive = function(nums, k)  {
    let result = []
    let n = nums.length
    for (let i=0; i<=n -k; i++){
        let max = nums[i]

        for (j =1; j<k; j++){
            if(nums[i+j] > max){
                max = nums[i+j]
            }
        }
        result.push(max)
    }

    return result
}

//time complexity - O(n*n)
//space complexity - O(n)

// console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3))


const maxSlidingWindow = (nums, k) => {
    let result = []
    let deque = [] 

    for (let i = 0; i < nums.length; i++) {
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop(); 
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

//write a function maxSubarraySum which accepts an array of interges and a number called n. The function should calculate the max sum of n consecutive el in the arr

const maxSum = (arr, n) => {
    let max = -Infinity

    for (let i=0; i<arr.length; i++){
        let temp = 0
        for (let j=0; j<n; j++){
            temp += arr[i+j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}

// console.log(maxSum([4,2,1,6],4));

//Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

//Input: nums = [10,5,2,6], k = 100
// Output: 8

const numSubarrayProductLessThanK = (nums, k) => {
    if(k <= 1){
        return 0
    }
    let count = 0
    let product = 1
    let left = 0

    for (let right = 0; right<nums.length; right++){
        product *= nums[right]

        if(product >= k){
            product /= nums[left]
            left++
        }
        count += right - left + 1
    }
    return count
}

console.log(numSubarrayProductLessThanK([10,5,2,6], 100))

//for counting all the subarrays
function subarraysProductLessThanK(nums, k) {
    if (k <= 1) {
        return [];
    }
    
    const result = [];
    let product = 1;
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left];
            left++;
        }
        // All subarrays from left to right are valid
        for (let i = right; i >= left; i--) {
            result.push(nums.slice(i, right + 1));
        }
    }
    
    return result;
}

// Test the function
let nums = [10, 5, 2, 6];
let k = 100;
// console.log(subarraysProductLessThanK(nums, k));

