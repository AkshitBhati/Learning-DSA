// Basic Queue Implementation

class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow, cannot perform dequeue";
      }
  
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    front() {
      if (this.isEmpty()) {
        return "No Elements in the Queue";
      }
  
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    printQueue() {
      let queueString = "";
      for (let i = 0; i < this.size(); i++) {
        queueString += this.queue[i] + ", ";
      }
  
      console.log("Queue: " + queueString);
    }
  }
  
  const myQueue = new Queue();
  
  myQueue.enqueue(5);
  myQueue.enqueue(96);
  myQueue.enqueue(78);
  
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
//   console.log(myQueue.dequeue());
//   console.log(myQueue.front());

// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular queue. The circular queue is a
// linear data structure in which the operations are performed based on First In First Out
// principle, and the last position is connected back to the first position to make a circle.

var MyCircularQueue = function (k) {
    this.queue = []
    this.size = k
}

MyCircularQueue.prototype.enQueue = function(el) {
    if(this.size === this.queue.length){
        return false 
    }
    this.queue.push(el)
    return true
}

MyCircularQueue.prototype.deQueue = function(){
    if(this.queue.length === 0) return -1

    return this.queue.shift()
}

MyCircularQueue.prototype.Front = function(){
    if(this.queue.length === 0) return false

    return this.queue[0]
}

MyCircularQueue.prototype.Rear = function(){
    if (this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1]
}

MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0
}

MyCircularQueue.prototype.isFull = function(){
    return this.size === this.queue.length
}
// [2,5,72]
var obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(4);
obj.enQueue(2);
obj.deQueue();
obj.enQueue(5);
obj.deQueue();
obj.enQueue(72);

// console.log(obj.Front(), obj.Rear());

// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

var MyStack = function(){
    this.q1 = []
    this.q2 = []
}

MyStack.prototype.push = function (value){
    while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
      }

    this.q1.push(value)

    while(this.q2.length !== 0){
        this.q1.push(this.q2.shift())
    }
}

MyStack.prototype.pop = function(){
    return this.q1.shift
}

MyStack.prototype.top = function(){
    return this.q1[0]
}

MyStack.prototype.isEmpty = function(){
    return this.q1.length === 0
}

var stack = new MyStack();
stack.push(3);
stack.push(5);
stack.push(96);
stack.push(24);
stack.pop();
// console.log(stack.top());

// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

var MyQueue = function(){
    this.stack1 = []
    this.stack2 = []
}

MyQueue.prototype.enqueue = function(x){
    return this.stack1.push(x)
}
//[1]
//[4,3,2]
MyQueue.prototype.dequeue = function(){
    if(this.stack2.length === 0){
        while(this.stack1.length >0){
            this.stack2.push(this.stack1.pop())
        }
    }
    
    return this.stack2.pop()

    
}

MyQueue.prototype.front = function(){
    if(this.stack2.length === 0){
        while(this.stack1.length >0){
            this.stack2.push(this.stack1.pop())
        }
    }
    
    return this.stack2[this.stack2.length - 1]

}

MyQueue.prototype.empty = function(){
    return this.stack.length === 0
}

const queue = new MyQueue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
console.log(queue.front());