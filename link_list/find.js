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

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    findNthElement(n) {
        if (n <= 0 || !this.head) {
            return null; // Invalid input or empty list
        }

        let count = 1; // Initialize count to 1
        let current = this.head;
        while (current) {
            if (count === n) {
                return current.data; // Found the nth element
            }
            current = current.next;
            count++;
        }

        return null; // If n exceeds the length of the list
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

console.log("3rd element:", list.findNthElement(3)); // Output: 3
console.log("1st element:", list.findNthElement(1)); // Output: 1
console.log("6th element:", list.findNthElement(6)); // Output: null (as there are only 5 elements)
