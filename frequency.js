//function called same, accepts 2 arrays. Function should return true if the second array contains the sq of elements of 1st arr

const sameNaive = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }
    
    for (let i =0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
    
        arr2.splice(correctIndex, 1)
    }
    
    return true
    
    }
    
    // console.log(sameNaive([1,2,3], [1,9,4]))


//using frequency counter method now

 const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    for (let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }

    return true
 }

//  console.log(same([1,2,3], [9,1,4]))

 //anagram using the frquency counter

 const anagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }

    let obj1 = {}
    let obj2 = {}

    for (let val of str1){
        obj1[val] = (obj1[val] || 0) + 1
    }
    for (let val of str2){
        obj2[val] = (obj2[val] || 0) + 1
    }
    
    for (let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    
    return true
 }

//  console.log(anagram("akshit", "akshii"))