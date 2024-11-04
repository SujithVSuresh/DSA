class Node{
    constructor(element){
        this.value = element
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(element){
        const node = new Node(element)
        
        if(this.rear == null){
            this.front = node
            this.rear = node
        }

        this.rear.next = node
        this.rear = node

    }

    dequeue(){
        if(this.front == null){
            return null
        }

        this.front = this.front.next

        if(this.front == null){
            this.rear = null
        }

    }


    getFront(){
        if(this.front == null){
            return null
        }

        return this.front.value
    }

    getRear(){
        if(this.rear == null){
            return null
        }

        return this.rear.value
    }
    
}



const queue = new Queue()

queue.enqueue(9)
queue.enqueue(4)
queue.enqueue(2)
queue.enqueue(6)
queue.enqueue(1)

queue.dequeue()

console.log(queue.getRear())
console.log(queue.getFront())