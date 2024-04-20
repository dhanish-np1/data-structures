class StackUsingQueue {
  constructor() {
    this.queue = [];
  }

  push(item) {
    // Add the new item to the end of the queue
    this.queue.push(item);
    // Rotate the queue so that the new item becomes the front
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    // If the queue is empty, return "Stack is empty"
    if (this.queue.length === 0) {
      return "Stack is empty";
    }
    // Otherwise, dequeue and return the front item (which is the top of the stack)
    return this.queue.shift();
  }
}

// Example usage:
const stack = new StackUsingQueue();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2
