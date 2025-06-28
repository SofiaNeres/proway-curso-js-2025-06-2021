function cadastrar() {
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;

    let inputQuantidade = document.querySelector("#campo-quantidade");
    let quantidade = inputQuantidade.value;

    let inputPreco = document.querySelector("#campo-preco");
    let preco = parseFloat(inputPreco.value).toFixed(2);

    if (nome === "" || quantidade === "" || isNaN(preco)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    let textarea = document.querySelector("#campo-produtos");

    textarea.value +=
        "\nNome: " + nome +
        "\nQuantidade: " + quantidade +
        "\nPreço Unitário: R$ " + preco +
        "\n-----------------------------";

    alert("Produto cadastrado com sucesso!");

    inputNome.value = "";
    inputQuantidade.value = "";
    inputPreco.value = "";
}

function calcularTotalProduto(quantidade, preco) {
    const total = quantidade * preco;
    return total;
}

function cadastrar() {
    const inputNome = document.querySelector("#campo-nome");
    const nome = inputNome.value;

    const inputQuantidade = document.querySelector("#campo-quantidade");
    const quantidade = parseFloat(inputQuantidade.value);

    const inputPreco = document.querySelector("#campo-preco");
    const preco = parseFloat(inputPreco.value);

    if (nome === "" || isNaN(quantidade) || isNaN(preco)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const total = calcularTotalProduto(quantidade, preco);

    const spanTotal = document.querySelector("#campo-total");
    spanTotal.textContent = `Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    console.log("Total do Produto: R$", total.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));

    const textarea = document.querySelector("#campo-produtos");
    textarea.value +=
        "\nNome: " + nome +
        "\nQuantidade: " + quantidade +
        "\nPreço Unitário: R$ " + preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) +
        "\nTotal: R$ " + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) +
        "\n-----------------------------";

    alert("Produto cadastrado com sucesso!");


    inputNome.value = "";
    inputQuantidade.value = "";
    inputPreco.value = "";
}