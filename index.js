//------------ npm express setting --------------
var express = require('express');
var app = express();
var multer = require('multer');
app.use(express.static('public'));
var bootstrap = require("express-bootstrap-service");
var bodyPaser = require('body-parser');

//------------ local server port setting ---------
app.set('port', (process.env.PORT || 5000));

//----------- pug(former 'jade') setting -----------
app.set('view engine','pug');
app.set('views', './views');
app.use(bootstrap.serve);
app.use(bodyPaser.urlencoded({extended:false}));

//------------ Pages Routing -------------------------
  //------------ main(search) page -------------------------
app.get('/', function(req,res){
  res.render('intro');
});

  //------------ sub(homeplus) page -------------------------
app.get('/homeplus', function(req,res){
  res.render('homeplus');
});
  //------------ sub(jejuair_2000) page -------------------------
app.get('/jejuair_2000', function(req,res){
  res.render('jejuair_2000');
});
  //------------ sub(jejuair_parent) page -------------------------
app.get('/jejuair_parent', function(req,res){
  res.render('jejuair_parent');
});
  //------------ sub(jejuair_kimsoohyun) page -------------------------
app.get('/jejuair_kimsoohyun', function(req,res){
  res.render('jejuair_kimsoohyun');
});
  //------------ sub(jejuair_newflight) page -------------------------
app.get('/jejuair_newflight', function(req,res){
  res.render('jejuair_newflight');
});
//----- node.js tutorial's app.listen method -----
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});