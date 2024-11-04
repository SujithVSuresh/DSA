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

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}


function removeMiddleElement(){
    const one = new Stack()

    one.push(3)
    one.push(6)
    one.push(1)
    one.push(2)
    one.push(9)

    const middle = Math.floor(one.size() / 2)


    const two = new Stack()
    
    for(let i=0; i<middle; i++){
        two.push(one.pop())
    }

    one.pop()

    while(!two.isEmpty()){
        one.push(two.pop())
    }

    one.print()

}


removeMiddleElement()