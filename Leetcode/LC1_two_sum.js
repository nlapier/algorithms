/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function twoSum(nums, target) {
  let output = [];
  let numsHash = {};
  for(i = 0; i < nums.length; i++){
    numsHash[nums[i]] = i;
    let compliment = target - nums[i];
    if (numsHash.hasOwnProperty(compliment) && compliment != nums[i]){
      output = [numsHash[compliment], i];
      return output;
    }
  }
}
