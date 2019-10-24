const readlineSync = require("readline-sync");

const length = 48;
const width = 24;
const diameter = 6;

let rectangleSA =  (length * width);
let holeSA = Math.pow((diameter/2),2) * Math.PI;
let totalSA = (rectangleSA - holeSA);


console.log("\nThe surface area of a standard Cornhole board is " + totalSA.toLocaleString(undefined, {maximumFractionDigits:2}) + " square inch(es).\n");
