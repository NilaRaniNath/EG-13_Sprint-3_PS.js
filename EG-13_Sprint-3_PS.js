// 01. Contains Duplicate
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     const seen = new Set();
//     for (const num of nums) {
//         if (seen.has(num)) {
//             return true;
//         }
//         seen.add(num);
//     }
//     return false;
// };
// console.log("Contains Duplicate:", containsDuplicate([1, 2, 3, 1]));




// 02. Move Zeroes
// /**
//  * @param {number[]} nums
//  * @return {void} 
//  */
// var moveZeroes = function(nums) {
//     let lastNonZeroFoundAt = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             let temp = nums[lastNonZeroFoundAt];
//             nums[lastNonZeroFoundAt] = nums[i];
//             nums[i] = temp;
//             lastNonZeroFoundAt++;
//         }
//     }
// };
// let nums2 = [0, 1, 0, 3, 12];
// moveZeroes(nums2);
// console.log("Move Zeroes:", nums2);




// 03. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    
    return true;
};
console.log("Valid Anagram:", isAnagram("anagram", "nagaram"));