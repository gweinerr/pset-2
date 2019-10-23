const readlineSync = require("readline-sync");

const widthInches = readlineSync.question("\nWidth: ");
const lengthInches = readlineSync.question("Length: ");
const INCHES_TO_MILLIMETERS = 25.4;
let widthMillimeters = widthInches * INCHES_TO_MILLIMETERS;
let lengthMillimeters = lengthInches * INCHES_TO_MILLIMETERS;
let area = widthMillimeters * lengthMillimeters;
area = area.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("\nA(n) " + widthInches + "-by-" + lengthInches + "-inch sheet of paper has an area of " +  area  + " square millimeter(s).\n");
