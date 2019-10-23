const readlineSync = require("readline-sync");

console.log("\nEnter three homework grades.");
const hw1 = readlineSync.question("");
const hw2 = readlineSync.question("");
const hw3 = readlineSync.question("");

console.log("\nEnter three quiz grades.");
const q1 = readlineSync.question("");
const q2 = readlineSync.question("");
const q3 = readlineSync.question("");

console.log("\nEnter three test grades.");
const t1 = readlineSync.question("");
const t2 = readlineSync.question("");
const t3 = readlineSync.question("");

let hwavg = (parseFloat(hw1) + parseFloat(hw2) + parseFloat(hw3))/3;
let qavg = (parseFloat(q1) + parseFloat(q2) + parseFloat(q3))/3;
let tavg = (parseFloat(t1) + parseFloat(t2) + parseFloat(t3))/3;

const grade = (hwavg * .15 + qavg * .35 + tavg * .5);
console.log("\nYour marking period grade is " + parseFloat(grade).toFixed(2).toLocaleString() + "%.\n");
