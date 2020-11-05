var bodyParser=require('body-parser');
//підключаємо модуль express
const express=require('express');
const mongoose = require('mongoose');

require('dotenv').config()

var User=require('./models/user');
const ObjectId = mongoose.Types.ObjectId;

//створюємо проект
const app=express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//папка для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname));
//опрацювання кореневого шляху -віддати клієнту index.html
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})
//порт прослуховування для сервера
//автоматичний підбір для віддаленого сервера,
//або 8080 для localhost
const port = process.env.PORT || 8080;
app.listen(port);
//повідомлення про запуск сервера
console.log('Run server on a port', port);


app.get('/getusers',function(req,res) {
  User.find(function (err, data) {
    res.send(data);
  });
});

app.post('/adduser',function(req,res) {
  console.log(req.body);
  var user = new User(req.body);
  user.save(function (err, data) {
    if (err) {
      console.log(err.message);
      return res.status(400).send({message: err.message});
    }
    console.log(data);
    res.status(200).send({message: 'add user!'});
  });
});

app.put('/updateuser',function(req,res) {
  console.log(req.body);
  User.findOneAndUpdate({_id: req.body._id}, {...req.body},{}, function (err, data) {
    if (err) {
      console.log(err.message);
      return res.status(400).send({message: err.message});
    }
    console.log(data);
    res.status(200).send({message: 'user updated!'});
  });
});

app.post('/deleteuser',function(req,res){
  console.log(req.body);
  User.remove({_id:req.body.id},function(err,data){
    res.status(200).send({message: 'remove user'});
  })
})
