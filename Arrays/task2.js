const prompt = require('prompt-sync')();

function retArray() {
    let arrays;
    let listArray = [];
    do {
        arrays = +prompt('Enter a numbers to sum it: ');
        if (!isNaN(arrays) && arrays != " " && arrays != '\0')
        {
            listArray[listArray.length] = arrays;
        }
        else
            break;
    } while(true);
    return listArray;
}
function calculerSomme(tab) {
    let i = 0;
    let result = 0;
    while (tab[i]) {
        result += tab[i];
        i++;
    }
    console.log(result);
}

let res1 = retArray();
calculerSomme(res1);
