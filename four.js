function getLastElements(arr, n = 2) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return [];
    }
  
    // If n is greater than array length, return the whole array
    if (n >= arr.length) {
      return arr.slice();
    }
  
    // Return the last 'n' elements
    return arr.slice(-n);
  }
  console.log(getLastElements([7,9,0]))
  