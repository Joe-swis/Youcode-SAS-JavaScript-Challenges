const prompt = require("prompt-sync")();
let debut = +prompt("enter a début number: ");
let fin = +prompt("enter a fin number: ");
let total = 0;
for (let i = debut; i <= fin; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
        total++;
        
    }
        else
        continue;
    
}
console.log("Nombre Total: ",total);