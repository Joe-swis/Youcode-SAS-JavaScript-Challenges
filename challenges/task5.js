const prompt = require("prompt-sync")();
let film  = +prompt("Enter la durée du film en minutes: ");

if(film <= 60)
{
    console.log("Durée : ", film + " minutes");
    console.log("Catégorie  : Court métrage");
}
else if(film > 60 && film <= 120)
{
    console.log("Durée : ", film + " minutes");
    console.log("Catégorie  : Film standard");
}
else
{
    console.log("Durée : ", film + " minutes");
    console.log("Catégorie  : Film long");
}