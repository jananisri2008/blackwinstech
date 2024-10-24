/* Given a number, n, return a function which adds n to the number passed to it.

Examples
add(10)(20) ➞ 30
add(0)(20) ➞ 20
add(-30)(80) ➞ 50
*/
function add(n) {
    return function(m) {
        return n + m;
    };
}
console.log(add(10)(20));  
console.log(add(0)(20));   
console.log(add(-30)(80)); 
