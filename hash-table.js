//Sort the People
//You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

//Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]

const sortPeople = (names,heights) => {
    if(names.length !== heights.length) return false

    let zipped = []

    for (let i=0; i<names.length; i++){
        zipped.push({name:names[i], height:heights[i]})
    }

    zipped.sort((b,a) => a.height - b.height)

    let sortedNames = zipped.map((zip) => zip.name)

    return sortedNames
}

console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150]))