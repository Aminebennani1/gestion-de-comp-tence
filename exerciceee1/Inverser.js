
function invers(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      // Swap elements
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  // Example usage
  let array = [1, 2, 3, 4, 5];
  invers(array);
  console.log(array); // Output: [5, 4, 3, 2, 1]