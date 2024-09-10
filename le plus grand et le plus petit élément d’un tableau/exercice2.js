function findMinMax(arr) {
    let min = max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      min = arr[i] < min ? arr[i] : min;
      max = arr[i] > max ? arr[i] : max;
    }
  
    return { min, max };
  }
  

  console.log(findMinMax([3, 1, 8, 5, -2, 9])); 
  