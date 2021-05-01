// 큐 FIFO

const queue = [];
queue.push(1);
queue.push(2);

console.log(queue);

const r = queue.shift(); 
// shift () : Removes the first element from an array and returns it.
console.log(r);

console.log(queue);

// 스택 LIFO
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);

var s = stack.pop();
// stack.pop() : Removes the last element from an array and returns it.
console.log(s);

console.log(stack);
