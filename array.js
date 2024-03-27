//Second largest Element

const secondLargestEl = function (nums){
    nums.sort((a, b) => a-b)

    return nums[nums.length-2]
}

// console.log(secondLargestEl([2, 4, 5, 6, 8]))

//least frequent Element in an array

const frequent = function (arr){
    let obj = {}

    for (let i =0; i<arr.length; i++){
        obj[arr[i]] = (obj[arr[i]] || 0 ) + 1
    }
    let minFrequency = Infinity
    for (let key in obj){
        if(obj[key] < minFrequency){
            minFrequency = obj[key]
        }
    }

    let leastFrequent = []
    for (let key in obj){
        if(obj[key] === minFrequency){
            leastFrequent.push(key)
        }
    }

    if (leastFrequentElements.length === 1) {
        return leastFrequentElements[0];
      }
    return leastFrequent
}

// console.log(frequent([1, 2, 2, 3, 3, 3]))

//Contain duplicate

//naive approach

const duplicateNaive = function (nums){
    nums.sort((a,b) => a-b)
    for (let i=0; i<nums.length; i++){
        let left = i
        let right = i+1

        if(nums[left] === nums[right]){
            return true
        }
    }
    return false
}
//using objects
const duplicateObj = function (nums){
    let obj = {}
    for (let i=0 ;i<nums.length; i++){
        if(obj[nums[i]]){
            return true
        }
        obj[nums[i]] = true
    }
    return false
}

//using maps
const duplicateMap = function(nums) {
    let map = new Map()

    for (let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i])
    }
    return false
}

// console.log(duplicateMap([1,2,3]))

//two sum

const twoSum = function (nums, target){
    let map = new Map()

    for (let i=0; i<nums.length; i++){
        let compared = target - nums[i]
        if(map.has(compared)){
            return [map.get(compared), i]
        }
        else{
            map.set(nums[i], i)
        }
    }
    return []
}