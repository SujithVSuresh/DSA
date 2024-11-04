class Graph{
    constructor(){
        this.adjecencyList = {}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjecencyList[vertex]
    }

    hasEdge(vertex1, vertex2){
        return ( 
            this.adjecencyList[vertex1].has(vertex2) &&
            this.adjecencyList[vertex2].has(vertex1)
        )
    }

    bfs(start){
        const queue = [start]
        const visited = new Set();
        visited.add(start)
        
        while(queue.length){
            const vertex = queue.shift()
            console.log(vertex)

            for(let neighbor of this.adjecencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }

    }

    dfs(start, visited = new Set()){
        visited.add(start)
        console.log(start)

        for(let neighbor of this.adjecencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor, visited)
            }
        }
    }


    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + " -> " + [...this.adjecencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")

// graph.display()

graph.bfs("C")

graph.dfs("A")







