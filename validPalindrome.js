// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



//Solution:

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let noPunc = /[\W_]/g; 
    let lowerCaseStr = s.toLowerCase().replace(noPunc,'')
    let reverseStr = lowerCaseStr.split('').reverse().join(''); 
    return reverseStr === lowerCaseStr;
};


// string including non alphanumeric characters
// return boolean for palindrome excluding non-alphanumeric characters
// Input: s = "A man, a plan, a canal: Panama"
    // Output: true
    // Explanation: "amanaplanacanalpanama" is a palindrome.
// use regex with a global flag to target non-alph chars
    // use lowercase method to standardize string
    // use replace method with regex to return new string that removes targeted chars
    // use split,reverse,join methods to convert to array, reverse elements and join back into string
    // return reverse string if it matches lowercase string type and value

