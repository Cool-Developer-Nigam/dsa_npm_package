// Quick Sort - Divide and conquer algorithm using pivot
// Time Complexity: O(n log n) average, O(n²) worst
// Space Complexity: O(log n) due to recursion

// Method 1: Using extra space (easier to understand)
function quickSortSimple(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSortSimple(left), ...middle, ...quickSortSimple(right)];
}

// Method 2: In-place quick sort (more efficient)
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Method 3: With verbose logging
function quickSortVerbose(arr, low = 0, high = arr.length - 1, depth = 0) {
  const indent = "  ".repeat(depth);
  
  if (low < high) {
    console.log(`${indent}Sorting [${arr.slice(low, high + 1)}]`);
    
    const pivotIndex = partition(arr, low, high);
    console.log(`${indent}Pivot: ${arr[pivotIndex]} at index ${pivotIndex}`);
    console.log(`${indent}After partition: [${arr.slice(low, high + 1)}]`);
    
    quickSortVerbose(arr, low, pivotIndex - 1, depth + 1);
    quickSortVerbose(arr, pivotIndex + 1, high, depth + 1);
  }
  
  return arr;
}

// Example usage
console.log("=== Simple Quick Sort ===");
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", arr1);
console.log("Sorted:", quickSortSimple([...arr1]));

console.log("\n=== In-Place Quick Sort ===");
const arr2 = [10, 7, 8, 9, 1, 5];
console.log("Original:", arr2);
const sorted = quickSort([...arr2]);
console.log("Sorted:", sorted);

console.log("\n=== Verbose Quick Sort ===");
const arr3 = [5, 2, 8, 1, 9, 3];
console.log("Original:", arr3);
quickSortVerbose([...arr3]);
console.log("Final:", arr3);