/*Create a function that takes two numbers and a mathematical operator + - / * and 
will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
 */
function calc(num1,operator,num2){
    switch(operator){
        case "+":
            return num1+num2;
        break;
        case "-":
            return num1-num2;
        break;
        case "*":
            return num1*num2;
        break;
        case "/":
            return num1/num2;
        default:
            return "error";
    }
}
console.log(calc(2,"+",2));
console.log(calc(2,"*",2));
console.log(calc(4,"/",2));
console.log(calc(2,"-",2));
