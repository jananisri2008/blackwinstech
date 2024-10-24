/*Tower of Hanoi
There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

Tower of Hanoi

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

Examples
towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0
Notes
The amount of discs is always a positive integer.
1 disc can be changed per move. */
function tower(disc) {
    if (disc === 0) {
        return 0;
    }
    let res=Math.pow(2,disc);
    return res-1;
}
console.log(tower(3)); 
console.log(tower(5)); 
console.log(tower(0)); 
