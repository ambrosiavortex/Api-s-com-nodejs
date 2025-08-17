import * as repo from '../repositories/equipeRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/equipe', async (req, resp) => {
    let registros = await repo.listarEquipe();
    resp.send(registros);
})

endpoints.post('/equipe', async (req, resp) => {
    let novoJogador = req.body;

    let id = await repo.inserirJogador(novoJogador);
    resp.send({ novoId: id });
})

export default endpoints;