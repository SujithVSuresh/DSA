

class Node{
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
    }
}


class SeperateChainingLinkedList{
    constructor(size){
          this.table = new Array(size).fill(null);
    }
    
    hash(key){
        let totalValue = 0
        for(let i=0; i<key.length; i++){
            totalValue += key.charCodeAt(i)
        }
        return totalValue % this.table.length
    }
    
    insert(key, value){
        let index = this.hash(key)
        let node = new Node(key, value)
        
        if(!this.table[index]){
            this.table[index] = node
        }else{
            let current = this.table[index]
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        
    }
    
    
    find(key){
        let index = this.hash(key)
        let current = this.table[index]
        while(current){
            if(current.key == key){
                return current.value
            }
            current = current.next
        }
        return undefined
    }
}


const chaining = new SeperateChainingLinkedList(50)

chaining.insert("name", "Sujith")
chaining.insert("age", 300)
chaining.insert("ega", 500)



console.log(chaining.find("ega"))