function compterLettre(chaine, lettre)
{
    let len = chaine.length;
    let i = 0;
    let j = 0;
    while(chaine[i] && i < len)
    {
        if(chaine[i] == 'a')
            j++;
        i++;
    }
    return j;
}

console.log(compterLettre("javascaript", "a"))