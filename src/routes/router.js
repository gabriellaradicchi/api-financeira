const router = require('express').Router();
const transacaoController = require('../controllers/transacaocontroller');


router.route('/transacoes')
    .post((req, res) => transacaoController.create(req, res))
    .get((req, res) => transacaoController.getAll(req, res));


router.route('/transacoes/:id')
    .delete((req, res) => transacaoController.delete(req, res))
    .put((req, res) => transacaoController.update(req, res));

module.exports = router;