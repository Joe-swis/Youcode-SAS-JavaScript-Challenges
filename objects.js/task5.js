const prompt = require('prompt-sync')();

let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};

function afficherSold(sold)//Afficher le solde
{
    console.log(sold);
}

function deposer()//Déposer de l'argent.
{
    let argent = +prompt('Déposer de largent.');
    if(argent >= 0)
        return argent;
    return 0;
}

function retirer(Retirer, sold)//Retirer de l'argent.
{
    return sold - retirer;
}

function verifierSuffisant(suffi, sold)//Vérifier si le solde est suffisant.
{
    if(suffi <= sold)
        return sold - suffi;
    console.log("le solde doit être refusé.")
}
function afficherInfo(account)//Afficher les informations du compte.
{
    for(let member in account)
    {
        console.log(account[member]);
    }
}
