const readlineSync = require("readline-sync");
const name = readlineSync.question("\nHi! What's your name?\n");
console.log("\nHello, " + name + "!");
