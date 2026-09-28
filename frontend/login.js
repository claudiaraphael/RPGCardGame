// ==========================================================
// Login/registro: guarda o access token no localStorage pra outras
// páginas (tickets.js) reaproveitarem no header Authorization.
// ==========================================================

const URL_BASE_API = "http://localhost:3000";
// Mesma chave usada por tickets.js — se mudar aqui, mudar lá também.
const CHAVE_TOKEN = "rpgcardgame_token";
const CHAVE_USUARIO = "rpgcardgame_usuario";

const formLogin = document.getElementById("form-login");
const formRegistro = document.getElementById("form-registro");
const mensagemStatus = document.getElementById("mensagem-status");
const usuarioLogadoEl = document.getElementById("usuario-logado");
const usuarioNomeEl = document.getElementById("usuario-nome");
const btnSair = document.getElementById("btn-sair");

function salvarSessao(usuario, accessToken) {
    localStorage.setItem(CHAVE_TOKEN, accessToken);
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
    mostrarSessaoAtual();
}

function limparSessao() {
    localStorage.removeItem(CHAVE_TOKEN);
    localStorage.removeItem(CHAVE_USUARIO);
    mostrarSessaoAtual();
}

function mostrarSessaoAtual() {
    const usuarioSalvo = localStorage.getItem(CHAVE_USUARIO);

    if (!usuarioSalvo) {
        usuarioLogadoEl.hidden = true;
        return;
    }

    try {
        const usuario = JSON.parse(usuarioSalvo);
        usuarioNomeEl.textContent = usuario.username ?? usuario.email;
        usuarioLogadoEl.hidden = false;
    } catch {
        usuarioLogadoEl.hidden = true;
    }
}

formLogin.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    mensagemStatus.textContent = "Entrando...";

    try {
        const resposta = await fetch(`${URL_BASE_API}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: document.getElementById("login-email").value,
                password: document.getElementById("login-senha").value,
            }),
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            mensagemStatus.textContent = dados.message ?? "Não foi possível entrar.";
            return;
        }

        salvarSessao(dados.user, dados.accessToken);
        mensagemStatus.textContent = "Login feito com sucesso.";
        formLogin.reset();
    } catch (erro) {
        console.error(erro);
        mensagemStatus.textContent = "Não foi possível contatar o backend. Ele está rodando em localhost:3000?";
    }
});

formRegistro.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    mensagemStatus.textContent = "Criando conta...";

    try {
        const resposta = await fetch(`${URL_BASE_API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: document.getElementById("registro-email").value,
                username: document.getElementById("registro-username").value,
                password: document.getElementById("registro-senha").value,
            }),
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            mensagemStatus.textContent = dados.message ?? "Não foi possível criar a conta.";
            return;
        }

        // /auth/register não devolve token — loga em seguida com a mesma senha.
        const respostaLogin = await fetch(`${URL_BASE_API}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: document.getElementById("registro-email").value,
                password: document.getElementById("registro-senha").value,
            }),
        });
        const dadosLogin = await respostaLogin.json();

        if (!respostaLogin.ok) {
            mensagemStatus.textContent = "Conta criada. Faça login acima.";
            formRegistro.reset();
            return;
        }

        salvarSessao(dadosLogin.user, dadosLogin.accessToken);
        mensagemStatus.textContent = "Conta criada e login feito com sucesso.";
        formRegistro.reset();
    } catch (erro) {
        console.error(erro);
        mensagemStatus.textContent = "Não foi possível contatar o backend. Ele está rodando em localhost:3000?";
    }
});

btnSair.addEventListener("click", () => {
    limparSessao();
    mensagemStatus.textContent = "Você saiu.";
});

mostrarSessaoAtual();
