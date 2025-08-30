import { connection } from "../connection.js";

export async function listarViagens() {
    const comando = `
    SELECT * 
        FROM lugares
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirDestino(novoDestino) {
    const comando = `
    INSERT INTO lugares
                (nm_lugar, nm_pais, dt_viagem, dias_viagem, bt_parcelado)
        VALUES(?, ?, ?, ?, ?)
    `

    const [info] = await connection.query(comando, [ 
        novoDestino.nm_lugar,
        novoDestino.nm_pais,
        novoDestino.dt_viagem,
        novoDestino.dias_viagem,
        novoDestino.bt_parcelado
    ])
    return info.insertId;
}