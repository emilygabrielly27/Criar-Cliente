
import express from 'express';

// Criando o aplicativo
const app = express();

// Definindo a porta do servidor
const porta = 3000;

// Permite receber informações em formato JSON
app.use(express.json());

// ROTA 1: Mostrar informações sobre a API
app.get("/sobre", (req, res) => {
    res.status(200).json({
        mensagem: "api sobre cadastro de produtos"
    });
});

// ROTA 2: Dar bom dia para uma pessoa
app.get("/saudacao/:nome", (req, res) => {

    // Pegando o nome que foi colocado no endereço
    const nome = req.params.nome;

    res.json({
        mensagem: `bom dia ${nome}`
    });
});

// ROTA 3: Pesquisar um produto pelo ID
app.get("/produto/:id", (req, res) => {

    // Pegando o ID do produto
    const id = req.params.id;

    res.json({
        acao: "pesquisa por produto",
        id: id
    });
});

// ROTA 4: Cadastrar produto
app.post("/produto", (req, res) => {
    res.json({
        verbo: "POST",
        acao: "Cadastrar Cliente"
    });
});

// ROTA 5: Substituir um produto
app.put("/produto", (req, res) => {
    res.json({
        verbo: "PUT",
        acao: "Substituir o Recurso completamente"
    });
});

// ROTA 6: Deletar um produto pelo ID
app.delete("/produto/:id", (req, res) => {

    // Pegando o ID do produto
    const id = req.params.id;

    res.json({
        id: id,
        verbo: "Delete",
        acao: "Deletar o Recurso"
    });
});

// INICIAR O SERVIDOR
app.listen(porta, () => {
    console.log("servidor no ar");
    console.log("http://localhost:" + porta);
});
