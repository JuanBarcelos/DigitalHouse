/**Letra A */
var array = [2,3,5,6];
var newArray = [10,6,8,100];
var arrayJoin = ["D", "i", "g","i","t","a","l"];
console.log(array[0]);

/**Letra B */
/**altera valor de um array */
array[0] = 10;
console.log(array[0]);

/** Letra C */
array.push(100);
console.log(array);

/**Letra D */
array.pop()
console.log(array);

/**Letra E */
if(array[0] == newArray[0]){
    console.log("São iguais")
}else{
    console.log("Deu ruim")
}

/**imprimer inverso */
/** função reverse inverte o array */
function imprimirInverso(array){
    console.log(array.reverse());
}

function inverter(array){
    let newArray = array.reverse();
    console.log(newArray);
}
/**Somar elementos do array */
function somar(array){
    let soma = 0
   for (let i = 0; i < array.length; i++) {
       soma += parseInt(array[i]);
   }
   return soma;
}

/** usar o join */
function join(array){
   console.log(array.join(""));
}


imprimirInverso(array);
inverter(newArray);
console.log(somar(array));
join(arrayJoin);