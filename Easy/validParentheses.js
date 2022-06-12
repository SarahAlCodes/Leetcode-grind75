/* 
Leetcode Link: https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

//given a string of brackets
//return true if bracket type are the same, closed properly, and in order
    //else return false
//example
    /* Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false */



const isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  
  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);
    
  for (let i = 0 ; i < s.length ; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    } 
  }
  return stack.length === 0;
};

//the time complexity is O(n) and space complexity is O(n) as well because in the worst-case scenario if we get a sequence with only opening characters (({[([{{[( we’ll push all of them to the stack.

const isValids = function (s) {
    // Checking for string lengths that are odd which wouldn't be valid
    if (s.length % 2 !== 0) {
      return false;
    }
  
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (const c of s) {
      if (brackets.hasOwnProperty(c)) {
        // add closing bracket to stack
        stack.push(brackets[c]);
      } else if (stack.pop() !== c) {
        // This will run if stack is empty and you try to add a closing bracket or closing brackets don't match
        return false;
      }
    }
    // If stack is empty returns true as all brackets matched up
    return stack.length === 0;
  };