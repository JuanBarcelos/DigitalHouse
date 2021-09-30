const createAluno = require('./modules/alunos.js');

function CreateCursos (name, mediaFinal, faltasLimits) {
        this.name = name,
            this.mediaFinal = mediaFinal,
            this.faltasLimits = faltasLimits,
            this.listaDeAlunos = createAluno.listarAlunos;

        this.adicionarAluno = function (estudades) {
            this.listaDeAlunos.push(estudades);
        };

        this.aprovacao = function (estudante) {
            if (estudante.finalMedia() >= this.mediaFinal && estudante.absent < this.faltasLimits) {
                return true;
            } else if (estudante.absent == this.faltasLimits) {
                let porcentagem = 10 * this.mediaFinal / 100;
                porcentagem += this.mediaFinal
                if (estudante.finalMedia() > porcentagem) {
                    return true;
                }
            } else {
                return false;
            }
        };

        this.listaDeAprovacao = function () {
            let resultadoFinal;
            let listaDeAprovacao = [];
            for (let aluno of this.listaDeAlunos) {
                resultadoFinal = [aluno.name, this.aprovacao(aluno)]
                listaDeAprovacao.push(resultadoFinal);
            }
            return listaDeAprovacao;
        }
    }


const java = new CreateCursos('Java', 7, 3);

console.log(java.listaDeAlunos);
