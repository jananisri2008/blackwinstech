/*A tetrahedron is a pyramid with a triangular base and three sides.
 A tetrahedral number is a number of items within a tetrahedron.
Create a function that takes an integer n and returns the nth tetrahedral number.

Alternative Text

Examples
tetra(2) ➞ 4
tetra(5) ➞ 35
tetra(6) ➞ 56 */
function tetra(n) {
    return (n * (n + 1) * (n + 2)) / 6;
}
console.log(tetra(2)); 
console.log(tetra(5)); 
console.log(tetra(6)); 
