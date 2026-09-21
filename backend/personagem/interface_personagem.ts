interface Personagem {
    id: number;
    index: string;
    nome: string;
    hp: number;
    mp: number;
    skill_slots: {
        type: string;
        [index: number]: string;
    };
    spells: {
        type: string;
        [index: number]: string;
    };
}

async function criarPersonagem(
    _req: unknown,
    _res: unknown,
): Promise<Personagem> {
    throw new Error('Implementar criação do personagem');
}

