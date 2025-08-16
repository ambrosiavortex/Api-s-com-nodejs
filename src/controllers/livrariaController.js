import * as repo from '../repositories/livrariaRepository.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/livros', async (req, resp) => {
    let registros = await repo.listarLivros();
    resp.send(registros);
})

endpoints.post('/livros', async (req, resp) => {
    let novoLivro = req.body;

    let id = await repo.inserirLivro(novoLivro);
    resp.send({ novoId: id });
})

export default endpoints;