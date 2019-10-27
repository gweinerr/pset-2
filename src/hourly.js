const readlineSync = require("readline-sync");

const HR_WAGE = Number(readlineSync.question("\nHourly Wage: "));

const mon = Number(readlineSync.question("\nMonday: "));
const tues = Number(readlineSync.question("Tuesday: "));
const wed = Number(readlineSync.question("Wednesday: "));
const thurs = Number(readlineSync.question("Thursday: "));
const fri = Number(readlineSync.question("Friday: "));
const sat = Number(readlineSync.question("Saturday: "));
const sun = Number(readlineSync.question("Sunday: "));

let wkhr = parseFloat(mon) + parseFloat(tues) + parseFloat(wed) + parseFloat(thurs) + parseFloat(fri) + parseFloat(sat) + parseFloat(sun)
let pay = (wkhr * HR_WAGE)

pay = pay.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("\nYou'll make $" + pay + " this week.\n");
