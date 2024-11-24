const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/seriados', (req, res) => {
res.json(seriados);
});


app.get('/seriados/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const seriado = seriados.find(c => c.id === id);
    if (seriado) {
        res.json(seriado);
    } else {
        res.status(404).json({ error: "Seriado não encontrado" });
    }
});

app.get('/seriados/:nome', (req, res) => {
const nome = req.params.nome.trim();
const seriado = seriados.find(c => c.nome.toLowerCase() == nome.toLowerCase());
if (seriado) {
res.json(seriado);
} else {
res.status(404).json({ error: "Seriado não encontrado" });
}
});

app.post('/seriados', (req, res) => {
const novoContato = {
id: seriados.length + 1,
nome: req.body.nome,
atores: req.body.atores,
temporadas: req.body.temporadas,
episódios: req.body.episódios
};
seriados.push(novoContato);
res.status(201).json(novoContato);
});

app.put('/seriados/:id', (req, res) => {
const id = parseInt(req.params.id);
const seriado = seriados.find(c => c.id === id);
if (seriado) {
seriado.nome = req.body.nome || seriado.nome;
seriado.atores = req.body.atores || seriado.atores;
seriado.temporadas = req.body.temporadas || seriado.temporadas;
seriado.episódios = req.body.episódios || seriado.episódios;
res.json(seriado);
} else {
res.status(404).json({ error: "seriado não encontrado" });
}
});

app.delete('/seriados/:id', (req, res) => {
const id = parseInt(req.params.id);
const index = seriados.findIndex(c => c.id === id);
if (index !== -1) {
seriados.splice(index, 1);
res.status(204).send();
} else {
res.status(404).json({ error: "Seriado não encontrado" });
}
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});

let seriados = [
    { 
        id: 1, 
        nome: "Stranger Things", 
        categoria: "Ficção Científica, Mistério", 
        atores: ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
        temporadas: 4, 
        episódios: 34 
    },
    { 
        id: 2, 
        nome: "Breaking Bad", 
        categoria: "Crime, Drama", 
        atores: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"], 
        temporadas: 5, 
        episódios: 62 
    },
    { 
        id: 3, 
        nome: "Friends", 
        categoria: "Comédia, Romance", 
        atores: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"], 
        temporadas: 10, 
        episódios: 236 
    },
    { 
        id: 4, 
        nome: "The Mandalorian", 
        categoria: "Ação, Aventura, Fantasia", 
        atores: ["Pedro Pascal", "Gina Carano", "Carl Weathers"], 
        temporadas: 3, 
        episódios: 24 
    },
    { 
        id: 5, 
        nome: "Game of Thrones", 
        categoria: "Aventura, Drama, Fantasia", 
        atores: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"], 
        temporadas: 8, 
        episódios: 73 
    },
    { 
        id: 6, 
        nome: "The Crown", 
        categoria: "Biografia, Drama, História", 
        atores: ["Claire Foy", "Olivia Colman", "Imelda Staunton"], 
        temporadas: 6, 
        episódios: 60 
    },
    { 
        id: 7, 
        nome: "The Office", 
        categoria: "Comédia", 
        atores: ["Steve Carell", "Rainn Wilson", "John Krasinski"], 
        temporadas: 9, 
        episódios: 201 
    },
    { 
        id: 8, 
        nome: "Black Mirror", 
        categoria: "Drama, Sci-Fi, Thriller", 
        atores: ["Daniel Lapaine", "Hannah John-Kamen", "Jesse Plemons"], 
        temporadas: 5, 
        episódios: 22 
    },
    { 
        id: 9, 
        nome: "Sherlock", 
        categoria: "Crime, Drama, Mistério", 
        atores: ["Benedict Cumberbatch", "Martin Freeman", "Mark Gatiss"], 
        temporadas: 4, 
        episódios: 13 
    },
    { 
        id: 10, 
        nome: "Narcos", 
        categoria: "Crime, Drama, História", 
        atores: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"], 
        temporadas: 3, 
        episódios: 30 
    }
];

