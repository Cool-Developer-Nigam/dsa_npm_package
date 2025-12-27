class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get left child index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get right child index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap two elements
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Insert element into heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Move element up to maintain heap property
  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // Remove and return minimum element
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  // Move element down to maintain heap property
  heapifyDown(index) {
    let currentIndex = index;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (rightChildIndex < this.heap.length && 
          this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] > this.heap[smallerChildIndex]) {
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  // Peek at minimum element
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Get heap size
  size() {
    return this.heap.length;
  }

  // Check if heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

// Example usage
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(9);

console.log("Min Heap:", minHeap.heap); // [1, 3, 8, 5, 9]
console.log("Extract Min:", minHeap.extractMin()); // 1
console.log("Peek:", minHeap.peek()); // 3
console.log("Size:", minHeap.size()); // 4

class MaxHeap {
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

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(index) {
    let currentIndex = index;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (rightChildIndex < this.heap.length && 
          this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] < this.heap[largerChildIndex]) {
        this.swap(currentIndex, largerChildIndex);
        currentIndex = largerChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(1);
maxHeap.insert(9);

console.log("Max Heap:", maxHeap.heap); // [9, 8, 5, 1, 3]
console.log("Extract Max:", maxHeap.extractMax()); // 9
console.log("Peek:", maxHeap.peek()); // 8
console.log("Size:", maxHeap.size()); // 4