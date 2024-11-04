class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        //root will points to the root of the sub tree in each recursive call
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right == null){
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value == value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }

        }
    }

    //DFS
    //traversal
    preOrder(root){  
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value)
        }
    }

    //BFS
    levelOrder(){
        // Use the optimized queue implementation
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }


    // Find second largest
    findSecondLargest(root){
        if(!root || (!root.left && !root.right)){
            return null
        }

        let current = root
        let parent = null

        if(current.left && !current.right){
            return findLargest(current.left)
        }

        while(current.right){
            parent = current
            current = current.right
        }

        if(current.left){
            return findLargest(current.left)
        }

        return parent ? parent.value : null
    }

    findLargest(node){
        while(node.right){
            node = node.right
        }
        return node.value
    }

    // Find the closest value
    findClosestValue(root, target) {
        let closest = root.value;
        let currentNode = root;
      
        while (currentNode !== null) {
          if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
            closest = currentNode.value;
          }
      
          if (target < currentNode.value) {
            currentNode = currentNode.left;
          } else if (target > currentNode.value) {
            currentNode = currentNode.right;
          } else {
            break;
          }
        }
        return closest;
    }

      

    // is valid binary search tree
      isValidBST(root, min = null, max = null) {
        if (!root) {
          return true;
        }
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
          return false;
        }
        return (
          this.isValidBST(root.left, min, root.value) &&
          this.isValidBST(root.right, root.value, max)
        );
      }
      
      
      findHeight(node) {
        if (node === null) {
          return 0;
        } else {
          const leftHeight = findHeight(node.left);
          const rightHeight = findHeight(node.right);
          return Math.max(leftHeight, rightHeight) + 1;
        }
      }
    

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}


const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

bst.postOrder(bst.root)

// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 5))
// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 30))

// bst.levelOrder()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

console.log(bst.findSecondLargest(bst.root))



var longestCommonPrefix = function(strs) {
    for(let i=0; i<strs[0].length; i++){
        for(let j=0; j<strs.length; j++){
            if(strs[0][i] != strs[0][j]){
                return strs.slice(0, i)
            }
        }

    }
    
};



