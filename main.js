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

        if (s.charAt(pointerOne).toLowerCase !== s.charAt(pointerTwo).toLowerCase) {
            return false;
        }

        pointerOne++;
        pointerTwo--;
    }

    return true;
};

let isValidCharacter = function(char) {
    let validChars = 'abcdefghigklmnopqrstuvwxyz012345689';
    return validChars.indexOf(char.toLowerCase()) > -1
}