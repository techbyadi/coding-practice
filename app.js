//Sum all elements in an Array


const nums = [1, 2, 3, 5, 10]
let sum = 0

for(let i=0; i<nums.length; i++){
  sum += nums[i]
}
//console.log(nums.length);
//console.log(sum)

//Find the Maximum Element in an Array

let max = nums[0]

for(let i=1; i< nums.length; i++){
  if(nums[i]>max)
    max = nums[i]
}

//console.log(max);

//Reverse an array

let left = 0, right = nums.length-1

while(left<right){
  let temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp

  left++
  right--
}

//console.log(nums);


// count the number of repeated letters in a String

let country = 'india'
let charCount = {}

for(let char of country){
  if(charCount[char])
    charCount[char]++
  else
    charCount[char] = 1
}

console.log(charCount);
