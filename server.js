const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve todos os arquivos estáticos (HTML, CSS, PDF, etc.)
app.use(express.static(path.join(__dirname)));

// Rota raiz → index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Portal rodando na porta ${PORT}`);
});
