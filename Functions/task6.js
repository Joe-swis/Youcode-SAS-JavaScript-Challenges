const prompt = require('prompt-sync')();
let modepass = prompt('Enter your mode pass: ');

function verifierMotDePasse(motDePasse)
{
    if (motDePasse.length >= 8)
        return motDePasse.includes("@");
    return false;    
}

console.log(verifierMotDePasse(modepass));