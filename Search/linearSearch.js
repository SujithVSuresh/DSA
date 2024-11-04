let arr = [-5, 2, 10, 4, 6]



function result(val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == val){
            return i
        }
    }
    return -1
}


console.log(result(4))
