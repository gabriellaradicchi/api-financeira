const Transacao = require('../models/transacao');

const TransacaoController = {
    

    create: async (req, res) => {
        try {
            const response = await Transacao.create(req.body);
            res.status(201).json({ response, msg: "Transação criada!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao criar." });
        }
    },


    getAll: async (req, res) => {
        try {
            const transacoes = await Transacao.find();
            res.json(transacoes);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao buscar." });
        }
    },


    delete: async (req, res) => {
        try {
            const id = req.params.id; 
            const transacao = await Transacao.findByIdAndDelete(id);

            if (!transacao) {
                return res.status(404).json({ msg: "Transação não encontrada." });
            }

            res.status(200).json({ msg: "Transação excluída com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao excluir." });
        }
    },

   
    update: async (req, res) => {
        try {
            const id = req.params.id;
            
            const transacao = await Transacao.findByIdAndUpdate(id, req.body, { new: true });

            if (!transacao) {
                return res.status(404).json({ msg: "Transação não encontrada." });
            }

            res.status(200).json({ transacao, msg: "Transação atualizada!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao atualizar." });
        }
    }
};

module.exports = TransacaoController;