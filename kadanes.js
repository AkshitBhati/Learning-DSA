//Given an array of integer array nums, find the subarray with the largest sum,
//and return its sum

//Input:[-2,1,-3,4,-1,2,1,-5,4] -------->>> output: 6, [4,-1,2,1]
//Tnput: [5,4,-1,7,8] -------->>> output: 23, [5,4,-1,7,8]

const maxSubArray = (nums) => {
    let maxSum = 0
    let startInd = 0
    let endInd = 0

    for(let i=0; i<nums.length; i++){ //O(n)
        let currentSum = 0
        for(let j = i; j<nums.length; j++){ //o(n)
            currentSum += nums[j]

            if(currentSum> maxSum){
                maxSum = currentSum
                startInd = i
                endInd = j
            }
        }
    }
    return {sum:maxSum, subArray:nums.slice(startInd, endInd + 1)}
}

//Time complexity = O(n*n)
//Space complexity = O(1)   ------>> as it returns only one elements

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

//The above solution is not good because of time complexity and takes much time 

//Using Kadane's Algorithim to find the Max sum of subarray

const maxSubArray2 = (nums) => {
    let sum = 0
    let max = nums[0]
    let startIndex = 0
    let endIndex = 0
    let tempStartIndex = 0;

    for(let i=0;i<nums.length; i++){ //O(n)
        sum += nums[i]

        if(sum > max){
            max = sum
            startIndex = tempStartIndex
            endIndex = i
        }

        if(sum < 0){
            sum = 0
            tempStartIndex = i + 1
        }
    }

    return {sum:max, subArray:nums.slice(startIndex, endIndex + 1)}
}

console.log(maxSubArray2([5,4,-1,7,8]))