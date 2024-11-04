class Node{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        //take a pointer as currentNode and assign root node to it.
        let currentNode = this.root
        //loops through each of the word and add those character of the trie if it doesnt exist
        for(let char of word){
            if(!currentNode.children[char]){
                currentNode.children[char] = new Node()
            }
            currentNode = currentNode.children[char]
        }
        //If all insertion finished, then mart the last node isEndOfWord to true
        currentNode.isEndOfWord = true
    }

    search(word){
        let currentNode = this.root

        for(let char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode = currentNode.children[char]
        }

        return currentNode.isEndOfWord
    }

    // Method to search for a node corresponding to a given prefix
    searchPrefix(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return null
            }
            node = node.children[char]
        }
        return node
    }

    // Method to find all words with a given prefix
    autocomplete(prefix){
        const node = this.searchPrefix(prefix)
        const results = []
        if(node){
            this.dfs(node, prefix, results)
        }
        return results
    }

    // Helper method to perform DFS and collect words
    dfs(node, prefix, results){
        if(node.isEndOfWord){
            results.push(prefix)
        }
        for(let char in node.children){
            this.dfs(node.children[char], prefix+char, results)
        }
    }
}

const trie = new Trie()
trie.insert("sujith")
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("bat");
trie.insert("ball");
trie.insert("batman");


const suggestions = trie.autocomplete("app");
console.log(suggestions); 











