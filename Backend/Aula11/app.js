let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

function convertirAMayusculas(array){
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();   
    }
        return array
}

console.log(convertirAMayusculas(peliculas));

/**Concursos */
var participanteA =  [5, 8, 4, 9, 5];
var participanteB =  [8, 7, 8, 6, 8];
var participanteC =  [7, 5, 10, 8, 3];
