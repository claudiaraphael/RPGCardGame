// ==========================================================
// Tickets: cria e lista os tickets do próprio usuário logado.
// ==========================================================
// Precisa do token salvo por login.js (mesma chave de localStorage).

const URL_BASE_API = "http://localhost:3000";
const CHAVE_TOKEN = "rpgcardgame_token";

const avisoLogin = document.getElementById("aviso-login");
const formTicket = document.getElementById("form-ticket");
const mensagemStatus = document.getElementById("mensagem-status");
const corpoTabela = document.getElementById("corpo-tabela-tickets");

function tokenSalvo() {
    return localStorage.getItem(CHAVE_TOKEN);
}

const ROTULOS_TIPO = {
    feature: "Sugestão de feature",
    bug: "Bug",
    support: "Suporte",
};

const ROTULOS_STATUS = {
    open: "Aberto",
    in_progress: "Em andamento",
    resolved: "Resolvido",
    closed: "Fechado",
};

async function carregarMeusTickets() {
    const token = tokenSalvo();

    if (!token) {
        avisoLogin.hidden = false;
        formTicket.hidden = true;
        return;
    }

    try {
        const resposta = await fetch(`${URL_BASE_API}/tickets/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (resposta.status === 401) {
            avisoLogin.hidden = false;
            formTicket.hidden = true;
            return;
        }

        if (!resposta.ok) {
            throw new Error(`Backend respondeu ${resposta.status}`);
        }

        const dados = await resposta.json();
        renderizarTabela(dados.tickets);
    } catch (erro) {
        console.error(erro);
        mensagemStatus.textContent = "Não foi possível carregar os tickets.";
    }
}

function renderizarTabela(tickets) {
    corpoTabela.replaceChildren();

    if (tickets.length === 0) {
        const linha = document.createElement("tr");
        const celula = document.createElement("td");
        celula.colSpan = 4;
        celula.textContent = "Você ainda não abriu nenhum ticket.";
        linha.appendChild(celula);
        corpoTabela.appendChild(linha);
        return;
    }

    for (const ticket of tickets) {
        const linha = document.createElement("tr");

        const celulaTipo = document.createElement("td");
        celulaTipo.textContent = ROTULOS_TIPO[ticket.type] ?? ticket.type;

        const celulaTitulo = document.createElement("td");
        celulaTitulo.textContent = ticket.title;

        const celulaStatus = document.createElement("td");
        celulaStatus.textContent = ROTULOS_STATUS[ticket.status] ?? ticket.status;

        const celulaData = document.createElement("td");
        celulaData.textContent = new Date(ticket.createdAt).toLocaleString("pt-BR");

        linha.append(celulaTipo, celulaTitulo, celulaStatus, celulaData);
        corpoTabela.appendChild(linha);
    }
}

formTicket.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const token = tokenSalvo();
    if (!token) {
        avisoLogin.hidden = false;
        return;
    }

    mensagemStatus.textContent = "Enviando...";

    try {
        const resposta = await fetch(`${URL_BASE_API}/tickets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                type: document.getElementById("ticket-tipo").value,
                title: document.getElementById("ticket-titulo").value,
                description: document.getElementById("ticket-descricao").value,
            }),
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            mensagemStatus.textContent = dados.message ?? dados.error ?? "Não foi possível enviar o ticket.";
            return;
        }

        mensagemStatus.textContent = "Ticket enviado.";
        formTicket.reset();
        carregarMeusTickets();
    } catch (erro) {
        console.error(erro);
        mensagemStatus.textContent = "Não foi possível contatar o backend. Ele está rodando em localhost:3000?";
    }
});

carregarMeusTickets();
