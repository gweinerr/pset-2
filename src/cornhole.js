const readlineSync = require("readline-sync");

const LENGTH = 48;
const WIDTH = 24;
const DIAMETER = 6;

let rectangleSA =  (LENGTH * WIDTH);
let holeSA = Math.pow((DIAMETER/2),2) * Math.PI;
let totalSA = (rectangleSA - holeSA);


console.log("\nThe surface area of a standard Cornhole board is " + totalSA.toLocaleString(undefined, {maximumFractionDigits:2}) + " square inch(es).\n");
