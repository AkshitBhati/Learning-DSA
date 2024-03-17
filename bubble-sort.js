// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (nums) => {
  const length = nums.length

  for(let i=0; i<length; i++){
    for (let j=0; j<length - 1-i; j++){
        if(nums[j]>nums[j+1]){
            [nums[j], nums[j+1]] = [nums[j+1], nums[j]]

            //OR 
            // let temp = nums[j]
            // nums[j] = nums[j+1]
            // nums[j+1] = temp
        }
    }
  }
  return nums
};

//Time complexity = O(n*n)
//space complexity = O(1)
// console.log(bubbleSort([29, 10, 14, 37, 14]));


//optimized solution

// optimize the same by adding a flag which will stop the inner loop if there is no swapping of elements(Which means all elements are sorted).

const bubbleSort2 = (nums) => {
    let length = nums.length
    let swap = false

    for(let i=0; i<length; i++){
        for(let j=0; j<length-1-i; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                swap = true //set flag to true if swapped
            }
        }
        if(swap !== true){
            break;
        }
    }
    return nums
}

//Time Complexity - O(n)
//space Complexity - O(1)

console.log(bubbleSort2([29, 10, 14, 37, 14]));