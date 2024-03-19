//Create a polyfill for map

const arr = [1,2,3,4,5]

// arr.map((el) => console.log(el))

Array.prototype.myMap = function (cb){
    let result = []
    for (let i=0; i<this.length; i++){
        result.push(cb(this[i])) 
    }
    return result
}

const res = arr.myMap((el) => console.log(el * 2))

//map alwaus returns a new array