const nums =[];
for(i=0;i<10;i++){
    nums[i] = i+1;
}
// console.log(nums)
const doubleNums = nums.map(num=>num*2);
newNums = [...nums, ...doubleNums];

numsAndLetters = [...nums, "a", "b", "c", "d", "e"]

numsTo20 = [...nums, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//Check the result object in the console:
console.log(myUpdatedVehicle);
