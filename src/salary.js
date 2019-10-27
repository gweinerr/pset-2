const readlineSync = require("readline-sync");

const yrsal = readlineSync.question("\nAnnual salary: ");

const FED_TAX = (0.157);
const STATE_TAX = (0.0447);
const CONTRIBUTION_TAX = (0.07);
const SOCIAL_SECURITY = (0.062);
const MED_TAX = (0.0145);

let preTax = (CONTRIBUTION_TAX * yrsal);
let ptx = (yrsal - preTax);
let ftax = (FED_TAX * ptx);
let stax = (STATE_TAX * ptx);
let sstax = (SOCIAL_SECURITY * ptx);
let mtax = (MED_TAX * ptx);
let totalTax = mtax + sstax + stax + ftax + preTax;
let thp = yrsal - totalTax

thp = (thp / 24).toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("\nYour take-home pay each check will be $" + thp + ".\n");
