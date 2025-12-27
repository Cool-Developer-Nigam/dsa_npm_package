// Bubble Sort - Compares adjacent elements and swaps them if in wrong order
// Time Complexity: O(n²) worst/average, O(n) best
// Space Complexity: O(1)

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps were made, array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Optimized version with step-by-step logging
function bubbleSortVerbose(arr) {
  const n = arr.length;
  console.log("Starting array:", arr);

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    console.log(`\nPass ${i + 1}:`);

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        console.log(`  Swapped ${arr[j + 1]} and ${arr[j]}: [${arr}]`);
      }
    }

    if (!swapped) {
      console.log("  No swaps made - array is sorted!");
      break;
    }
  }

  console.log("\nFinal sorted array:", arr);
  return arr;
}

// Example usage
console.log("=== Basic Bubble Sort ===");
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", arr1);
console.log("Sorted:", bubbleSort([...arr1]));

console.log("\n=== Verbose Bubble Sort ===");
const arr2 = [5, 2, 8, 1, 9];
bubbleSortVerbose([...arr2]);

console.log("\n=== Already Sorted Array ===");
const arr3 = [1, 2, 3, 4, 5];
bubbleSortVerbose([...arr3]);