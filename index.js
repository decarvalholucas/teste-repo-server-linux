const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define o diretório de conteúdo estático (arquivos públicos)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/victor', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
