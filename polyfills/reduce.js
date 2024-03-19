//Create a polyfill for reduce

const arr = [1,2,3,4,5]

const res = arr.reduce((acc, curr) => acc + curr)

// console.log(res)

Array.prototype.myReduce = function(cb, initalValue){
    let acc = initalValue
    for(let i=0; i<this.length; i++){
        acc = acc ? cb(acc, this[i]) : this[i]
    }
    return acc
}

const result = arr.myReduce((acc, curr) => acc + curr) 
console.log(result)