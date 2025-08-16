import { connection } from "./connection.js";

export async function listarJogos() {
    const comando = `
    SELECT * 
        FROM jogos_videogame
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirJogo(novoJogo) {
    const comando = `
    INSERT INTO jogos_videogame 
                (titulo, genero, plataforma, data_lancamento, preco, classificacao_etaria, desenvolvedora)
        VALUES(?, ?, ?, ?, ?, ?, ?)
    `

     const [info] = await connection.query(comando, [
        novoJogo.titulo,
        novoJogo.genero,
        novoJogo.plataforma,
        novoJogo.data_lancamento,
        novoJogo.preco,
        novoJogo.classificacao_etaria,
        novoJogo.desenvolvedora
    ])
    return info.insertId;
}