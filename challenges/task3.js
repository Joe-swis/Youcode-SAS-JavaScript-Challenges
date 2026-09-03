const prompt = require("prompt-sync")();
let gigaoctetGB = prompt("Enter une capacité exprimée en Gigaoctets (GB): ");

let megaoctetMB;
megaoctetMB = gigaoctetGB * 1024;

console.log("Stockage :", gigaoctetGB + " GB")
console.log("Résultat : ",megaoctetMB + " MB")