import livrariaController from './controllers/livrariaController.js';
import filmesController from './controllers/filmesController.js';
import jogosController from './controllers/jogosController.js';

export function adicionarRotas(api){
    api.use(livrariaController);
    api.use(filmesController);
    api.use(jogosController);
}
