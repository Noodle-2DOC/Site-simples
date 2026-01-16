// funcao que é chamada quando o botao "entrar" e clicado
function mostrarMensagem() {
    // pega o valor digitado no campo de texto
    var nome = document.getElementById("nome").value;
    // pega o paragrafo onde a mensagem sera exibida
    var mensagem = document.getElementById("mensagem");
    // pega o paragrafo onde a data sera exibida
    var data = document.getElementById("data");
    // verifica se o campo esta vazio
    if (nome === "") {
        mensagem.innerHTML = "Por favor, digite seu nome!";
    } else {
        // mostra uma mensagem personalizada com o nome digitado
        mensagem.innerHTML = "Olá, " + nome + "! Seja bem-vindo(a) à nossa página!";
    }
    // cria um objeto com a data atual
    var hoje = new Date();
    // mostra a data atual no site
    data.innerHTML = "Data de acesso: " + hoje.toLocaleDateString();
}
