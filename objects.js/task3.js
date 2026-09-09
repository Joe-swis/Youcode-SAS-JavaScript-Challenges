let produit = {};

produit["name"] = "Keyboard";
produit["price"] = "80";
produit["category"] = "Electonique";
produit["quantity"] = "7";
produit["available"] = true;

console.log(produit.name);
console.log(produit.price + ' DH');
console.log(produit.category);

for(let member in produit)
{
    if(produit.available != true)
    {
        console.log("le produit no disponible.")
        break;
    }
}
console.log(produit.price * produit.quantity + ' DH');