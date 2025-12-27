// Simple Queue using Array
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the back of queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return front element
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // View front element without removing
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get queue size
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }

  // Print queue
  print() {
    console.log(this.items.join(' <- '));
  }
}

// Optimized Queue using Object (better performance for large queues)
class OptimizedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear === this.front;
  }

  size() {
    return this.rear - this.front;
  }

  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  print() {
    const elements = [];
    for (let i = this.front; i < this.rear; i++) {
      elements.push(this.items[i]);
    }
    console.log(elements.join(' <- '));
  }
}

// Example usage - Simple Queue
console.log("=== Simple Queue ===");
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // 10 <- 20 <- 30
console.log("Dequeue:", queue.dequeue()); // 10
console.log("Front:", queue.front()); // 20
console.log("Size:", queue.size()); // 2

// Example usage - Optimized Queue
console.log("\n=== Optimized Queue ===");
const optQueue = new OptimizedQueue();
optQueue.enqueue('A');
optQueue.enqueue('B');
optQueue.enqueue('C');
optQueue.print(); // A <- B <- C
console.log("Dequeue:", optQueue.dequeue()); // A
console.log("Peek:", optQueue.peek()); // B
console.log("Size:", optQueue.size()); // 2


// Priority Queue (uses MinHeap internally)
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Enqueue with priority (lower number = higher priority)
  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // Dequeue (remove highest priority element)
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop().value;

    const min = this.heap[0].value;
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(index) {
    let currentIndex = index;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (rightChildIndex < this.heap.length && 
          this.heap[rightChildIndex].priority < this.heap[smallerChildIndex].priority) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex].priority > this.heap[smallerChildIndex].priority) {
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  // Peek at highest priority element
  peek() {
    return this.heap.length > 0 ? this.heap[0].value : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  print() {
    console.log(this.heap.map(node => `${node.value}(${node.priority})`).join(', '));
  }
}

// Example usage
const pq = new PriorityQueue();

pq.enqueue('Low priority task', 5);
pq.enqueue('High priority task', 1);
pq.enqueue('Medium priority task', 3);
pq.enqueue('Urgent task', 0);

console.log("Priority Queue:");
pq.print();

console.log("\nDequeuing in priority order:");
console.log(pq.dequeue()); // Urgent task (priority 0)
console.log(pq.dequeue()); // High priority task (priority 1)
console.log(pq.dequeue()); // Medium priority task (priority 3)
console.log(pq.dequeue()); // Low priority task (priority 5)