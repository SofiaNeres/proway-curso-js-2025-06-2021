// limpar_campos => snake case
// limparCampos => camel case
// LimparCampos => pascal case
// limpar-campos => kebab case

// Padrão de nomenclatura para uma função em js é camel case
function limparCampos() {
    // Padrão de nomenclatura de variável em js é camel case
    let inputNome = document.querySelector("#campo-nome");
    // definir o valor do campo como uma string vazia, ou seja, limpar o campo
    inputNome.value="";

    let inputSobrenome = document.querySelector("#campo-sobrenomw");
    inputSobrenome.value = "";

    let inputIdade = document.querySelector("#campo-idade");
    inputIdade.value = "";

    let inputClasse = document.querySelector("#campo-classe");
    inputClasse.value = "";

    let inputModalidade = document.querySelector("input[name='modalidade']:checked");
    // Necessario validar que o usuario escolheu alguma modalidade, caso contrário a
    // limpeza não funcionara para os demais campos
    if(inputModalidade !== null){
        inputModalidade.checked = false;
    }

    let inputEstrangeiro = document.querySelector("#campo-estrangeiro");
    inputEstrangeiro.checked = false;
}

function cadastrar(){
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;

    let inputSobrenome = document.querySelector("#campo-sobrenome");
    let sobrenome = inputSobrenome.value;

    let inputIdade = document.querySelector("#campo-idade");
    let idade = inputIdade.value;

    let inputClasse = document.querySelector("#campo-classe");
    let classe = inputClasse.value;

    let Modalidade = document.querySelector("input[name='modalidade']:checked");
    if(modalidade === null) {
        alert("Escolha uma modalidade");
        return; //Encerra a execução da função
    }

    let modalidade = campoModalidade.value;

    let campoEstrangeiro = document.querySelector("#campo-estrangeiro");
    let estrangeiro = campoEstrangeiro.checked;

    alert(
        "\nNome: " + nome +
        "\nSobrenoome: " + sobrenome +
        "\nIdade: " + idade +
        "\nClasse: " + classe +
        "\nModalidade: " + modalidade +
        "\nEstrangeiro: " + estrangeiro 
    )
}