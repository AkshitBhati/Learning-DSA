// Ques 2: Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14]  ----->>>>>  Output: [10,14,14,29,37]

const selectionSort = (nums) => {
    let n = nums.length

    for (let i=0; i<n-1; i++){
        let minIndex = i
        for (let j=i+1; j<n; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
        }
    }
    return nums
}

console.log(selectionSort([29,10,14,37,14]))