const readlineSync = require("readline-sync");

const students = readlineSync.question("\nStudents: ");
const teachers = readlineSync.question("Teachers: ");
const busCapacity = readlineSync.question("Bus capacity: ");

let allPeople = (parseFloat(students) + parseFloat(teachers));
let totalBuses = Math.ceil(allPeople / busCapacity);
let fullBuses = (totalBuses - 1);
let fullBusPpl = (fullBuses * busCapacity);
let leftoverKids = (allPeople - fullBusPpl);

console.log("\n" + totalBuses + " bus(es) is (are) needed, with " + leftoverKids + " passenger(s) on the last bus.\n");
