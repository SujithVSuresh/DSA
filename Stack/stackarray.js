class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length
    }

    clear(){
        this.items = []
    }
}


const stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(7)
stack.push(2)
stack.push(4)
stack.push(9)

console.log(stack.pop())


console.log(stack.size())