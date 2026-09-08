const prompt = require('prompt-sync')();
let name = prompt('Enter name: ');
let titer = prompt('Enter titer: ');

function saluerClient(nom, client)
{
    if(client == null)
        client += "client";
    return "Bonjour " + client +' ' + nom;
}

console.log(saluerClient(name, titer));