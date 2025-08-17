import { connection } from "./connection.js";

export async function listarMenu() {
    const comando = `
    SELECT *
        FROM tb_menu
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirPizza(novaPizza) {
    const comando = `
    INSERT INTO tb_menu
                (nm_produto, nr_preco, ds_produto, bt_promocao, qtd_estoque)
        VALUES(?, ?, ?, ?, ?)
    `

    const [info] = await connection.query(comando, [
        novaPizza.nm_produto,
        novaPizza.nr_preco,
        novaPizza.ds_produto,
        novaPizza.bt_promocao,
        novaPizza.qtd_estoque
    ])
    return info.insertId;
}