/*Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either 
"s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.
The catch is you can only use arithmetic or comparison operators, which means:
No if... else statements.
No objects.
No arrays.
No formatting methods, etc.
The goal is to write a short, branch-free piece of code.
Examples
perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52
 */
function perimeter(shape, num) {
    return (shape === "s") * (4 * num) + (shape === "c") * (6.28 * num);
}
console.log(perimeter("s", 7)); 
console.log(perimeter("c", 4)); 
console.log(perimeter("c", 9)); 
