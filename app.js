const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sugest = require('./models/Sugest');

app.use(express.static('public'));
app.use(express.static('imagens'));

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render('index');
});

app.get("/sugestoes", function(req, res){
    Sugest.findAll().then(function(post){
        res.render('sugestoes', {posts: post});
    });
});

app.post("/", function(req, res){
    if(req.body.nome != null && req.body.email != null && req.body.sugest_usr != null){
        Sugest.create({
            nome: req.body.nome,
            email: req.body.email,
            sugestao: req.body.sugest_usr
        }).then(function(){
            console.log("Dados do usuário recebidos com sucesso!");
            res.redirect('/');
        }).catch(function(erro){
            console.log("Erro ao receber dados do usuário! Erro:" + erro);
        });
    }
});

app.listen("8080", function(){
    console.log("Servidor rodando em http://localhost:8080");
}); //Está sempre tem que ser a última linha do código de um projeto com express
