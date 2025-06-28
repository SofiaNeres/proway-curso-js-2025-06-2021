function enviarReclamacao() {
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;

    let inputEmail = document.querySelector("#campo-email");
    let email = inputEmail.value;

    let inputReclamacao = document.querySelector("#campo-reclamacao");
    let reclamacao = inputReclamacao.value;

    if (nome === "" || email === "" || reclamacao === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let campoReclamacoes = document.querySelector("#campo-reclamacoes");

    campoReclamacoes.value +=
        "\nNome: " + nome +
        "\nE-mail: " + email +
        "\nReclamação: " + reclamacao +
        "\n----------------------------------";

    alert("Reclamação enviada com sucesso!");

    // Limpar os campos após o envio
    inputNome.value = "";
    inputEmail.value = "";
    inputReclamacao.value = "";
}
