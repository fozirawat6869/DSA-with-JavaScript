// sum of Array


function sumArray(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  return sum;
}


console.log(sumArray([1, 2, 3, 4])); // 10