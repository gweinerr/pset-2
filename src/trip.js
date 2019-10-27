const readlineSync = require("readline-sync");

const STUDENTS = Number(readlineSync.question("\nStudents: "));
const TEACHERS = Number(readlineSync.question("Teachers: "));
const BUS_CAPACITY = Number(readlineSync.question("Bus capacity: "));

let allPeople = (parseFloat(STUDENTS) + parseFloat(TEACHERS));
let totalBuses = Math.ceil(allPeople / BUS_CAPACITY);
let fullBuses = (totalBuses - 1);
let fullBusPpl = (fullBuses * BUS_CAPACITY);
let leftoverKids = (allPeople - fullBusPpl);

console.log("\n" + totalBuses + " bus(es) is (are) needed, with " + leftoverKids + " passenger(s) on the last bus.\n");
