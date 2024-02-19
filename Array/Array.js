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