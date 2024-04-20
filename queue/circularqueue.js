class CircularQueue {
    constructor(size) {
      this.queue = new Array(size);
      this.maxSize = size;
      this.front = 0; // Index of the front element
      this.rear = -1; // Index of the rear element
      this.length = 0; // Current number of elements in the queue
    }
  
    enqueue(item) {
      if (this.isFull()) {
        return "Queue is full";
      }
      this.rear = (this.rear + 1) % this.maxSize;
      this.queue[this.rear] = item;
      this.length++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      const dequeuedItem = this.queue[this.front];
      this.front = (this.front + 1) % this.maxSize;
      this.length--;
      return dequeuedItem;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue[this.front];
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    isFull() {
      return this.length === this.maxSize;
    }
  
    display() {
      let index = this.front;
      let elements = [];
      for (let i = 0; i < this.length; i++) {
        elements.push(this.queue[index]);
        index = (index + 1) % this.maxSize;
      }
      console.log(elements);
    }
  }
  
  // Example usage:
  const queue = new CircularQueue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.dequeue()); // Output: 2
  queue.enqueue(6);
  queue.enqueue(7);
  queue.display(); // Output: [3, 4, 5, 6, 7]
  