import { connection } from "../connection.js";

export async function listarLivros() {
    const comando = `
    SELECT * 
        FROM livros
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirLivro(novoLivro) {
    const comando = `
    INSERT INTO livros
                (titulo, autor, ano_publicacao, genero, editora, preco)
        VALUES (?, ?, ?, ?, ?, ?)    
    `

    const [info] = await connection.query(comando, [
        novoLivro.titulo,
        novoLivro.autor,
        novoLivro.ano_publicacao,
        novoLivro.genero,
        novoLivro.editora,
        novoLivro.preco
    ])
    return info.insertId;
}