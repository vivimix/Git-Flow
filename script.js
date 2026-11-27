const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || telefone === "" || senha === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Por favor, preencha todos os campos!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite um e-mail válido!";
        return;
    }

    if (senha.length < 6) {
        mensagem.style.color = "red";
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    formulario.reset();
});