const prompt = require('prompt-sync')();

function getArray() {
    let list;
    let Array = [];
    do {
        list = +prompt('Enter a numbers to sum it: ');
        if (!isNaN(list) && list != " " && list != '\0')
        {
            Array[Array.length] = list;
        }
        else
            break;
    } while(true);
    return Array;
}

function trouverMax(tab) {
    let i = 0;
    let Max = tab[0];
    let len = tab.length;
    while (i < len) {
        if (tab[i] >= Max) {
            Max = tab[i];
        }
        i++;
    }
    console.log(Max);
}

trouverMax(getArray());
