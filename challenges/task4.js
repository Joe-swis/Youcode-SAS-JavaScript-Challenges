const prompt = require("prompt-sync")();
let Distance  = +prompt("Enter La distance parcourue en kilomètres (km): ");
let Carburant  = +prompt("Enter La quantité de carburant consommée en litres (L): ");

let Consommation ;
Consommation  = (Carburant / Distance) * 100;

console.log("Distance :", Distance + " km");
console.log("Carburant : ",Carburant + " litres");
console.log("Consommation : ", parseInt(Consommation) + " L/100km")