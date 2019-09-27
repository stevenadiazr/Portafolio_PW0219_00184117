function ocurrencias(array, numero){
    let cantOcurrencias=0;
    for(var i =0; i < array.length; i++){
        if(numero === array[i])
            cantOcurrencias ++;
    }
    return cantOcurrencias;
}