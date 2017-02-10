/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

function findMedianSortedArrays(nums1, nums2) {
    let sorted = nums1.concat(nums2);
    sorted.sort((a,b) => a-b);
    let highIndex = Math.floor(sorted.length/2);
    let median;
    
    if (sorted.length%2 === 0){
      let lowIndex = highIndex - 1;
      console.log(highIndex, lowIndex)
      median = (sorted[lowIndex] + sorted[highIndex])/2;
    } else {
      median = sorted[highIndex];
    }
    
    return median;
}