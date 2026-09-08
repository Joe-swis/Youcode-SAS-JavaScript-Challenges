const prompt = require('prompt-sync')();
let lastN = prompt("Enter prenom: ");
let firstN = prompt("Enter nom: ");

function genererEmail(prenom, nom)
{
    let pre = prenom.toLocaleLowerCase();
    let name = nom.toLocaleLowerCase();
    return pre +'.'+ name + '@gmail.com';
}

console.log(genererEmail(lastN, firstN));