const readlineSync = require("readline-sync");

const widthInches = readlineSync.question("\nWidth: ");
const lengthInches = readlineSync.question("Length: ");
const INCHES_TO_CM = 2.54;
let widthCm = widthInches * INCHES_TO_CM;
let lengthCm = lengthInches * INCHES_TO_CM;
let perimeter = (2 * widthCm) + (2 * lengthCm);
perimeter = perimeter.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("\nA(n) " + widthInches + "-by-" + lengthInches + "-inch sheet of paper has an perimeter of " +  perimeter  + " centimeter(s).\n");
