//1 Approach Brute force

function findPeakElement(nums){
	if(nums.length===1) return 0;
  for(let i=0;i<nums.length;i++){
  	//edge case for first elemnt
  	if(i===0 && nums[0] > nums[1]) {
    	return 0;
      // edge case for last element
    }if(i===nums.length-1 && nums[i]>nums[i-1]) {
    	return nums.length-1;
    }if(nums[i] > nums[i+1] && nums[i]> nums[i-1]) {
    	return i;
    }
  }
}

let array = [5, 10, 20, 15];

let peakIndex = findPeakElement(array);

console.log(peakIndex, array[peakIndex]);
