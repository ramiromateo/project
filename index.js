'use strict'
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var objectID = MongoClient.ObjectId;
var activar=false;
const app = express();
const port = process.env.PORT || 8000;

var arreglo=new Array();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {    
  res.status(200).send({ "message":"Entrando al Api"});
});



app.get('/desactivar', (req, res) => {
    console.log("Desactivando");
   arreglo.push('desactivar');
  res.status(200).send({ "message":"Modo Celular desactivado"});
	arreglo=new Array();
	arreglo.push('desactivar');
});


app.get('/pop', (req, res) => {
	console.log(arreglo.length);
	if(arreglo.length>0)  
		res.status(200).send({ "message":arreglo.pop()});
	else res.status(200).send({ "message":"none"});
  
});

app.get('/texto', function(req, res){
    console.log('Palabra almacenada /');
    console.log(req.query.palabra);
    var doc1 = {'tipo':req.query.palabra};
    arreglo.push(req.query.palabra);

  
    res.status(200).send({ "message":"Palabra Registrada"});
});


app.listen(port, () => {
  console.log(`API Rest corriendo en http://localhost:${port}`);

});
