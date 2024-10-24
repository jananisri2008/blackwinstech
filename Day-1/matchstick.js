/*Matchstick Houses, Steps 1, 2 and 3
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436*/
function matchsticks(step){
    let total=6;
    let sum=total+(step)*5;
    return sum-5;
}
console.log(matchsticks(0));
console.log(matchsticks(1));
console.log(matchsticks(87));
console.log(matchsticks(4));
