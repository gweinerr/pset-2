const readlineSync = require("readline-sync");

const hrwg = readlineSync.question("\nHourly Wage: ");

const mon = readlineSync.question("\nMonday: ");
const tues = readlineSync.question("Tuesday: ");
const wed = readlineSync.question("Wednesday: ");
const thurs = readlineSync.question("Thursday: ");
const fri = readlineSync.question("Friday: ");
const sat = readlineSync.question("Saturday: ");
const sun = readlineSync.question("Sunday: ");

let wkhr = parseFloat(mon) + parseFloat(tues) + parseFloat(wed) + parseFloat(thurs) + parseFloat(fri) + parseFloat(sat) + parseFloat(sun)
let pay = (wkhr * hrwg)

pay = pay.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("\nYou'll make $" + pay + " this week.");
