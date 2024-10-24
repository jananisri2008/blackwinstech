/*Create a function to return the amount of potatoes there are in a string.

Examples
potatoes("potato") ➞ 1
potatoes("potatopotato") ➞ 2
potatoes("potatoapple") ➞ 1 */
function amtofpotatos(str){
    return str=str.split("potato").length-1;
    }
console.log(amtofpotatos("potato"));
console.log(amtofpotatos("potatopotato"));
console.log(amtofpotatos("potatoappletomato"));