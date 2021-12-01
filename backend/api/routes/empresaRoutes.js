const controller = require('../controllers/empresaControllers.js');

//server.get('/empresa', controller.empresaMenu)

server.get('/empresa', controller.empresaGetAll)
server.get('/empresa/:codigo', controller.empresaGetById)

server.put('/empresa/:codigo', controller.empresaEditar)
server.post('/empresa', controller.empresaNovo)

