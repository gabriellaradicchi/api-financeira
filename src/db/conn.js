const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect(process.env.DB_URL);
        
        console.log("Banco de dados conectado com sucesso!");
    } catch (error) {
        console.log(`Erro ao conectar: ${error}`);
    }
}

module.exports = main;