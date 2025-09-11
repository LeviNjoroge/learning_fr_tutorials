const nums =[];
for(i=0;i<10;i++){
    nums[i] = i+1;
}
console.log(nums)
const doubleNums = nums.map(num=>num*2);
newNums = [...nums, ...doubleNums];

numsAndLetters = [...nums, "a", "b", "c", "d", "e"]

numsTo20 = [...nums, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(numsAndLetters)