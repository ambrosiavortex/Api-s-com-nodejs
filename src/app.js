import { adicionarRotas } from "./rotas.js";

import express from 'express';
const api = express();
api.use(express.json());

adicionarRotas(api);

api.listen(6100, () => console.log('API subiu!'));