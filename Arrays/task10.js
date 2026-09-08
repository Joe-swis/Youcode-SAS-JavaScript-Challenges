
function swap(tab,a , b)
{
    let temp = 0;
    temp = tab[a];
    tab[a] = tab[b];
    tab[b] = temp;
    return tab;

}
function trierTableau(tab) {
    let len = tab.length - 1;
    let newArray = [];
    let i = 0;
    let j = 0;
    while (i <= len) {

        j = i + 1;
        while (j <= len) {
            if (tab[i] > tab[j]) {
                tab = swap(tab, i, j);
            }
            j++;
        }
        newArray[newArray.length] = tab[i];
        i++;
    }
    return newArray;
}

console.log(trierTableau([5, 9, 3, 3, 4, 2]));