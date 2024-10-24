
let smallpct = 100;
let mediumpct = 50;
let largepct = 10;

let smallamt = 10;
let mediumamt = 20;
let largeamt = 50;


function milk(amt, packetSize) {
  let balance = amt; 

  if (packetSize === 'small') {
    if (smallpct > 0 && amt >= smallamt) {
      balance -= smallamt*milkqty; 
      smallpct--;  
    } else {
      console.log("There is no small packet.");
    }
  } else if (packetSize === 'medium') {
    if (mediumpct > 0 && amt >= mediumamt) {
      balance -= mediumamt;  
      mediumpct--;  
    } else {
      console.log("There is no medium packet.");
    }
  } else if (packetSize === 'large') {
    if (largepct > 0 && amt >= largeamt) {
      balance -= largeamt;  
      largepct--; 
    } else {
      console.log("There is no large packet.");
    }
  } else {
    console.log("There is no packet.");
  }
  console.log("Balance amount:", balance);
  console.log("Remaining stock - Small:", smallpct, "Medium:", mediumpct, "Large:", largepct);
}
let userAmount = prompt("enter the amount");
console.log(userAmount);
let milkqty=2;
let userPacket = 'small';  
milk(userAmount, userPacket);

