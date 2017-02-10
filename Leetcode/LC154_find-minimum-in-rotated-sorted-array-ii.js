/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.
*/

var findMin = function(nums) {
    let firstEl = nums[0];
    const stop = nums.length;
    for (let i = 1; i < stop; i++){
        if(nums[i] < firstEl){
            return nums[i];
        }
    }
    return firstEl;
};