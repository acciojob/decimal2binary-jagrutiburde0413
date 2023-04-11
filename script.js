function threeSum(arr, target) {
let num=n;
	let value=0;
	let base=1;
	let temp=num;
	while(temp){
		let last=temp%10;
		temp=Math.floor(temp/10)
		value+=last*base;
		base=base*2
	}
	return value
  
}

module.exports = threeSum;
