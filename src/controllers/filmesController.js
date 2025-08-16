import * as repo from '../repositories/filmesRepository.js';

import { Router } from 'express'; 
const endpoints = Router();

endpoints.get('/filmes', async (req, resp) => {
    let registros = await repo.listarFilmes();
    resp.send(registros);
})

endpoints.post('/filmes', async (req, resp) => {
    let novoFilme = req.body;

    let id = await repo.inserirFilme(novoFilme);
    resp.send({ novoId: id });
})

export default endpoints;