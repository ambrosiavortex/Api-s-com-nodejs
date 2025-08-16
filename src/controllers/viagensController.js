import * as repo from '../repositories/viagensRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/viagens', async (req, resp) => {
    let registros = repo.listarViagens();
    resp.send(registros);
})