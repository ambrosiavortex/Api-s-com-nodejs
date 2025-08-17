import { connection } from "./connection.js";

export async function listarEstados() {
    const comando = ` 
    SELECT * 
        FROM tb_estados
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirEstado(novoEstado) {
    const comando = `
    INSERT INTO tb_estados
                (nm_estado, qtd_populacao, km_quadrado, bt_litoral)
        VALUES(?, ?, ?, ?)
    `
    
    const [info] = await connection.query(comando, [
        novoEstado.nm_estado,
        novoEstado.qtd_populacao,
        novoEstado.km_quadrado,
        novoEstado.bt_litoral,
    ])
    return info.insertId;
}