/*Try finding your ancestors and offspring with code.
Create a function that takes a number x and a character y ("m" for male, "f" for female),
and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.
Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
 */

function generation(x, y) {
    if (x === 0) {
        return 'me!';
    }
    if (x === -1) {
        return (y === 'm') ? 'father' : 'mother';
    } else if (x === -2) {
        return (y === 'm') ? 'grandfather' : 'grandmother';
    } else if (x === -3) {
        return (y === 'm') ? 'great grandfather' : 'great grandmother';
    }
    if (x === 1) {
        return (y === 'm') ? 'son' : 'daughter';
    } else if (x === 2) {
        return (y === 'm') ? 'grandson' : 'granddaughter';
    } else if (x === 3) {
        return (y === 'm') ? 'great grandson' : 'great granddaughter';
    }
    return 'unknown generation';
}
console.log(generation(2, 'f'));  
console.log(generation(-3, 'm')); 
console.log(generation(1, 'f'));  
console.log(generation(0, 'm'));  