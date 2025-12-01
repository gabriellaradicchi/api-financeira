const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app'); 


describe('Testes da API Financeira', () => {

    // Teste 1: Tenta CRIAR uma transação
    it('Deve criar uma nova transação de entrada', async () => {
        const res = await request(app).post('/api/transacoes').send({
            titulo: "Salário Mensal",
            valor: 5000,
            tipo: "entrada"
        });

        // --- PARTE NOVA PARA DESCOBRIR O ERRO ---
        if (res.statusCode !== 201) {
            console.log("❌ ERRO DETALHADO DA API:", res.body);
        }
        // ----------------------------------------

        expect(res.statusCode).toEqual(201);
        expect(res.body.response.titulo).toEqual("Salário Mensal");
    });
    });

    it('Deve listar todas as transações', async () => {
        const res = await request(app).get('/api/transacoes');

        expect(res.statusCode).toEqual(200);
       
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });