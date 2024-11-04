

function bubbleSort(arr){
    let swapped
    do{
        swapped = false
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
    }while(swapped)
}

let k = [1, 7, 3, -7, 9, 2]
bubbleSort(k)
console.log(k)

//To know if array is sorted or not we have to go throught the elements atleast once. So that is the reason why we use do while loop.
