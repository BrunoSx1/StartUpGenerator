    const express = require('express');
    const axios = require('axios');
    const Startup = require('../models/Startup'); // Importa o modelo de Startup

    const router = express.Router();


        router.post('/generate', async (req, res) => {
            const { sector, problem, technology, market } = req.body;
        
            if (!sector || !problem || !technology || !market) {
            return res.status(400).json({ error: 'Preencha todos os campos necessários.' });
            }
        
            try {
            // Em vez de chamar a API da OpenAI, Eu retornei um exemplo temporário
            const idea = `Startup gerada no setor de ${sector}, resolvendo o problema de ${problem} com o uso de ${technology}. O mercado-alvo é ${market}.`;
        
            // Simulando uma resposta bem-sucedida
            res.status(201).json({ idea, message: 'Startup gerada com sucesso (resposta simulada).' });
            } catch (error) {
            console.error('Erro ao gerar a startup:', error.message);
            res.status(500).json({ error: 'Erro ao gerar a startup (resposta simulada).' });
            }
        });
        
      //Versão com a chamada da API da OpenAI
    // router.post('/generate', async (req, res) => {
    // const { sector, problem, technology, market } = req.body;

    // if (!sector || !problem || !technology || !market) {
    //     return res.status(400).json({ error: 'Preencha todos os campos necessários.' });
    // }

    // try {
    //     const response = await axios.post(
    //     'https://api.openai.com/v1/completions',
    //     {
    //         model: 'gpt-3.5-turbo',
    //         prompt: `Generate a startup idea in the field of ${sector} that solves the problem "${problem}" using ${technology}. The target market is ${market}. Provide a name, description, and business model.`,
    //         max_tokens: 100,
    //         temperature: 0.7,
    //     },
    //     {
    //         headers: {
    //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //         },
    //     }
    //     );

    //     const idea = response.data.choices[0].text;

    //     // Salva a ideia no banco de dados
    //     const startup = new Startup({
    //     sector,
    //     problem,
    //     technology,
    //     market,
    //     idea,
    //     });

    //     await startup.save();

    //     res.status(201).json({ idea, message: 'Startup gerada e salva com sucesso!' });
    // } catch (error) {
    //     console.error('Erro ao gerar a startup:', error.response ? error.response.data : error.message);
    //     res.status(500).json({ error: 'Erro ao gerar a startup.' });
    // }
    // });

    module.exports = router;
