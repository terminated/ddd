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

 app.get('/ahp2', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../public/ahp/index2.html'));
 });

 app.get('/ahp3', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../public/ahp/index3.html'));
 });

 app.get('/topsis', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../public/topsis/index.html'));
 });

  app.get('/ahp/par1', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../public/ahp/par1.html'));
    // console.log(req.body.data);      

 });

  app.get('/ahp/par2', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../public/ahp/par2.html'));
 });

  app.get('/ahp/result', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../public/ahp/result.html'));
 });

  

};
