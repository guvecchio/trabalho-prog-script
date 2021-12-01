const controller = require('../controllers/contaReceberControllers.js');


server.get('/contaReceber', controller.contaReceberGetAll)
server.get('/contaReceber/:codigo', controller.contaReceberGetById)

server.put('/contaReceber/:codigo', controller.contaReceberEditar)
server.post('/contaReceber', controller.contaReceberNovo)

