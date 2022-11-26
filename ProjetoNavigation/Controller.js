const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const models=require('./models');


const app= express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
//chamamos o models User:
let user =  models.Usuario;
let posts = models.Posts;
//localhost:3000 é o local do meu servidor backend
let port=process.env.PORT || 3005;
//req = requisição res= resposta

//abrir nosso servidor na porta declarada 3000
app.get('/',(req,res)=>{
    res.send('Meu servidor backend rodando!');
});
 
//TRABALHANDO COM O CRUD
//o crud tem no sequelize, na aba models
//comentamos a rota do servidor rodando.


//create
app.post('/create',async (req,res)=>{
    let response = await user.create({
        nome: req.body.nome,
        senha: req.body.senha,
        telefone: req.body.telefone,
        email: req.body.email
    })
    console.log(response)
    if(response = null){
        res.send(JSON.stringify('Error'))
    }else{
        res.send(response)
    }
});

//read
app.get('/read',async (req,res)=>{
    let read = await user.findAll({
        raw:true
    });
    res.send(read);
});

//ATUALIZANDO - update
app.get('/update', async (req,res)=>{
    let update=await user.findByPk(2).then((response)=>{
        //console.log(response);
        response.name='Joaozinho';
        response.save();
    });
});

//EXCLUINDO - delete
app.get('/delete', async (req,res)=>{
    user.destroy({
        where: {id:3}
    });
});

// INTEGRAÇÃO DO FRONT COM O BACK:

/* //teste do servidor backend
app.post('/login', (req,res)=>{
    console.log(req.body);
}); */

app.post('/login', async (req,res)=>{
    const response= await user.findOne({
        where: {email: req.body.email, senha: req.body.senha}
    });

    if (response == null){
        res.send(JSON.stringify('error'));
    }else {
        res.send(response);
        console.log(response.nome)
    }
}); 

app.post('/posts',async (req,res)=>{
    let response = await posts.create({
        titulo: req.body.titulo,
        genero: req.body.genero,
        sinopse: req.body.sinopse,
        autor: req.body.autor,
        comentario: req.body.comentario,
        classificacao: req.body.classificacao,
        opcao: req.body.opcao,
    })
    if(response = null){
        res.send(JSON.stringify('Error'))
    }else{
        res.send(response)
    }

});

app.get('/posts', async (req,res)=>{
    let read = await posts.findAll();
    res.json(read)
})

app.get('/usuarios/:email', async (req,res)=>{
    let read = await user.findOne()
    res.json(read)
})
app.get('/posts/:id', async (req,res)=>{
    let read = await posts.findOne()
    res.json(read)
})


app.listen(port,(req,res)=>{
    console.log('servidor onn');
});


 //console.log(response);
    //Agora vamos fazer um if para verificar se for nulo eu devolvo um erro e se for correto eu devolvo o usuario e a senha para o front end