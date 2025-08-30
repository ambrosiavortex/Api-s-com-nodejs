import { connection } from "../connection.js";

export async function listarTenis() {
    const comando = `
    SELECT *
        FROM tenis
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirTenis(novoTenis) {
    const comando = `
    INSERT INTO tenis
                (nome, marca, cor, tamanho, preco, categoria, estoque)
        VALUES(?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await connection.query(comando, [
        novoTenis.nome,
        novoTenis.marca,
        novoTenis.cor,
        novoTenis.tamanho,
        novoTenis.preco,
        novoTenis.categoria,
        novoTenis.estoque
    ])
    return info.insertId;
}