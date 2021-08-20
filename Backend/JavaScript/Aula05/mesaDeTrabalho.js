function converterPolegadas(x){
    let cm = x * 2.54;
    return console.log(`${x} polegadas e equivalente a ${cm} centimetros`);
}

function retornarUrl(x){
    return console.log(`A sua url está pronta - "www.${x}.com.br"`);
}

function retornarFrase(x){
    return console.log(`${x}!`);
}

function converterIdadeDosCachorros(x){
    let idade = x * 7;
    return console.log(`${x} anos humanos e equivalente a ${idade} anos de um cachorro`);
}

function horasTrabalhadas(x){
    let valor = x / 160;
    return console.log(`Você ganha ${valor} por hora trabalhada`);
}

function calculadoraImc(peso, altura){
    let imc = peso / (altura * 2);
    return console.log(`Seu imc é: ${Math.round(imc)}`);
}

function converterEmMaiusculo(x){
    let mauisculo = x.toUpperCase();
    return console.log(mauisculo);
}

function mostrarTipo(x){
    let tipo = typeof x;
    return console.log(tipo);
}

function circuferencia(x){
    let c = 2 * Math.PI * x;
    return console.log(Math.round(c));
}


converterPolegadas(10);
retornarUrl("MeuSite");
retornarFrase("Que lindo");
converterIdadeDosCachorros(4);
horasTrabalhadas(2100);
calculadoraImc(77, 1.56);
converterEmMaiusculo("js e muito bom");
mostrarTipo(100);
circuferencia(5);