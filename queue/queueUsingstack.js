class QueueUsingStack {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(item) {
      // Push the item onto stack1
      this.stack1.push(item);
    }
  
    dequeue() {
      // If stack2 is empty, transfer all elements from stack1 to stack2
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      // Pop the top element from stack2 (which corresponds to the front of the queue)
      // If both stacks are empty, return "Queue is empty"
      return this.stack2.pop() || "Queue is empty";
    }
  }
  
  // Example usage:
  const queue = new QueueUsingStack();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.dequeue()); // Output: 2
  