import * as repo from '../repositories/viagensRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/viagens', async (req, resp) => {
    let registros = await repo.listarViagens();
    resp.send(registros);
})

endpoints.post('/viagens', async (req, resp) => {
    let novoDestino = req.body;

    let id = await repo.inserirDestino(novoDestino);
    resp.send({ novoId: id });
})

export default endpoints;