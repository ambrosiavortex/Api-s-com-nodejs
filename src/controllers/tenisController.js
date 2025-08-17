import * as repo from '../repositories/tenisRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/tenis', async (req, resp) => {
    let registros = await repo.listarTenis();
    resp.send(registros);
})

endpoints.post('/tenis', async (req, resp) => {
    let novoTenis = req.body;

    let id = await repo.inserirTenis(novoTenis);
    resp.send({ novoId: id });
})

export default endpoints;