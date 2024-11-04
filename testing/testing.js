


function result(value){
  if(value.length <= 1){
    return "It is a palindrome"
  }

  if(value[0] == value[value.length-1]){
    return result(value.slice(1, value.length - 1))
  }

  return "Not a palindrom"
}


console.log(result("malayalam"))