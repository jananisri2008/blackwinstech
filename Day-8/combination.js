/*Combinations
Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120
Notes
Don't overthink this one.
Input may include the number zero. */

function combination(num){
        let total = 1; 
        for (let i = 0; i < num.length; i++) {
            total *= num[i]; 
        }
        return total; 
    }
    console.log(combination([2, 3])); 
    console.log(combination([3, 7, 4]));
    console.log(combination([2, 3, 4, 5])); 
    console.log(combination([0, 3])); 
    console.log(combination([2, 0, 4])); 
    
