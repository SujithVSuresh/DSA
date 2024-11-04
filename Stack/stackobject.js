class Stack{
    constructor(){
        this.items = {};
        this.count = 0;
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.count - 1]
    }

    isEmpty(){
        return this.count == 0
    }

    size(){
        return this.count
    }

    clear(){
        this.items = {}
        this.count = 0
    }
}


const stack = new Stack()
stack.push(2)
stack.push(24)
stack.push(6)
stack.push(8)
console.log(stack.size())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())
