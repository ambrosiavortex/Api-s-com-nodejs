import { connection } from "../connection.js";

export async function listarFilmes() {
    const comando = `
    SELECT * 
        FROM filmes
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirFilme(novoFilme) {
    const comando = `
    INSERT INTO filmes
                (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao)
        VALUES (?, ?, ?, ?, ?, ?)    
    `

    const [info] = await connection.query(comando, [
        novoFilme.titulo,
        novoFilme.ano_lancamento,
        novoFilme.genero,
        novoFilme.duracao_minutos,
        novoFilme.diretor,
        novoFilme.avaliacao
    ])
    return info.insertId;
}