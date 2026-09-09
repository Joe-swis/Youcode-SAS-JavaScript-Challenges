function inverserChaine(chaine)
{
    let len = chaine.length;
    let revstr = "";
    let i = len - 1;
    while(i >= 0 && chaine[i])
    {
        revstr += chaine[i];
        i--;
    }
    return revstr;
}
console.log(inverserChaine("hello"));