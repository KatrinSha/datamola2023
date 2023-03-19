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
// console.log(getSubArrMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function getMaxProfit(pricesArray) {
//   if (pricesArray.length < 2) {
//     console.log('Not enough values');
//     return false;
//   }
//   let minPrice = pricesArray[0];
//   let maxProfit = pricesArray[1] - pricesArray[0];
//   for (let i = 1; i < pricesArray.length; i++) {
//     let profit = pricesArray[i] - minPrice;
//     maxProfit = Math.max(maxProfit, profit)
//     minPrice = Max.min(minPrice, pricesArray[i])
//   }
//   return maxProfit;
// }

// console.log(getMaxProfit([7, 1, 5, 3, 6, 4])); - 5????
