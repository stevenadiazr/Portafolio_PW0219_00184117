function adivinador(numero){
    valores= [];
    victoria= false;
    var numeroAleatorio;

    typeof(variable);

    for(var i=0; i < 20; i++){
        numeroAleatorio = (Math.floor(Math.random()*100)+1);
        valores.push(numeroAleatorio);
    }

    for (var j=0; j<20; j++){
        if(numero === valores[j]){
            console.log('Has Ganado');
            victoria= true;
            break;
        }
    }

    if (victoria === false)
        console.log('Has perdido')

    return valores;

}