import axios from 'axios'; // axios equivalente ao requests
import process from 'process';

/* 
"stack recomendado" pro seu seed.ts: process.loadEnvFile (ou dotenv) 
+ fetch nativo + try/catch + Zod pra validar o JSON 
*/

// todo: colocar o fucking banco de dados
// todo: modelar o jogo (ESTADOS:SAVES, TURNOS, BUILD, MAO, DECK... turnos, fases, etc) e criar seeds pra ele
// todo: pra começar o jogo tera so um turno, no qual o seu objetivo é ter uma build que mantenha seupersonagem vivo ate o fim e mate o monstro.
    // todo: modelar a build do personagem (armas, armaduras, magias, etc) e criar seeds pra elas
    // todo: modelar o personagem (classe, atributos etc) e criar seeds pra ele

    // todo: modelar a cartas: monstros, spells,
// todo: modelar outras entidades (monstros, classes, etc) e criar seeds pra elas


process.loadEnvFile();
const dnd_url = process.env.DND_BASE_URL
if (!dnd_url) {
    throw new Error("DND_BASE_URL não esta definida");
}

export async function getAllSpells() {
    try {
        const response = await axios.get(dnd_url + "/api/2014/spells")
        const spellIndexes = response.data
        return spellIndexes;
    } catch (error) {
        if (error instanceof Error) {
            console.log('Erro ao buscar dados da D&D API:', error.message);
        } else {
            console.log('Erro desconhecido ao buscar dados da D&D API');
        }
    }
}

getAllSpells()

// fetch nativo

/* Validar o Formato da Resposta
Zod no server.ts para validar payloads, o padrão idiomático é reaproveitar isso 
— criar um schema Zod pro shape que a D&D API devolve e usar .parse()/.safeParse() na resposta.
Isso te dá validação em runtime e o tipo TypeScript de graça (z.infer), 
sem duplicar uma interface manual. 
Segue exatamente o princípio que já está documentado no seu CLAUDE.md ("Zod como fonte única de verdade"
*/

// TRATAMENTO DE ERROS: padrão try/catch, checar response.ok, checar status code, checar response.data
// async functions
// checar response.ok

/*
Dois tipos de erro pra separar: erro de rede/timeout 
(o fetch/catch já pega) e erro de "resposta veio, mas status é ruim" 
(você precisa checar manualmente e lançar). 
*/