function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Already sorted
    }
  
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves without using concat
    const mid = [];   
    let j = 0;
     let i=0
    while (i < sortedLeft.length && j < sortedRight.length) {
      if (sortedLeft[i] < sortedRight[j]) {
        mid.push(sortedLeft[i]);
        i++;
      } else {
        mid.push(sortedRight[j]);
        j++;
      }
    }
  
    // Add remaining elements from left and right (if any)
    while (i < sortedLeft.length) {
      mid.push(sortedLeft[i]);
      i++;
    }
  
    while (j < sortedRight.length) {
      mid.push(sortedRight[j]);
      j++;
    }
  
    return mid;
  }
  
  // Ex;ample usage:
  const unsortedArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = mergeSort(unsortedArray);
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray)