function twosum(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}
console.log(twosum([2,7,11,15], 9))
console.log(twosum([14,2,4,3], 18))
console.log(twosum([13,8,12,13,14], 22))
console.log(twosum([22,13,8,21,11,22,29,44,29], 50))
