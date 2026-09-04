const prompt = require("prompt-sync")();
let compter = +prompt("Enter numéros des participants: ");

for(let i = 1; i <= compter; i++)
{
    console.log("Participant ",i);
}