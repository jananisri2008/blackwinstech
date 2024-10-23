/*In a milk shop  rate of small size milk pocket is RS: 10 rate of medium size milk pocket is RS:20 rate of large size milk pocket is RS:50 and the stack of small size milk pocket is 100 pockets and stack of medium size milk pocket is 50 and stack of large size milk pocket is 10.get a input from the user  stack and balance amount . write this program in javascript.
*/

//import prompt
const prompt = require("prompt-sync")();
//object{property}
let stock = {
    small: 100,
    medium: 50,
    large: 10
};
//object{property}
let prices = {
    small: 10,
    medium: 20,
    large: 50
};
//calculation part
function calculation(amount, pctsize) {
    if (amount >= prices[pctsize]) {
        return amount - prices[pctsize];
    } else {
        console.log("Balance is not there.");
        return null;
    }
}
//stockupdate part
function stockupdate(pctsize) {
    if (stock[pctsize] > 0) {
        stock[pctsize] -= 1;
    } else {
        console.log(`No more ${pctsize} size pockets left in stock.`);
    }
}

function buymilk(amount, pctsize) {
    if (pctsize in stock && pctsize in prices) {
        let balance = calculation(amount, pctsize);
        if (balance !== null) {
            stockupdate(pctsize);
            console.log(`Balance amount: ${balance}`);
            console.log(`Remaining stock - Small: ${stock.small}, Medium: ${stock.medium}, Large: ${stock.large}`);
        }
    } else {
        console.log("no milk pocket size.");
    }
}

let amount = parseInt(prompt("Enter the amount:"));
let pctsize = prompt("Enter the milk pocket size (small, medium, large):");

buymilk(amount, pctsize);

