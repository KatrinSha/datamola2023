/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
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
