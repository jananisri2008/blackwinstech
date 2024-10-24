/*Write a function that converts an object into an array of keys and values.

Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] */

function objectarray(obj) {
  return Object.entries(obj); 
}
console.log(objectarray({
D: 1,
B: 2,
C: 3
})); 
console.log(objectarray({
likes: 2,
dislikes: 3,
followers: 10
})); 
