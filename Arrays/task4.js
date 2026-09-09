 const prompt = require('prompt-sync')();
 let usrinput = +prompt('Enter your elemet: ');
 
 function ajouterALaFin(tab, element)
 {
    tab[Array.length] = element;
    return tab;
 }

 let lafin = ajouterALaFin([2,5,7,12,9],usrinput);
 console.log(lafin);