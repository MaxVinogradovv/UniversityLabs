var express=require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/dist/my-app'));
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/',function(req,res){
  res.sendFile(__dirname+'/dist/my-app/index.html');
})
app.listen(process.env.PORT||8080);
console.log('server is run!');
