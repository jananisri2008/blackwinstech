/*Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414*/
function square(num) {
    let result = '';
    let number = num;

    while (number > 0) {
        let digit = number % 10; 
        result = (digit * digit) + result; 
        number = Math.floor(number / 10); 
    }

    return parseInt(result); 
}

console.log(square(9119)); 
console.log(square(2483)); 
console.log(square(3212));
