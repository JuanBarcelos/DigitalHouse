function microondas(comida,tempo){
   let tempoDePreparo =0;
    switch (comida) {
        case 1:
            console.log("Pipoca");
            tempoDePreparo = 10;
            break;
        case 2:
            console.log("Macarrão")
            tempoDePreparo = 8;
            break;
        case 3:
            console.log("Carne")
            tempoDePreparo = 15;
            break;
        case 4:
            console.log("Feijão")
            tempoDePreparo = 12;
            break;
        case 5:
            console.log("Brigadeiro")
            tempoDePreparo = 8;
            break;
        default:
            console.log("Prato inexistente")
            break;
    }
    finalizarPrato(tempo, tempoDePreparo);
    console.log("Prato pronto, bom apetite!!!")
}

function finalizarPrato(tempo, tempoDePreparo){
    if(tempo > 2*tempoDePreparo && tempo <= 3*tempoDePreparo){
        console.log("A comida queimou");
    }
    else if(tempo < tempoDePreparo){
        console.log("tempo insuficiente");
    }
    else if(tempo > 3*tempoDePreparo){
        console.log("“kabumm”");
    }
}

microondas(2,10);