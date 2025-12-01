const Transacao = require('../models/transacao');

const TransacaoController = {
    
    // Funcionalidade 1: Criar nova transação (POST)
    create: async (req, res) => {
        try {
            const transacao = {
                titulo: req.body.titulo,
                tipo: req.body.tipo,
                valor: req.body.valor,
            };

            // Cria no Banco de Dados
            const response = await Transacao.create(transacao);
            
            res.status(201).json({ response, msg: "Transação criada com sucesso!" });
        } catch (error) {
            console.log(error);
            // Aqui está o log de erro detalhado que adicionamos
            res.status(500).json({ msg: "Erro ao criar transação.", erro: error.message });
        }
    },

    // Funcionalidade 2: Listar todas (GET)
    getAll: async (req, res) => {
        try {
            // Busca tudo no banco
            const transacoes = await Transacao.find();
            
            res.json(transacoes);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao buscar transações." });
        }
    }
};

module.exports = TransacaoController;