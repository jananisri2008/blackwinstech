/*Finding Nemo
You're given a string of words. You need to find the word "Nemo", and return a string like this:
"I found Nemo at [the order of the word you find Nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"
Notes
! , ? . are always separated from the last word.
Nemo will always look like Nemo, and not NeMo or other capital variations.
Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
If there are multiple Nemo's in the sentence, only return the first one. */
function nemo(sentence) {
    let letter = sentence.split(' ');
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === "Nemo") {
            return `I found Nemo at ${i + 1}!`;
        }
    }
    return "I can't find Nemo.";
}
console.log(nemo("I am finding Nemo !"));
console.log(nemo("Nemo is me"));          
console.log(nemo("I Nemo am"));           
