/*Groups and ranges indicate groups and ranges of expression characters. 
The regular expression x|y matches either "x" or "y".

const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
Create a regular expression to match all red flag and blue flag in a string. 
You must use | in your expression. Flags can come in any order.

Examples
"red flag blue flag".
match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".
match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".
match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
 */
let x='red flag';
let y='blue flag';
let result=/blue flag|red flag/g;
console.log('red flag'.match(result));
console.log('blue flag'.match(result));
console.log('pink flag red flag blue flag green flag red flag'.match(result));
console.log('yellow flag red flag blue flag green flag'.match(result));
console.log('red flag blue flag'.match(result));