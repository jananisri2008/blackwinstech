/*Find the Discount
Create a function that takes two arguments: the original price and the discount percentage as integers and 
returns the final price after the discount.

Alternative Text

Examples
dis(1500, 50) ➞ 750

dis(89, 20) ➞ 71.2

dis(100, 75) ➞ 25
Notes
Your answer should be rounded to two decimal places. */
function discount(oriamt,dis){
    let div=dis/100;
    let disamt=oriamt*div;
    let finalamt=oriamt-disamt;
return finalamt;
}
console.log(discount(1500,50));
console.log(discount(89,20));
console.log(discount(100,75));



