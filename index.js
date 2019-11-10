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
  var doc1 = {'tipo':'desactivar'};
  /*MongoClient.connect("mongodb+srv://Lizama:Micronpe.-1@proyectoarqui-ydupz.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true },function(err, db) {
        if(!err) {
            console.log("We are connected");         
            var dbo = db.db("arqui");
            dbo.collection("culebra").insertOne(doc1, function(err, res) {
              if (!err){               
                console.log("1 document inserted");
                db.close();
              }else console.log("Error");
            });


          }
        });*/
  res.status(200).send({ "message":"Modo Celular desactivado"});
});


app.get('/pop', (req, res) => {
    res.status(200).send({ "message":arreglo.pop()});
  /*MongoClient.connect("mongodb+srv://Lizama:Micronpe.-1@proyectoarqui-ydupz.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true },function(err, db) {
        if(!err) {
            console.log("We are connected");         
            var dbo = db.db("arqui");
            dbo.collection("culebra").findOne({}, function(err, result) {
    			if (err) throw err;
	    		if(result){
	    			console.log(result.tipo);
	    			res.status(200).send({ "message":result.tipo});
	    			var myquery = { 'tipo': result.tipo };
	  				dbo.collection("culebra").deleteOne(myquery, function(err, obj) {
	    				if (err) throw err;
	    				console.log("1 document deleted");
	    				db.close();
	  				});
	  			}else{
	  				res.status(200).send({ "message":"none"});
	  				db.close();
	  			}
  			});  			

          }
        });  */
});

app.get('/texto', function(req, res){
    console.log('POST /');
    console.log(req.query.palabra);
    var doc1 = {'tipo':req.query.palabra};
    arreglo.push(req.query.palabra);

  /*	MongoClient.connect("mongodb+srv://Lizama:Micronpe.-1@proyectoarqui-ydupz.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true },function(err, db) {
        if(!err) {
            console.log("We are connected");         
            var dbo = db.db("arqui");
            dbo.collection("culebra").insertOne(doc1, function(err, res) {
              if (!err){               
                console.log("1 document inserted");
                db.close();
              }else{
                console.log("Error");
              }
            });


          }
        });  */
    res.status(200).send({ "message":"Palabra Registrada"});
});


app.listen(port, () => {
  console.log(`API Rest corriendo en http://localhost:${port}`);

});