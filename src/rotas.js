import livrariaController from './controllers/livrariaController.js';
import filmesController from './controllers/filmesController.js';
import jogosController from './controllers/jogosController.js';
import musicasController from './controllers/musicasController.js';
import carroController from './controllers/carroController.js';
import viagensController from './controllers/viagensController.js';
import estadosController from './controllers/estadosController.js';
import equipeController from './controllers/equipeController.js';
import pizzariaController from './controllers/pizzariaController.js';
import tenisController from './controllers/tenisController.js';

export function adicionarRotas(api){
    api.use(livrariaController);
    api.use(filmesController);
    api.use(jogosController);
    api.use(musicasController);
    api.use(carroController);
    api.use(viagensController);
    api.use(estadosController);
    api.use(equipeController);
    api.use(pizzariaController);
    api.use(tenisController);
}
