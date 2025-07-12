let botaoSalvar = document.querySelector("botao-salvar");
let botaoCancelar = document.querySelector("botao-cancelar");
let tabelaCorpo = document.querySelector("colaboradores");

let campoNome = document.getElementById("campo-nome");
let campoSobrenome = document.getElementById("campo-sobrenome");
let campoQuantidadeHoras = document.getElementById("campo-quantidade-horas");
let campoValorHora = document.getElementById("campo-valor-hora");

let colaboradores = [];
let idEditar = undefined;

function limparCampos() {
    campoNome.value = "";
    campoSobrenome.value = "";
    campoQuantidadeHoras.value = "";
    campoValorHora.value = "";
}

function salvar() {
    if (idEditar === undefined)
        cadastrar();
    else
        editar();

    limparCampos();
}

function cadastrar() {
    const nome = campoNome.value;
    const sobrenome = campoSobrenome.value;
    const quantidadeHoras = parseInt(campoQuantidadeHoras.value);
    const valorHora = parseFloat(campoValorHora.value);
    let colaborador = {
        nome: nome,
        sobrenome: sobrenome,
        quantidadeHoras: quantidadeHoras,
        valorHora: valorHora
    }
    colaboradores.push(colaborador);
}

function editar() { }

function listarColaboradores() { 
    colaboradores.forEach((coLaborador) => {
        criarLinha(coLaborador)
    })
}

function criarLinha(coLaborador) {
    const nomeCompleto = `${coLaborador.nome} ${coLaborador.sobrenome}`
    const salarioBruto = coLaborador.quantidadeHoras * coLaborador.valorHora;
    let linha = `<tr>
                    <td>1</td>
                    <td>${nomeCompleto}</td>
                    <td>${coLaborador.quantidadeHoras}</td>
                    <td>R$ ${coLaborador.valorHora}</td>
                    <td>R$ ${salarioBruto}</td>
                    <td>
                        <button class="btn btn-primary"><i class="fa-solid fa-pencil"></i> Editar</button>
                        <button class="btn btn-danger"><i class="fa-solid fa-trash"></i> Apagar</button>
                    </td>
                </tr>`
    //adicionar a linha na tabela
    tabelaCorpo.innerHTML += linha;
}

function popularCamposParaEditar() { }

function salvarLocalStorage() { }

function carregarDoLocalStorage() { }

function apagar() { }

function atribuirClique() {
    botaoCancelar.addEventListener("click", limparCampos);
    botaoSalvar.addEventListener("click", salvar);
}

atribuirClique();