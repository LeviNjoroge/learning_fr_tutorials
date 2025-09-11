const nums =[];
for(i=0;i<10;i++){
    nums[i] = i+1;
}
console.log(nums)
const doubleNums = nums.map(num=>num*2);
newNums = [...nums, ...doubleNums];

console.log(newNums)