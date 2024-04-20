class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(data) {
      const newNode = new Node(data);
      if (this.front === null) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
    
    dequeue(){
      if(this.front===null){
        console.log("empty")
        return null
      }
      const deData=this.front;
      this.front=this.front.next;
      if(this.front===null){
        this.rear=null
      }
      return deData
      
    }
  
    display() {
      let current = this.front;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  myQueue.display(); // Output: 1, 2, 3
  
  myQueue.dequeue()
  myQueue.display(); // Output: 1, 2, 3