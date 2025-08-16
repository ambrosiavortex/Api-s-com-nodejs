import * as repo from '../repositories/carrorepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/carros', async (req, resp) => {
    let registros = await repo.listarCarros();
    resp.send(registros);
})

endpoints.post('/carros', async (req, resp) => {
    let novoCarro = req.body;

    let id = await repo.inserirCarro(novoCarro);
    resp.send({ novoId: id });
})

export default endpoints;