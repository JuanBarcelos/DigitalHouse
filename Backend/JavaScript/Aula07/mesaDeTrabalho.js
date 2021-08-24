function podeSubir(altura,acompanhada){
    let alturaMinima = 1.4;
    let alturaMaxima = 2;

    if(altura > alturaMinima && altura < alturaMaxima){
        return console.log("Acesso autorizado");
    }

   if(altura <= alturaMinima && altura > 1.2 && acompanhada === true ){
           return console.log("Acesso autorizado somente com acompanhante");   
   }
   else{
    return console.log("Acesso negado.");
   }
}

podeSubir(1.3, true);