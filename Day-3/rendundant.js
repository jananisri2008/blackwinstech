/*Write a function redundant that takes in a string str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"
const f2 = redundant("pear")
f2() ➞ "pear"
const f3 = redundant("")
f3() ➞ "" */

function rendundant(str) {
    return function() {
        return str; 
    };
}
let f1 = rendundant("apple");
console.log(f1()); 
let f2 = rendundant("pear");
console.log(f2()); 

let f3 = rendundant("");
console.log(f3()); 
