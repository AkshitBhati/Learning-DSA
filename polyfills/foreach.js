//Create a polyfill for forEach

const arr = [1,2,3,4,5]

// arr.forEach((el) => console.log(el * 2))

Array.prototype.myForeach = function(cb) {
    for (let i=0; i<this.length; i++){
        cb(this[i])
    }
}

arr.myForeach((el) => console.log(el))

//it does not return anyhting this makes it diff from map