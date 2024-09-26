    const express = require('express');
    const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    const cors = require('cors');
    const openaiRoutes = require('./routes/openai');

    dotenv.config();

    const app = express();

    // Middleware CORS
    app.use(cors());  // Habilita CORS para todas as requisições

    app.use(express.json());

    // Conexão com o MongoDB
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => console.log('Erro ao conectar ao MongoDB:', error));

    // Rotas
    app.use('/api/openai', openaiRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    });
