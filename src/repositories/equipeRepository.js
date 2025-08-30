import { connection } from "../connection.js";

export async function listarEquipe() {
    const comando = `
    SELECT * 
        FROM jogadores
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirJogador(novoJogador) {
    const comando = `
    INSERT INTO jogadores
                (nick_jg, plataforma, jogo_main, nr_fans, dt_entrada, nacionalidade)
        VALUES(?, ?, ?, ?, ?, ?)
    `

    const [info] = await connection.query(comando, [
        novoJogador.nick_jg,
        novoJogador.plataforma,
        novoJogador.jogo_main,
        novoJogador.nr_fans,
        novoJogador.dt_entrada,
        novoJogador.nacionalidade
    ])
    return info.insertId;
}