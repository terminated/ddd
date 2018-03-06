var path = require('path');
var fs = require('fs');
// var express = require('express');
// var app = express();
module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

 app.get('/ahp', function(req, res){
 	res.sendFile(path.resolve(__dirname+'/../../public/ahp/index.html'));
 });

  app.get('/ahp/par1', function(req, res){
 	res.sendFile(path.resolve(__dirname+'/../../public/ahp/par1.html'));
 });

  app.get('/ahp/par2', function(req, res){
 	res.sendFile(path.resolve(__dirname+'/../../public/ahp/par2.html'));
 });

};
