function findSubArr(arr) {
    let sumMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        sumMax = Math.max(sumMax, sum);
      }
    }
    return sumMax;
  }
  console.log(findSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
  /*[-2, 1, -3, 4, -1, 2, 1, -5, 4]/*/
  
  function getSubArrMax(arr) {
    let maxSum = 0;
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      maxSum = Math.max(maxSum, sum);
      if (sum < 0) {
        sum = 0;
      }
    }
    return maxSum;
  }
  console.log(getSubArrMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
  