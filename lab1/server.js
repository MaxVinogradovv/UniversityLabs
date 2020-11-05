const fs = require('fs');
//підключаємо модуль express
const express=require('express');
//створюємо проект
const app=express();
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



app.get('/getusers',function(req,res){
  fs.readFile('data.json','utf-8',function(err,data){
    console.log(data);
    res.send(data);
  })
})
