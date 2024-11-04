class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.count = 0
    }

    push(element){
        const newNode = new Node(element);
        newNode.next = this.top
        this.top = newNode
        this.count++;
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.top.value
        this.top = this.top.next;
        this.count--;
        return value;
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.top.value;
    }

    isEmpty(){
        return this.top == null
    }

    size(){
        return this.count
    }

    clear(){
        this.top = null;
        this.count = 0;
    }
}


const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(5)
stack.push(6)
stack.push(3)
stack.push(9)

stack.pop()
console.log(stack.size())
