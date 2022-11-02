const express = require('express');//Insere o "express" no código
const app = express();//Armazena o "express" em uma variável
const handlebars = require('express-handlebars');//Insere o "handlebars" no código
const bodyParser = require('body-parser');//Insere o "bodyParser" no código
const Sugest = require('./models/Sugest');//Armazena as tabelas do banco de dados criadas no arquivo "Sugest.js"
const ip = require("ip");

app.use(express.static('public'));//Deixa a pasta "public" pública 
app.use(express.static('imagens'));//Deixa a pasta de imagens pública

//Configurações para o handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,

        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cria a rota da página principal e renderiza o arquivo "index.handlebars"
app.get("/", function(req, res){
    res.render('index');
});

//Cria a rota da lista de sugestões, renderiza o arquivo "sugestões.handlebars" e cria um objeto que armazena os valores que o usuário envia para oo banco de dados
app.get("/sugestoes", function(req, res){
    if(req.connection.remoteAddress == ip.address()){
        Sugest.findAll().then(function(posts){
            res.render('sugestoes', {posts: posts});
        });
    } else {
        res.redirect('/');
    }
});

//Armazena os dados que vão ser cadastrados pelo usuário em objetos, e os envia para o banco de dados através da rota principal. Também foi feita uma verificação para que o preenchimento do formulário seja obrigatório
app.post("/", function(req, res){
    if(req.body.nome != null && req.body.email != null && req.body.sugest_usr != null){
        Sugest.create({
            nome: req.body.nome,
            email: req.body.email,
            sugestao: req.body.sugest_usr
        }).then(function(){
            console.log("Dados do usuário recebidos com sucesso!");
        }).catch(function(erro){
            console.log("Erro ao receber dados do usuário! Erro:" + erro);
        });
    }
});

app.get('/petroleo', function(req, res){
    res.render('petroleo');
})

app.get('/energias_renovaveis', function(req, res){
    res.render('energias_renovaveis');
})

app.get('/hidreletricas', function(req, res){
    res.render('hidreletricas');
})

app.get('/termeletrica', function(req, res){
    res.render('termeletrica');
})

app.get('/gas_natural', function(req, res){
    res.render('gas_natural');
})

//Roda toda a aplicação na rede local usando a porta "8080"
app.listen("8080", '10.0.17.143', function(){
    console.log("Servidor rodando em http://localhost:8080");
}); //Está sempre tem que ser a última linha do código de um projeto com express