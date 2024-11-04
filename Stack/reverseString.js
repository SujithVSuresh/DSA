class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function reverseString(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedStr = "";

  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

console.log(reverseString("Suijth"));
