function inverserTableau(tab)
{
    let leng = tab.length - 1;
    let newList = [];
    let i = leng;
    while(i >= 0 && tab[i])
    {
        newList[newList.length] = tab[i];
        i--;
    }
    return newList;
}

console.log(inverserTableau([1,2,3,4,5]));