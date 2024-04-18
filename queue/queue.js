class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue operation: Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue operation: Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow"; // If queue is empty
      }
      return this.items.shift();
    }
  
    // Peek operation: Return the front element of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty"; // If queue is empty
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Display the contents of the queue
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        console.log("Queue:");
        for (let item of this.items) {
          console.log(item);
        }
      }
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Queue size:", queue.size()); // Output: 3
  console.log("Front element:", queue.peek()); // Output: 1
  
  queue.dequeue();
  console.log("Queue size after dequeue:", queue.size()); // Output: 2
  console.log("Front element after dequeue:", queue.peek()); // Output: 2
  
  queue.display(); // Output: 2, 3
  