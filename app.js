const express = require('express');
const app = express();

const path = require ('path');
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.listen(5000, ()=>{
    console.log("Server 5000 running");
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/product-detail', function(req, res){
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

app.get('/rental-cart', function(req, res){
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, './views/login.html'));
});