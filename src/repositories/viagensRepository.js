import { connection } from "./connection.js";

export async function listarViagens() {
    const comando = `
    SELECT * 
        FROM lugares
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirDestino() {
    
}