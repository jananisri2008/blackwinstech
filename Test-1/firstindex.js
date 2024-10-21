/*Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0
firstVowel("hello") ➞ 1
firstVowel("STRAWBERRY") ➞ 3
firstVowel("pInEaPPLe") ➞ 1

Notes
Input will be single words.
Characters in words will be upper or lower case.
"y" is not considered a vowel.
Input always contains a vowel. */
function firstindex(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase(); 
        for (let j = 0; j < vowels.length; j++) {
            if (vowels[j] === char) {
                return i; 
            }
        }
    }
    return -1; 
}
console.log(firstindex("apple"));       
console.log(firstindex("hello"));      
console.log(firstindex("STRAWBERRY"));  
console.log(firstindex("pInEaPPLe"));   
