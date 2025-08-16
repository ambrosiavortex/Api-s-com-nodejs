import * as repo from '../repositories/musicasRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/musicas', async (req, resp) => {
    let registros = await repo.listarMusicas();
    resp.send(registros);
})

endpoints.post('/musicas', async (req, resp) => {
    let novaMusica = req.body;

    let id = await repo.inserirMusica(novaMusica);
    resp.send({ novoId: id })
})

export default endpoints;