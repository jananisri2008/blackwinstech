/*Folding a Piece of Paper
Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times.
 The paper starts off with a thickness of 0.5mm.

Examples
numLayers(1) ➞ "0.001m"
// Paper folded once is 1mm (equal to 0.001m)

numLayers(4) ➞ "0.008m"
// Paper folded 4 times is 8mm (equal to 0.008m)

numLayers(21) ➞ "1048.576m"
// Paper folded 21 times is 1048576mm (equal to 1048.576m)
Notes
There are 1000mm in a single meter.
Don't round answers. */
function paper(n){
    let thick=0.5;
    let millimeter=thick*(Math.pow(2,n));
    let meter=millimeter/1000;
    return meter;

}
console.log(paper(1));
console.log(paper(4));
console.log(paper(21));
