


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

class StackUsingQueues {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(element) {
        // Enqueue the new element into queue2
        this.queue2.enqueue(element);

        // Move all elements from queue1 to queue2
        while (!this.queue1.isEmpty()) {
            this.queue2.enqueue(this.queue1.dequeue());
        }

        // Swap the queues (rename them)
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop() {
        // Dequeue from queue1
        if (this.queue1.isEmpty()) {
            return null;
        }
        return this.queue1.dequeue();
    }

    peek() {
        // Return the front element of queue1
        if (this.queue1.isEmpty()) {
            return null;
        }
        return this.queue1.front();
    }

    isEmpty() {
        return this.queue1.isEmpty();
    }

    size() {
        return this.queue1.size();
    }

    print() {
        console.log(this.queue1.items.toString());
    }
}

// Example usage:
const stack = new StackUsingQueues();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: 30,20,10

console.log(stack.pop()); // Output: 30
stack.print(); // Output: 20,10

console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
