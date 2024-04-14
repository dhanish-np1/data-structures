class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head; // Adjust the next pointer of the new node
        this.head = newNode; // Update the head to point to the new node
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.addAtBeginning(1);
list.addAtBeginning(2);
list.addAtBeginning(3);

console.log("Linked list after adding nodes at the beginning:");
list.display(); // Output: 3 2 1
