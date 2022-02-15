//remove-duplicates-from-sorted-array - 26

var removeDuplicates = function(nums) {
    if (!nums.length) {
        return 0;
    }

    let pointer1 = 0;
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if (nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }

    return pointer1 + 1;
};

// output 

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.


//two-sum

var twoSum = function(nums, target) {
    const previousValue = {}
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i]
        const neededValue = target - currentValue
        if (previousValue[neededValue] != null) {
            return [previousValue[neededValue], i]
        } else {
            previousValue[currentValue] = i
        }
    }

    return []
};

//output

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



// Valid Palindrome

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
    let pointerOne = 0;
    let pointerTwo = s.length - 1;

    while (pointerOne < pointerTwo) {
        while (!isValidCharacter(s.charAt(pointerOne))) {
            pointerOne++;
        }

        while (!isValidCharacter(s.charAt(pointerTwo))) {
            pointerTwo--;
        }

        if (s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()) {
            return false;
        }

        pointerOne++;
        pointerTwo--;
    }

    return true;
};

let isValidCharacter = function(char) {
    let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return validChars.indexOf(char.toLowerCase()) > -1
}

// Roman to Integer 

var romanToInt = function(s) {
    const map = { I: 1, V: 5, x: 10, L: 50, C: 100, D: 500, M: 1000 };
    let res = 0;
    s.split('').forEach((num, i) => {
        if (map[num] < map[s[i + 1]]) res -= map[num];
        else res += map[num]
    });

    return res
};

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// longest-common-prefix

var longestCommonPrefix = function(strs) {
    let prefix = ''
    if (strs.length === 0) return prefix
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== character) return prefix
        }
        prefix = prefix + character
    }
    return prefix
}

// Search Insert Position
var searchInsert = function(nums, target) {
        let left = 0,
            right = nums.length - 1;
        if (target < nums[left]) return 0;
        if (target > nums[right]) return nums.length;
        while (left <= right) {
            let mid = (left + right) >> 1;
            if (target === nums[mid]) return mid;
            else if (target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }
        return left
    }
    //  Input: nums = [1,3,5,6], target = 5
    // Output: 2
    // Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


// Maximum Subarray

function maxSubArray(nums) {
    let solution = nums[0]
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
        solution = Math.max(solution, num[i])
    }
    return solution
}

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23


lenghOfLastWord

var lenghOfLastWord = function(s) {
    if (s.length == 0) return 0;
    let array = s.trim().split(' ');
    return array[array.length - 1].length;
}


// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.




// Valid Parentheses

var isValid = function(s) {
    let bracket = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let heap = [];

    for (let char of s) {
        if (bracket[char]) {
            heap.push(bracket[char])
        } else {
            if (heap.pop() !== char) return false
        }
    }
    return (!heap.length)
}



// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false



// Single Number

var singleNumber = function(nums) {
    const ht = {};

    for (const num of nums) {
        ht[num] = ht[num] + 1 || 1;
    }

    for (const key in ht) {
        if (ht[key] == 1) {
            return key
        }
    }
}

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Plus one
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1
            return digits
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
}

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Climbing Stairs
var climbStairs = function(n) {
    const memo = [1, 1, 2]
    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
}



//  Example 1:

//  Input: n = 2
//  Output: 2
//  Explanation: There are two ways to climb to the top.
//  1. 1 step + 1 step
//  2. 2 steps
//  Example 2:

//  Input: n = 3
//  Output: 3
//  Explanation: There are three ways to climb to the top.
//  1. 1 step + 1 step + 1 step
//  2. 1 step + 2 steps
//  3. 2 steps + 1 step



// Implement strStr()

var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0
    for (let i = 0; i < haystack.length; i++) {
        let k = i;
        j = 0;
        while (haystack[k] == needle[j] & j < needle.length) {
            k++;
            j++
        }
        if (needle.length == j) return i
    }
    return -1
}


// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

// Happy Number

var isHappy = function(n) {
    let seen = new Set()

    while (!seen.has(n)) {
        seen.add(n)
        sqSum = 0
        while (n > 0) {
            sqSum += (n % 10) * (n % 10)
            n = Math.floor(n / 10)
        }
        if (sqSum == 1) {
            return true
        }
        n = sqSum;
    }
    return false
}

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false


// Intersection of Two Arrays

var intersection = function(num1, num2) {
    let firstSet = new Set();

    for (let num of num1) {
        firstSet.add(num);
    };

    let intersectionSet = new Set()

    for (let num of num2) {
        if (firstSet.has(num)) {
            intersectionSet.add(num)
        }
    }

    return Array.from(intersectionSet)
}

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


//  Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let maxProf = 0;
    let minVal = Infinity;
    for (let i = 0; i < prices.length; i++) {
        minVal = Math.min(minVal, prices[i]);
        maxProf = Math.max(maxProf, prices[i] - minVal);
    }
    return maxProf;
}

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


//majorityElement

var majorityElement = function(nums) {
    let obj = {}
    let count = 0
    let max = 0

    for (let i of nums) {
        if (!obj[i]) {
            obj[i] = 1
        } else {
            obj[i]++
        }
    }

    for (let j in obj) {
        if (obj[j] > count) {
            console.log(obj[j])
            count = obj[j]
            max = j
        }
    }
    return max
};

// 205 -  Isomorphic Strings

var isIsomorphic = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    let sArr = new Array(128).fill(0);
    let tArr = new Array(128).fill(0)

    for (let i = 0; i < s.length; i++) {
        let sIdx = s.charCodeAt(i);
        let tIdx = t.charCodeAt(i);
        if (sArr[sIdx] != tArr[tIdx]) {
            return false
        }

        sArr[sIdx] = i + 1
        tArr[tIdx] = i + 1
    }
    return true
}

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// 21.Merge Two Sorted Lists

var mergeTwoLists = function(l1, l2) {
    let curr = new ListNode();
    const dummy = curr;
    while (l1 & l2) {
        if (l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next;
        } else {
            curr.next = l2
            l2 = l2.next;
        }
        curr = curr.next
    }
    if (l1) {
        curr.next = l1
    }
    if (l2) {
        curr.next = l2
    }
    return dummy.next;
}

// 98.Validate Binary Search Tree

var isValidBST = function(root) {
    return dfs(root, -Infinity, Infinity)
}

function dfs(node, min, max) {
    if (!node) {
        return true
    }
    if (node.val <= min || node.val >= max) {
        return false;
    }
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
}

// 151. Reverse Words in a String

const reverseWords = s => s.trim().split(/\s+/).reverse().join(' ');

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.