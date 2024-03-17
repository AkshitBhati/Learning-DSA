// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array

const maxSlidingWindowNaive = function(nums, k)  {
    let result = []
    
    for (let i=0; i<nums.length - k; i++){
        
        let max = nums[0]

        for (let j=1; j<k; j++){
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

console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3))