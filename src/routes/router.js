const router = require('express').Router();
const transacaoController = require('../controllers/transacaocontroller');

router.route('/transacoes')
    .post((req, res) => transacaoController.create(req, res));

router.route('/transacoes')
    .get((req, res) => transacaoController.getAll(req, res));

module.exports = router;