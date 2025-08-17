import * as repo from '../repositories/estadosRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/estados', async (req, resp) => {
    let registros = await repo.listarEstados();
    resp.send(registros);
})

endpoints.post('/estados', async (req, resp) => {
    let novoEstado = req.body;

    let id = await repo.inserirEstado(novoEstado);
    resp.send({ novoId: id });
})

export default endpoints;