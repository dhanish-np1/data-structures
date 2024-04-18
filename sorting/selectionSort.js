function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i; // Assume the current element as the minimum
  
      // Find the index of the minimum element in the unsorted part of the array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the current element
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  