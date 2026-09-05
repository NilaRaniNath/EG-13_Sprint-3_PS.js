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

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;
    
//     const count = {};
//     for (let char of s) {
//         count[char] = (count[char] || 0) + 1;
//     }
    
//     for (let char of t) {
//         if (!count[char]) return false;
//         count[char]--;
//     }
    
//     return true;
// };
// console.log("Valid Anagram:", isAnagram("anagram", "nagaram"));





// 04. Ransom Note

// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
// var canConstruct = function(ransomNote, magazine) {
//     const count = {};
//     for (let char of magazine) {
//         count[char] = (count[char] || 0) + 1;
//     }
    
//     for (let char of ransomNote) {
//         if (!count[char] || count[char] === 0) {
//             return false;
//         }
//         count[char]--;
//     }
    
//     return true;
// };
// console.log(" Ransom Note:", canConstruct("aa", "aab"));




// 05. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;
    
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
};

// console.log("Majority Element:", majorityElement([2, 2, 1, 1, 1, 2, 2]));




// 10. Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

let nums10 = [2, 0, 2, 1, 1, 0];
sortColors(nums10);
console.log("Sort Colors:", nums10);