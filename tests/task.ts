function isPalindrome(num: number): boolean {
    const numString = String(num);
    const reverseString = numString.split('').reverse().join('');
    return numString === reverseString;
}

console.log(isPalindrome(0)); // => true
console.log(isPalindrome(121)); // => true
console.log(isPalindrome(123)); // => false


function twoSum(nums: number[], target: number): number[]{
    if (!nums.length) {
        throw new Error('Nums is empty');
    }

    for (let first = 0; first < nums.length; first++) {
        for (let second = 1; second < nums.length; second++) {
            if ( first === second) {
                continue
            } else if (nums[first] + nums[second] === target) {
                return [first, second]
            }
        }
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9)); // => [0,1]
console.log(twoSum([3,2,4], 6)); // => [1,2]
console.log(twoSum([3,2,4], 9)); // => []
console.log(twoSum([], 4)); // => Error('nums is empty')