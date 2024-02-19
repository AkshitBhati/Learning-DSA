//Ques-1 Second largest element
//Given an array os size n print the second largest
//distinct element from the array

// Input:[12,35,1,10,34,1] output-34
// const input = [12,35,1,10,34,1]
// const input = [10,10,5]

// My Approach without watching any video
// const findSecondLargest = (array) => {
//     let num = array.sort((a,b) => a-b)
//     return num[num.length-2]

// }

// console.log(findSecondLargest(input))

//It has a problem that if the largest number is repeated twice i will not get the desried result

const findSecondLargest = (array) => {
    const uniqueArray = Array.from(new Set(array)) //O(n) is the time complexity
    const sortedArr = uniqueArray.sort((a,b) => { //O(nlogn) is the time complexity
        return b - a
    })
    return sortedArr[1]
}
// console.log(findSecondLargest(input))

//This code has a time complexity of O(nlogn)

const secondLargestOptimized = (arr) => {
    let largest = -1
    let secondLargest = -1

    for(let i=0; i<arr.length; i++){  
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondLargestOptimized([12,35,1,10,34,1]))
//Time Complexity - O(n)
//Space Complexity - O(1)

//Rotate Array By K
//Given an array of numbers, rotate the array to the right by K steps
//where K is a non negative

//Input nums:[1,2,3,4,5,6,7] k=3 output-> [5,6,7,1,2,3,4]
//Input nums:[-1,-100,3,99] k=2  output-> [3,99,-1,-100]

const rotatedArray = (nums, k) => {
    let size = nums.length
    if(k > size){
        return k % size
    }
    const rotated = nums.splice(size - k, size) //O(n)
    nums.unshift(...rotated) //O(n)

    return nums
}

console.log(rotatedArray([1,2,3,4,5,6,7], 3))

//Time Complexity - O(n)

const rotateArrayOptimized = (nums, k) => {
    let size = nums.length
    if(k > size){
        return k % size
    }
}