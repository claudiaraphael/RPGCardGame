// ==========================================================
// Índice de monstros: busca a lista no backend e permite filtrar por nome
// ==========================================================
// GET /monsters e GET /monsters/:index não passam pelo dnd_cache (SQLite) —
// o backend bate direto na D&D API externa a cada request, decisão
// documentada no CLAUDE.md pra essa landing page especificamente.

// URL base num lugar só (checklist do to-do.md), pra trocar fácil quando o
// front for pro Docker (nginx) e o backend continuar em localhost:3000.
const URL_BASE_API = "http://localhost:3000";

// Guarda a lista completa recebida do backend, pra buscar sem precisar
// refazer o fetch a cada letra digitada (a API não tem endpoint de busca).
let listaDeMonstros = [];

const formBusca = document.getElementById("form-busca");
const campoBusca = document.getElementById("campo-busca");
const mensagemStatus = document.getElementById("mensagem-status");
const corpoTabela = document.getElementById("corpo-tabela-monstros");
const secaoDetalhe = document.getElementById("detalhe-monstro");

async function carregarMonstros() {
    mensagemStatus.textContent = "Carregando monstros...";

    try {
        const resposta = await fetch(`${URL_BASE_API}/monsters`);

        if (!resposta.ok) {
            throw new Error(`Backend respondeu ${resposta.status}`);
        }

        listaDeMonstros = await resposta.json();
        renderizarTabela(listaDeMonstros);
        mensagemStatus.textContent = `${listaDeMonstros.length} monstros carregados.`;
    } catch (erro) {
        console.error(erro);
        mensagemStatus.textContent = "Não foi possível carregar os monstros. O backend está rodando?";
    }
}

function renderizarTabela(monstros) {
    // Limpa a tabela sem innerHTML (regra do CLAUDE.md do front: dado
    // externo só vai pro DOM via textContent/createElement).
    corpoTabela.replaceChildren();

    if (monstros.length === 0) {
        const linha = document.createElement("tr");
        const celula = document.createElement("td");
        celula.colSpan = 3;
        celula.textContent = "Nenhum monstro encontrado.";
        linha.appendChild(celula);
        corpoTabela.appendChild(linha);
        return;
    }

    for (const monstro of monstros) {
        const linha = document.createElement("tr");

        const celulaNome = document.createElement("td");
        celulaNome.textContent = monstro.name;

        const celulaIndice = document.createElement("td");
        celulaIndice.textContent = monstro.index;

        const celulaDetalhe = document.createElement("td");
        const botaoDetalhe = document.createElement("button");
        botaoDetalhe.type = "button";
        botaoDetalhe.textContent = "Ver detalhes";
        botaoDetalhe.addEventListener("click", () => mostrarDetalhe(monstro.index));
        celulaDetalhe.appendChild(botaoDetalhe);

        linha.append(celulaNome, celulaIndice, celulaDetalhe);
        corpoTabela.appendChild(linha);
    }
}

async function mostrarDetalhe(index) {
    try {
        const resposta = await fetch(`${URL_BASE_API}/monsters/${encodeURIComponent(index)}`);

        if (!resposta.ok) {
            throw new Error(`Backend respondeu ${resposta.status}`);
        }

        const monstro = await resposta.json();

        document.getElementById("detalhe-nome").textContent = monstro.name;
        document.getElementById("detalhe-tamanho").textContent = monstro.size;
        document.getElementById("detalhe-tipo").textContent = monstro.type;
        document.getElementById("detalhe-alinhamento").textContent = monstro.alignment;
        document.getElementById("detalhe-hp").textContent = monstro.hit_points;
        // armor_class é um array (ex: [{ type: "natural", value: 15 }]) —
        // pega o primeiro valor, que cobre o caso comum.
        document.getElementById("detalhe-ca").textContent = monstro.armor_class?.[0]?.value ?? "?";

        secaoDetalhe.hidden = false;
    } catch (erro) {
        console.error(erro);
        mensagemStatus.textContent = "Não foi possível carregar os detalhes desse monstro.";
    }
}

// Filtro por nome é feito no cliente, sobre a lista já carregada — a D&D
// API não tem um endpoint de busca por texto.
formBusca.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const termo = campoBusca.value.trim().toLowerCase();

    if (termo === "") {
        renderizarTabela(listaDeMonstros);
        return;
    }

    const filtrados = listaDeMonstros.filter((monstro) =>
        monstro.name.toLowerCase().includes(termo)
    );
    renderizarTabela(filtrados);
});

carregarMonstros();
