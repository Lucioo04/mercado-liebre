const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Servicio ubicados en el puerto 3000");
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'));
})

app.post('/registro',(req,res)=>{
    console.log(req.body);
    res.redirect("/");
})

app.post ('/registro',(req,res)=>{
console.log(req.body);
res.redirect("/");
})

app.use(express.static(path.join(__dirname, '/public')));
