const prompt = require("prompt-sync")();
let montantDH = prompt("Please Enter your montant: ");

let EUR;
EUR = montantDH / 11;

console.log("Budget en MAD : ", montantDH + " DH");
console.log("Budget en EUR : ", EUR + ' €');
