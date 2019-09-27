function SumaProm(numericArray){
    let suma = 0;
    let promedio;
    let elementos = 0;
    for(var i=0; i < numericArray.length; i++){
        suma += numericArray[i];
        elementos ++;
    }
    promedio = (suma/elementos);
    console.log(suma);
    console.log(promedio);
}