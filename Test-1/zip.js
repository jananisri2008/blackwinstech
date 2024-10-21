/*Write a function that returns the position of the second occurrence of "zip" in a string,
 or -1 if it does not occur at least twice. Your code should be general enough to pass 
 every possible case where "zip" can occur in a string.

Examples
findZip("all zip files are zipped") ➞ 18
findZip("all zip files are compressed") ➞ -1
 */
function zip(str) {
    let count1 = 0;
    let count2 = -1;
    for (let i = 0; i <= str.length - 3; i++) {
        if (str[i] === 'z' && str[i + 1] === 'i' && str[i + 2] === 'p') {
            count1++; 
            if (count1 === 2) {
                count2 = i; 
                break; 
            }
        }
    }
    return count2;
}
console.log(zip("all zip files are zipped"));      
console.log(zip("all zip files are compressed"));  
