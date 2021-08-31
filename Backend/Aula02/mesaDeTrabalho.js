 let pacienteJose = {
     nome : "José da Silva",
     idade : 27,
     peso : 83.5,
     altura : 1.70,
     plano : true
};
let pacienteCarlos= {
    nome : "Carlos de Souza",
    idade : 28,
    peso : 81.1,
    altura : 1.76,
    plano : true,
};
 let pacienteAline = {
    nome : "Aline Ferreira",
    idade : 33,
    peso : 63.7,
    altura : 1.53,
    plano : false,
};
let pacienteAna = {
    nome : "Ana Paula",
    idade : 26,
    peso : 55.0,
    altura : 1.62,
    plano : true,
};

function exibirDados(paciente){

    let imc  = Math.round(paciente.peso/(paciente.altura*2))
    return console.log(
        `${paciente.nome} tem ${paciente.idade} anos e seu índice de massa corporal é de ${imc}`
    );
}

console.log(exibirDados(pacienteJose));
console.log(exibirDados(pacienteAline));
console.log(exibirDados(pacienteCarlos));
console.log(exibirDados(pacienteAna));
