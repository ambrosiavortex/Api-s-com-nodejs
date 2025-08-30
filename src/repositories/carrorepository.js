import { connection } from "../connection.js";

export async function listarCarros() {
    const comando = `
    SELECT * 
        FROM tb_carro
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirCarro(novoCarro) {
    const comando = `
    INSERT INTO tb_carro
                (ds_marca, ds_modelo, nr_ano, vl_preco, img_carro, dt_inclusao)
        VALUES(?, ?, ?, ?, ?, ?)
    `

    const [info] = await connection.query(comando, [
        novoCarro.ds_marca,
        novoCarro.ds_modelo,
        novoCarro.nr_ano,
        novoCarro.vl_preco,
        novoCarro.img_carro,
        novoCarro.dt_inclusao,
    ])
    return info.insertId;
}