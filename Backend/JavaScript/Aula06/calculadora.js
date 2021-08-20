function soma(x, y){
    return x + y;
}

function subtracao(x, y){
    return console.log( x - y);
}

function multiplica(x, y){
    return x * y;
}

function divisao(x, y){
    return x / y;
}

function quadradoDoNumero(x){
   return multiplica(x, 2); 
}

function mediaDeTresNumeros(x, y, z){
   let resultado =  (soma(x,y) + z)/3;
   return console.log(resultado);
}

function calculaPorcentagem(x, y){
    return divisao(multiplica(x,y),100)
}

function geradorDePorcentagem(x, y){
    return divisao(multiplica(x,100),y);
}

console.log ("-------------- Teste de Operações / Calculadora --------------");
console.log(soma(10,5));
subtracao(20,6);
console.log(multiplica(2,4));
console.log(divisao(10,2));
console.log(quadradoDoNumero(8));
mediaDeTresNumeros(10,10,10);
console.log(calculaPorcentagem(1000,10));
console.log(geradorDePorcentagem(100,1000));