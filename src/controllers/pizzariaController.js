import * as repo from '../repositories/pizzariaRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/pizzaria', async (req, resp) => {
    let registros = await repo.listarMenu();
    resp.send(registros);
})

endpoints.post('/pizzaria', async (req, resp) => {
    let novaPizza = req.body;

    let id = await repo.inserirPizza(novaPizza);
    resp.send({ novoId: id });
})

export default endpoints;