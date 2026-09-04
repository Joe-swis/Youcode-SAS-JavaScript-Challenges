const prompt = require("prompt-sync")();

let number = +prompt("Enter a number: ");

for (let i = 0; i <= number; i += 2)
{
    console.log(i)
}