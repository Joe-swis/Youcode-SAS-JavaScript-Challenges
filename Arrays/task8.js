function supprimerDoublons(tab)
{
    let len = tab.length - 1;
    let newList = [];
    let i = 0;
    while(i <= len)
    {
        if(tab[i] != tab[i +1])
        {
           newList[newList.length] = tab[i];
        }
        i++;
    }
    return newList;
}

console.log(supprimerDoublons([1,2,3,3,4,5]));