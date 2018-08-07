const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.locals.pretty = true;
app.set('view engine','jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));


app.get('/form', function(req,res){
    res.render('form');
});
app.post('/form_receiver',function(req,res){
    const title = req.body.title;
    const description = req.body.description;

    res.send(title+','+description);
});
app.get('/topic',(req,res)=>{
    const topics = [
      'Javascript is.....',
        'Nodejs is....',
        'Express is....'
    ];

    const output = `
        <a href="/topic?id=0">Javascript</a><br>
        <a href="/topic?id=1">Nodejs</a><br>
        <a href="/topic?id=2">Express</a><br><br>
${topics[req.query.id]}
    `;

    res.send(output);

});

app.get('/topic/:id/:mode',(req,res)=>{
   res.send(req.params.id+','+req.params.mode);
});




app.get('/template',(req,res)=>{
   res.render('temp', {time:Date(),_title:'Jade'});
});

app.get('/', function(req, res){
    res.send('Hello home page');
});

app.get('/login',function(req,res){
    res.send('Login please');
});

app.get('/route',function(req,res){
    res.send('Hello Router,<img src="/img-cocos.jpg">');
})
app.get('/dynamic',(req,res)=>{
    let lis = '';
    for(let i=0; i <5 ; i++){
        lis = lis + '<li>coding</li>';
    }
    const output = `<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    Hello !! Dynamic
    ${lis}
</body>
</html>`
    res.send(output);
});

//listen(port,function)
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
