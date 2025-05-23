var formAluno = document.getElementById("form-cadastro")

var listaAlunos = []

function cadastrarAluno(event) {
    event.preventDefault()

    var aluno = document.getElementById("nome").value
    var matricula = document.getElementById("matricula").value
    var idade = document.getElementById("idade").value
    var nomeMae = document.getElementById("mae").value
    var telefone = document.getElementById("telefone").value

    console.log(aluno)
    console.log(idade)
    console.log(matricula)
    console.log(nomeMae)
    console.log(telefone)

    var objetoAluno = {
        nome: aluno,
        matricula:matricula,
        idade: idade,
        nomeMae: nomeMae,
        telefone: telefone
    }
    
    console.log("Função cadastrarProduto chamada")

    listaAlunos.push(objetoAluno)
    console.log(listaAlunos)

    formAluno.reset()
}

formAluno.addEventListener("submit", cadastrarAluno)