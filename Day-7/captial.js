/*Move Capital Letters to the Front
Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
Notes
Keep the original relative order of the upper and lower case letters the same. */

function capital(word) {
    let upper = "";
    let lower = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char === char.toUpperCase()) {
            upper += char;
        } else {
            lower += char;
        }
    }
    return upper + lower;
}
console.log(capital("hApPy"));    
console.log(capital("moveMENT")); 
console.log(capital("shOrtCAKE"));
