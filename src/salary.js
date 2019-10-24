const readlineSync = require("readline-sync");

const yrsal = readlineSync.question("\nAnnual salary: ");

const fedtax = (0.157);
const statetax = (0.0447);
const contr = (0.07);
const socsec = (0.062);
const medtax = (0.0145);

let preTax = (contr * yrsal);
let ptx = (yrsal - preTax);
let ftax = (fedtax * ptx);
let stax = (statetax * ptx);
let sstax = (socsec * ptx);
let mtax = (medtax * ptx);
let totalTax = mtax + sstax + stax + ftax + preTax;
let thp = yrsal - totalTax

thp = (thp / 24).toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("\nYour take-home pay each check will be $" + thp + ".\n");
