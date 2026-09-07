import axios from 'axios';

/* "stack recomendado" pro seu seed.ts: process.loadEnvFile (ou dotenv) 
+ fetch nativo + try/catch + Zod pra validar o JSON 
— tudo sem instalar nenhuma dependência nova além do que o projeto já usa. 
*/

// axios equivalente ao requests

process.loadEnvFile()
let dnd_url = process.env("DND_BASE_URL") // "https://www.dnd5eapi.co"

export async function getdndapi() {
    try {
        const response = await axios.get(dnd_url + "/api/2014/spells");
        console.log(response.data);
    } catch (error) {
        console.log('Error fetching data:', error.message);
    }
}

getdndapi()

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