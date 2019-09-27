function palindromo(arreglo)
{
    let arre=arreglo.length;
    let reverse="";
    for (let i = arre-1; i > -1; i--) {
        reverse += arreglo[i];
        }

    if(arreglo===reverse)
    {
        return "la palabra es palíndroma";
    }
    else
    {
        return "la palabra NO es palíndroma";
        
    }
}

function repeat(n,action){
    for(let i=0; i < n; i++){
      action(i);
    }
  }