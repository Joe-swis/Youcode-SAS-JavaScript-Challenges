function compterCaracteres(chaine)
{
    let len = 0;
    let i = 0;
    while(chaine[i])
    {
        len = i +1;
        i++;
    }
    //chaine[i] = '\0';
    return len;
}

console.log(compterCaracteres('code'));