const readlineSync = require("readline-sync");

const widthInches = readlineSync.question("\nWidth: ");
const lengthInches = readlineSync.question("Length: ");
let diagonal = Math.sqrt(widthInches * widthInches + lengthInches * lengthInches);
diagonal = diagonal.toLocaleString(undefined, {maximumFractionDigits: 2}, {minimumFractionDigits: 2});
console.log("\nA(n) " + widthInches + "-by-" + lengthInches + "-inch sheet of paper has an diagonal of " +  diagonal  + " inch(es).\n");
