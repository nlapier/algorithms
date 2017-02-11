/*
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/

function maximumGap(nums) {
    let sortedNums = nums;
    let maxDiff = 0;
    
    function compareNumbers(a,b) {
        let thisDiff = Math.abs(a - b);
        if (thisDiff > maxDiff){
          maxDiff = thisDiff;
        }
        console.log(thisDiff);
        return a - b;
    }
    
    sortedNums.sort(compareNumbers);
    return maxDiff;
}