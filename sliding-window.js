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

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
