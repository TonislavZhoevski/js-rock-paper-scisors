function countPositive(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result++;
        }
    }

    return result;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));