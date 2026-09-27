// ==========================================================
// LANDING PAGE: login/registro + criação de personagem
// ==========================================================
// O índice de monstros de verdade mora em indexMonstros/ (link no
// index.html) — esse script não busca monstro nenhum, só cuida de auth
// (POST /auth/login, /auth/register) e do CRUD de personagem
// (backend/personagem/), que exige o token JWT recebido no login.

// URL base num lugar só (mesma convenção do resto do front).
const API_BASE_URL = "http://localhost:3000";

// O token só precisa sobreviver a um F5 da página, não entre sessões
// diferentes — por isso sessionStorage, não localStorage.
function salvarToken(token) {
    sessionStorage.setItem("accessToken", token);
}
function obterToken() {
    return sessionStorage.getItem("accessToken");
}
function limparToken() {
    sessionStorage.removeItem("accessToken");
}

const formLogin = document.getElementById("form-login");
const formRegistro = document.getElementById("form-registro");
const formPersonagem = document.getElementById("form-personagem");
const authStatus = document.getElementById("auth-status");
const personagemStatus = document.getElementById("personagem-status");
const secaoAuth = document.getElementById("auth-section");
const secaoLogada = document.getElementById("area-logada");
const usuarioLogadoEl = document.getElementById("usuario-logado");
const listaPersonagens = document.getElementById("lista-personagens");
const botaoLogout = document.getElementById("botao-logout");

function exibirAreaLogada(username) {
    secaoAuth.hidden = true;
    secaoLogada.hidden = false;
    usuarioLogadoEl.textContent = username;
}

function exibirAreaDeLogin() {
    secaoAuth.hidden = false;
    secaoLogada.hidden = true;
}

async function login(email, senha) {
    const resposta = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: senha }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
        throw new Error(dados.message ?? "Falha no login");
    }

    salvarToken(dados.accessToken);
    exibirAreaLogada(dados.user.username);
    carregarPersonagens();
}

formLogin.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    authStatus.textContent = "Entrando...";

    try {
        await login(
            document.getElementById("login-email").value,
            document.getElementById("login-senha").value,
        );
        authStatus.textContent = "";
        formLogin.reset();
    } catch (erro) {
        authStatus.textContent = erro.message;
    }
});

formRegistro.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    authStatus.textContent = "Criando conta...";

    const email = document.getElementById("registro-email").value;
    const username = document.getElementById("registro-username").value;
    const senha = document.getElementById("registro-senha").value;

    try {
        const resposta = await fetch(`${API_BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, password: senha }),
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.message ?? "Falha ao criar conta");
        }

        // /auth/register não devolve token (só cria o usuário) — loga em
        // seguida com as mesmas credenciais pra não pedir duas vezes.
        await login(email, senha);
        authStatus.textContent = "";
        formRegistro.reset();
    } catch (erro) {
        authStatus.textContent = erro.message;
    }
});

botaoLogout.addEventListener("click", () => {
    limparToken();
    exibirAreaDeLogin();
});

async function carregarPersonagens() {
    try {
        const resposta = await fetch(`${API_BASE_URL}/personagens`, {
            headers: { Authorization: `Bearer ${obterToken()}` },
        });

        if (!resposta.ok) {
            throw new Error(`Backend respondeu ${resposta.status}`);
        }

        const { personagens } = await resposta.json();
        renderizarPersonagens(personagens);
    } catch (erro) {
        console.error(erro);
        personagemStatus.textContent = "Não foi possível carregar seus personagens.";
    }
}

function renderizarPersonagens(personagens) {
    // textContent, não innerHTML: nome/raça/classe são texto livre digitado
    // pelo usuário, nunca deve ser interpretado como HTML.
    listaPersonagens.replaceChildren();

    if (personagens.length === 0) {
        const item = document.createElement("li");
        item.textContent = "Nenhum personagem criado ainda.";
        listaPersonagens.appendChild(item);
        return;
    }

    for (const personagem of personagens) {
        const item = document.createElement("li");
        item.textContent =
            `${personagem.nome} — ${personagem.raca} ${personagem.classe}, ` +
            `nível ${personagem.nivel} (HP ${personagem.hp}, MP ${personagem.mp})`;
        listaPersonagens.appendChild(item);
    }
}

formPersonagem.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    personagemStatus.textContent = "Criando personagem...";

    const corpo = {
        nome: document.getElementById("personagem-nome").value,
        raca: document.getElementById("personagem-raca").value,
        classe: document.getElementById("personagem-classe").value,
        nivel: Number(document.getElementById("personagem-nivel").value),
        hp: Number(document.getElementById("personagem-hp").value),
        mp: Number(document.getElementById("personagem-mp").value),
    };

    try {
        const resposta = await fetch(`${API_BASE_URL}/personagens`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${obterToken()}`,
            },
            body: JSON.stringify(corpo),
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.message ?? "Falha ao criar personagem");
        }

        personagemStatus.textContent = `Personagem "${dados.personagem.nome}" criado.`;
        formPersonagem.reset();
        carregarPersonagens();
    } catch (erro) {
        personagemStatus.textContent = erro.message;
    }
});

// Se já tiver token de uma sessão anterior (F5 na página), pula a tela de
// login — mas não sabemos o username sem chamar /auth/me, então busca ele.
async function tentarRetomarSessao() {
    const token = obterToken();
    if (!token) {
        return;
    }

    try {
        const resposta = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!resposta.ok) {
            throw new Error("Token expirado");
        }

        const { user } = await resposta.json();
        exibirAreaLogada(user.username);
        carregarPersonagens();
    } catch {
        limparToken();
    }
}

tentarRetomarSessao();
