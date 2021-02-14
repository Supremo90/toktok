/*import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import Elements from './models/dbModel.js';*/

const express = require('express'); //Richiesta modulo
const mongoose = require('mongoose');
const Elements = require('./models/dbModel');
const data = require("./data");

const hostname = 'localhost';
const app = express();

var port = process.env.PORT || 9000;
//DB config
const connection ="mongodb+srv://ad:HvaOPduknXu2pbKf@cluster0.w7qpu.mongodb.net/toktok?retryWrites=true&w=majority";
mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));

//Middleware static
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
app.get('/', (req,res) => res.status(200).send("WELCOME SERVER TOKTOK"));

app.get('/v1/posts', function(req, res) {
    var a = data.length;
    console.log(a);
    res.send(data);
});

  

/*app.post('/v2/posts', function (req, res) {
    const blog = new Elements(req.body);
    blog.create(blog, (err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
  });
*/

  app.get('/v', function(req, res) {
    Elements.find()
    .then((result) => {
      res.send(result); 
    })
    .catch((err) => {
      console.log(err);
    });
  });



/*app.get('/c', function(req, res) {
    const el = new Elements({
        url:"https://www.gettyimages.it/gi-resources/images/500px/983794168.jpg",
        likes: "237",
    });
      el.save() //serve per salvare il modello nel database
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err);
      });
    
});*/

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });