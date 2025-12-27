// Merge Sort - Divide and conquer algorithm
// Time Complexity: O(n log n) all cases
// Space Complexity: O(n)

// Main merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// Merge two sorted arrays
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Verbose version with logging
function mergeSortVerbose(arr, depth = 0) {
  const indent = "  ".repeat(depth);
  console.log(`${indent}Dividing: [${arr}]`);

  if (arr.length <= 1) {
    console.log(`${indent}Base case: [${arr}]`);
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  console.log(`${indent}Split into: [${left}] and [${right}]`);

  const sortedLeft = mergeSortVerbose(left, depth + 1);
  const sortedRight = mergeSortVerbose(right, depth + 1);

  const merged = mergeVerbose(sortedLeft, sortedRight, indent);
  console.log(`${indent}Merged result: [${merged}]`);

  return merged;
}

function mergeVerbose(left, right, indent = "") {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  console.log(`${indent}Merging [${left}] and [${right}]`);

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// In-place merge sort (more memory efficient)
function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    mergeSortInPlace(arr, left, mid);
    mergeSortInPlace(arr, mid + 1, right);
    mergeInPlace(arr, left, mid, right);
  }
  return arr;
}

function mergeInPlace(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

// Example usage
console.log("=== Basic Merge Sort ===");
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", arr1);
console.log("Sorted:", mergeSort([...arr1]));

console.log("\n=== Verbose Merge Sort ===");
const arr2 = [5, 2, 8, 1];
console.log("Original:", arr2);
mergeSortVerbose([...arr2]);

console.log("\n=== In-Place Merge Sort ===");
const arr3 = [38, 27, 43, 3, 9, 82, 10];
console.log("Original:", arr3);
const sorted = mergeSortInPlace([...arr3]);
console.log("Sorted:", sorted);