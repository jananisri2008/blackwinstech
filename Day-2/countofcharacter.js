/*Create a function that takes two strings as arguments and returns the number of times
 the first string (the single character) is found in the second string.

Examples
charCount("a", "edabit") ➞ 1
charCount("c", "Chamber of secrets") ➞ 1
charCount("b", "big fat bubble") ➞ 4 */
function countofcharacter(ch,str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase()===ch.toLowerCase()){
            count++;
        }
    }
        return count;
}
console.log(countofcharacter("a","edabit"));
console.log(countofcharacter("c","Chamber Of Secrets"));
console.log(countofcharacter("b","big fat bubble"));