function threeSum(n) {
    var B_Number = 0;
    var cnt = 0;
    while (N != 0)
    {
        var rem = N % 2;
        var c = Math.pow(10, cnt);
        B_Number += rem * c;
        N = parseInt(N/2);
 
        // Count used to store exponent value
        cnt++;
    }
    return B_Number;
  
}

module.exports = threeSum;
