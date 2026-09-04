const prompt = require("prompt-sync")();

let num = +prompt("Please enter a number: ");


while(num >= 0)
{
    console.log(num);
    num--;
}
