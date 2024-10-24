/*Hitting the Jackpot
Create a function that takes in an array (slot machine outcome) and returns true 
if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

Examples
testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
Notes
The elements must be exactly identical for there to be a jackpot. */

function jackpot(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[0]==arr[i])
        {
            return true;
        }
        else{
            return false;
        }
    }

}
console.log(jackpot(["@","@","@","@"]));
console.log(jackpot(["&&","&","&&&","&&&&"]));
console.log(jackpot(["SS","ss","SS","ss"]));
console.log(jackpot(["SS","SS","SS","SS"]));