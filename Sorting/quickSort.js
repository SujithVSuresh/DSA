function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}


const k = [8, 20, -2, 4, -5]
console.log(quickSort(k))


//Worst case - o(n^2)
//Choosing the Pivot: The pivot is chosen as the smallest or largest element. This can happen, for example, if the pivot selection method always picks the first or last element, and the array is already sorted or sorted in reverse order.
// Partitioning: During the partitioning step, the chosen pivot fails to effectively split the array into two roughly equal parts. Instead, it results in one part having only one element (the pivot itself) and the other part containing the rest of the elements. This means the partitioning process only removes one element (the pivot) from the array.
// Recursive Calls: The recursive calls are made on the two partitions. However, one partition has only one element, so the recursive call on this partition returns immediately. The other partition still contains n−1 elements, where n is the number of elements in the original array.
// Repeating the Process: This process repeats for each of the n−1 elements, each time reducing the problem size by only one element.

//Avg case - o(nlogn)