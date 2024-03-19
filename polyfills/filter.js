//Create a polyfill for filter

const arr = [1,2,3,4,5]

// const res = arr.filter((el) => el>2)

// console.log(res)

Array.prototype.myFilter = function(cb) {
    let result = []

    for (let i=0; i<this.length; i++){
        if(cb(this[i])){
            result.push(this[i])
        }
    }

    return result
}

const res = arr.myFilter((el) => el < 2)
console.log(res)