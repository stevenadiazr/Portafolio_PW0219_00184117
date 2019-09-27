function fibo(numero){
    let termino1 = 0;
    let termino2 = 1;
    let respuesta = 0;
    if(numero == 1)
    return termino1;
    else if (numero == 2)
    return termino2;
    else{
        for(let i = 3; i <= numero; i++){
            respuesta = termino1 + termino2;
            termino1 = termino2;
            termino2 = respuesta;
        }
    }
    return respuesta;
}